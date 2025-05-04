import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function SignupForm() {
  const { registerMutation } = useAuth();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!termsAccepted) {
      toast({
        title: "Terms not accepted",
        description: "You must accept the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return;
    }
    
    registerMutation.mutate({
      name,
      email,
      password,
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="signupName">Full Name</Label>
        <Input
          id="signupName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="signupEmail">Email Address</Label>
        <Input
          id="signupEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="signupPassword">Password</Label>
        <Input
          id="signupPassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked === true)}
          required
        />
        <Label htmlFor="terms" className="text-sm text-gray-700">
          I agree to the 
          <a href="#" className="text-primary hover:underline mx-1">Terms of Service</a>
          and 
          <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a>
        </Label>
      </div>
      
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-opacity-90"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending ? "Signing up..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
}
