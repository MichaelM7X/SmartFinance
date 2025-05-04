import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/landing/footer";
import ProductCard from "@/components/products/product-card";
import ProductModal from "@/components/products/product-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, TrendingUp, Shirt, Smartphone, CreditCard } from "lucide-react";
import { getProducts, Product, ProductCategory } from "@/utils/products";

export default function RewardsShop() {
  const { user, updatePoints } = useAuth();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("trending");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const products = getProducts();
  
  const categories: { id: ProductCategory; name: string; icon: React.ReactNode }[] = [
    { id: "trending", name: "Trending", icon: <TrendingUp className="w-4 h-4 mr-1" /> },
    { id: "clothing", name: "Clothing", icon: <Shirt className="w-4 h-4 mr-1" /> },
    { id: "tech", name: "Tech", icon: <Smartphone className="w-4 h-4 mr-1" /> },
    { id: "giftCards", name: "Gift Cards", icon: <CreditCard className="w-4 h-4 mr-1" /> },
  ];
  
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };
  
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  const handleRedeemProduct = (product: Product) => {
    if (!user) return false;
    
    if (user.points < product.points) {
      return false; // Not enough points
    }
    
    // Update user points
    updatePoints(user.points - product.points);
    return true;
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <Navbar />
      
      <div className="bg-primary text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">SmartFin Rewards Shop</h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Use your points to redeem exclusive products and gift cards
              </p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                <div className="text-accent text-sm font-medium mb-1">YOUR BALANCE</div>
                <div className="flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{user?.points || 0}</span>
                  <span className="text-gray-700">points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-10 gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full flex items-center ${
                  activeCategory === category.id ? 
                  "bg-primary text-white" : 
                  "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products[activeCategory].map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleProductSelect}
              />
            ))}
          </div>
          
          {/* Not enough points notice */}
          {user && user.points < 200 && (
            <div className="mt-12 bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Need more points?</h3>
              <p className="text-gray-700 mb-4">
                Complete more financial tasks in the SmartFin app to earn additional points!
              </p>
              <Badge className="px-4 py-2 bg-primary text-white font-bold text-sm">
                Download the SmartFin App
              </Badge>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onRedeem={handleRedeemProduct}
          userPoints={user?.points || 0}
        />
      )}
    </div>
  );
}
