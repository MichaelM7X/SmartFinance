import { 
  users, 
  type User, 
  type RegisterUser 
} from "database/schema";
import createMemoryStore from "memorystore";
import session from "express-session";
import { Store } from "express-session";

// Create memory store for sessions
const MemoryStore = createMemoryStore(session);

// Storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: RegisterUser): Promise<User>;
  updateUserPoints(userId: number, points: number): Promise<User>;
  sessionStore: Store;
}

// In-memory implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;
  sessionStore: Store;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // 24 hours
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(userData: RegisterUser): Promise<User> {
    const id = this.currentId++;
    const newUser: User = {
      id,
      ...userData,
      points: 1000, // New users start with 1000 points
      createdAt: new Date(),
    };

    this.users.set(id, newUser);
    return newUser;
  }

  async updateUserPoints(userId: number, points: number): Promise<User> {
    const user = this.users.get(userId);
    
    if (!user) {
      throw new Error("User not found");
    }
    
    const updatedUser = {
      ...user,
      points,
    };
    
    this.users.set(userId, updatedUser);
    return updatedUser;
  }
}

export const storage = new MemStorage();
