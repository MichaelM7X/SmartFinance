import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, Award } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold inline-block mb-6">
              FOR COLLEGE STUDENTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smarter Finances<br />for a Brighter Future
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Take control of your money, build credit, and boost your financial literacy while earning rewards.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full flex items-center"
                onClick={scrollToContact}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 rounded-full"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-gray-700">Track Spending</p>
              </div>
              <div>
                <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-gray-700">Build Credit</p>
              </div>
              <div>
                <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-gray-700">Earn Rewards</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-xl"></div>
              <img 
                src="https://us.images.westend61.de/0001485010pw/smiling-young-blond-female-student-using-smart-phone-at-university-TCEF01375.jpg" 
                alt="College student using SmartFin app" 
                className="rounded-xl shadow-lg max-w-full h-auto relative bg-blend-darken" 
                width="600" 
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
