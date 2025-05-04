import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/landing/footer";
import ProductCard from "@/components/products/product-card";
import ProductModal from "@/components/products/product-modal";
import { Button } from "@/components/ui/button";
import { getProducts, Product, ProductCategory } from "@/utils/products";

export default function RewardsShop() {
  const { user, updatePoints } = useAuth();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("trending");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const products = getProducts();
  
  const categories: { id: ProductCategory; name: string }[] = [
    { id: "trending", name: "Trending" },
    { id: "clothing", name: "Clothing" },
    { id: "tech", name: "Tech" },
    { id: "giftCards", name: "Gift Cards" },
  ];
  
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };
  
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  const handleRedeemProduct = (product: Product) => {
    if (!user) return;
    
    if (user.points < product.points) {
      return false; // Not enough points
    }
    
    // Update user points
    updatePoints(user.points - product.points);
    return true;
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Rewards Shop</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Use your points to redeem these exclusive products and gift cards.
            </p>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-md inline-block">
              <span className="text-lg font-medium">
                Your Balance: <span className="text-primary font-bold">{user?.points || 0}</span> points
              </span>
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="px-6 py-2 rounded-full"
                onClick={() => setActiveCategory(category.id)}
              >
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
