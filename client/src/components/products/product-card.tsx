import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/utils/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-white font-bold px-3 py-1 text-sm">
          {product.points} points
        </Badge>
      </div>
      <CardContent className="p-4">
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
