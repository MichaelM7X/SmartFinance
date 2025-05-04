import { 
  DollarSign,
  TrendingUp,
  Award
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Track Payments",
      description: "Monitor your spending habits, set budgets, and receive notifications when bills are due. Stay on top of your finances with ease."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Build Credit",
      description: "Establish your credit history with our secured card option. Learn how credit works and improve your score over time."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Earn Rewards",
      description: "Get points for smart financial decisions and redeem them for products, gift cards, and more in our rewards shop."
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Student Success</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our app is designed specifically for college students navigating their financial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary/20 rounded-xl p-8 shadow-md transition hover:shadow-lg border border-secondary/10">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
