import Navbar from "@/components/navigation/navbar";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import AboutSection from "@/components/landing/about-section";
import VideoSection from "@/components/landing/video-section";
import WaitlistSection from "@/components/landing/waitlist-section";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <VideoSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
