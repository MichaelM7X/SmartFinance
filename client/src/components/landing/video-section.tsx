import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="demo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
            DEMO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See SmartFin in Action</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch how our app helps students take control of their financial future.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-light rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe 
              src="https://www.youtube.com/embed/mLMHAoytQBM" 
              title="SmartFin Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ height: '400px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
