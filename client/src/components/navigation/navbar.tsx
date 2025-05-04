import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Gift } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLogout = () => {
    logoutMutation.mutate();
    setMobileMenuOpen(false);
  };
  
  const isHomePage = location === "/";
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold">SmartFin</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#features" className="hover:text-primary transition">Features</a>
                <a href="#about" className="hover:text-primary transition">About</a>
                <a href="#demo" className="hover:text-primary transition">Demo</a>
                <a href="#contact" className="hover:text-primary transition">Contact</a>
              </>
            ) : (
              <Link href="/" className="hover:text-primary transition">Home</Link>
            )}
            {user && (
              <Link href="/rewards" className="flex items-center font-medium text-primary transition">
                <Gift className="w-4 h-4 mr-1" />
                Rewards Shop
              </Link>
            )}
          </div>
          
          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{user.name}</span>
                  <Badge className="bg-primary text-white px-3 py-1 font-bold">
                    {user.points} points
                  </Badge>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={handleLogout}
                  className="rounded-full"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth">
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button 
                    className="bg-primary text-white hover:bg-primary/90 rounded-full"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-2">
              {isHomePage ? (
                <>
                  <a 
                    href="#features" 
                    className="hover:text-primary transition py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#about" 
                    className="hover:text-primary transition py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#demo" 
                    className="hover:text-primary transition py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Demo
                  </a>
                  <a 
                    href="#contact" 
                    className="hover:text-primary transition py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </>
              ) : (
                <Link 
                  href="/" 
                  className="hover:text-primary transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              {user && (
                <Link 
                  href="/rewards" 
                  className="flex items-center font-medium text-primary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Gift className="w-4 h-4 mr-1" />
                  Rewards Shop
                </Link>
              )}
            </div>
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
              {user ? (
                <>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{user.name}</span>
                    <Badge className="bg-primary text-white px-3 py-1 font-bold">
                      {user.points} points
                    </Badge>
                  </div>
                  <Button 
                    variant="destructive"
                    onClick={handleLogout}
                    className="rounded-full"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      className="w-full bg-primary text-white hover:bg-primary/90 rounded-full"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
