import { createContext, ReactNode, useContext, useEffect } from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { User, RegisterUser } from "@shared/schema";
import { queryClient } from "../lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type LoginData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<User, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<User, Error, RegisterUser>;
  updatePoints: (points: number) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const USER_STORAGE_KEY = "smartfin_user";
const USERS_STORAGE_KEY = "smartfin_users";

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  // Get saved user from localStorage
  const getSavedUser = (): User | null => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to parse saved user", error);
      return null;
    }
  };

  // Mock query to simulate backend
  const {
    data: user,
    error,
    isLoading,
    refetch,
  } = useQuery<User | null, Error>({
    queryKey: ["/api/user"],
    queryFn: () => Promise.resolve(getSavedUser()),
    initialData: getSavedUser,
  });

  useEffect(() => {
    // Update localStorage when user changes
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      
      // Also update in users collection
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "{}");
      users[user.email] = user;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }
  }, [user]);

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData): Promise<User> => {
      // Simulate login logic with localStorage
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "{}");
      const user = users[credentials.email];
      
      if (!user) {
        throw new Error("User not found");
      }
      
      if (user.password !== credentials.password) {
        throw new Error("Invalid password");
      }
      
      return user;
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["/api/user"], user);
      toast({
        title: "Login successful",
        description: `Welcome back, ${user.name}!`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: RegisterUser): Promise<User> => {
      // Simulate registration logic with localStorage
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "{}");
      
      if (users[userData.email]) {
        throw new Error("Email already in use");
      }
      
      const newUser: User = {
        id: Date.now(),
        ...userData,
        points: 1000,
        createdAt: new Date().toISOString(),
      };
      
      users[userData.email] = newUser;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      
      return newUser;
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["/api/user"], user);
      toast({
        title: "Registration successful",
        description: `Welcome to SmartFin, ${user.name}!`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      // Simulate logout logic - just remove from session
      localStorage.removeItem(USER_STORAGE_KEY);
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/user"], null);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updatePoints = (newPoints: number) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      points: newPoints,
    };
    
    queryClient.setQueryData(["/api/user"], updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
        updatePoints,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
