import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/utils/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onRedeem: (product: Product) => boolean;
  userPoints: number;
}

export default function ProductModal({
  product,
  onClose,
  onRedeem,
  userPoints,
}: ProductModalProps) {
  const { toast } = useToast();
  const [isRedeeming, setIsRedeeming] = useState(false);

  const handleRedeem = () => {
    setIsRedeeming(true);
    
    if (userPoints < product.points) {
      toast({
        title: "Not enough points",
        description: `You need ${product.points - userPoints} more points to redeem this product.`,
        variant: "destructive",
      });
      setIsRedeeming(false);
      return;
    }
    
    // Simulate redemption process
    setTimeout(() => {
      const success = onRedeem(product);
      
      if (success) {
        toast({
          title: "Product Redeemed!",
          description: `You've successfully redeemed ${product.name}.`,
        });
        onClose();
      } else {
        toast({
          title: "Redemption Failed",
          description: "There was an error redeeming this product. Please try again.",
          variant: "destructive",
        });
      }
      
      setIsRedeeming(false);
    }, 1000);
  };

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2 flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                {product.points} points
              </span>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {userPoints < product.points && (
              <div className="mt-2 text-sm text-red-500">
                You need {product.points - userPoints} more points to redeem this product.
              </div>
            )}
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-primary text-white hover:bg-primary/90"
            onClick={handleRedeem}
            disabled={isRedeeming || userPoints < product.points}
          >
            {isRedeeming ? "Processing..." : "Redeem Now"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
