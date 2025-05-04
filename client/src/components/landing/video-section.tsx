import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="demo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See SmartFin in Action</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch how our app helps students take control of their financial future.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-light rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-w-16 aspect-h-9 relative pt-[56.25%]">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 bg-white/20 p-6 rounded-full inline-block">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <p className="text-lg font-medium">SmartFin Demo Video</p>
                <p className="text-sm text-gray-600">(Video placeholder - actual embed would go here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
