import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thanks for joining our waitlist!",
        description: "We'll be in touch soon.",
      });
      
      // Reset the form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-light rounded-xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-lg text-gray-700">
              Be among the first to experience SmartFin when we launch. Sign up for early access and exclusive rewards.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="university">University/College</Label>
              <Input 
                id="university" 
                name="university" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interests">What interests you most about SmartFin?</Label>
              <Select name="interests" required>
                <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tracking">Payment Tracking</SelectItem>
                  <SelectItem value="credit">Building Credit</SelectItem>
                  <SelectItem value="rewards">Earning Rewards</SelectItem>
                  <SelectItem value="education">Financial Education</SelectItem>
                  <SelectItem value="all">All Features</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
