import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/utils/products";
import { Gift, Check, AlertTriangle } from "lucide-react";

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

  const canRedeem = userPoints >= product.points;

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="md:w-1/2 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="rounded-lg w-full h-auto object-cover border-4 border-white shadow-md"
            />
            <Badge className="absolute top-2 right-2 bg-primary text-white font-bold px-3 py-1 text-sm">
              {product.points} points
            </Badge>
          </div>
          
          <div className="md:w-1/2 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between bg-secondary/30 rounded-lg p-3 mb-4">
                <span className="font-medium">Your points:</span>
                <span className="font-bold text-primary">{userPoints}</span>
              </div>
              
              {canRedeem ? (
                <div className="flex items-center text-sm text-green-600 mb-2">
                  <Check className="w-4 h-4 mr-1" />
                  You have enough points to redeem this item!
                </div>
              ) : (
                <div className="flex items-center text-sm text-red-500 mb-2">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  You need {product.points - userPoints} more points to redeem this item
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white"
          >
            Cancel
          </Button>
          <Button
            className="bg-primary text-white hover:bg-primary/90 rounded-full flex items-center"
            onClick={handleRedeem}
            disabled={isRedeeming || !canRedeem}
          >
            {isRedeeming ? (
              "Processing..."
            ) : (
              <>
                <Gift className="w-4 h-4 mr-2" />
                Redeem Now
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
