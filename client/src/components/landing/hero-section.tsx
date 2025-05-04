import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Smarter Finances for Students
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Take control of your money, build credit, and boost your financial literacy while earning rewards.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
                onClick={scrollToContact}
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 rounded-full"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="College students using SmartFin app" 
              className="rounded-xl shadow-lg max-w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
