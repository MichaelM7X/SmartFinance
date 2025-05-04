import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/utils/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
          {product.points} points
        </div>
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-gray-700 text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onSelect(product)}
          className="w-full bg-primary text-white hover:bg-primary/90 rounded-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
