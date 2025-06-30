import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, X } from "lucide-react";
import { Product } from "@/types/database";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { user } = useAuth();
  const { addToCart, isAddingToCart } = useCart();
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);

  const discountPercentage = product.original_price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : null;

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to add items to your cart.",
        variant: "destructive",
      });
      return;
    }

    if (!product.in_stock) {
      toast({
        title: "Out of stock",
        description: "This item is currently unavailable.",
        variant: "destructive",
      });
      return;
    }

    addToCart({ productId: product.id });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "overlay") {
      setShowPopup(false);
    }
  };

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {discountPercentage && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
              -{discountPercentage}%
            </Badge>
          )}

          {!product.in_stock && (
            <Badge className="absolute top-3 right-3 bg-gray-500">
              Out of Stock
            </Badge>
          )}

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category?.name || 'Uncategorized'}
            </Badge>
          </div>

          {/* On click, show popup */}
          <h3
            onClick={() => setShowPopup(true)}
            className="font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors line-clamp-2 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              {product.rating} ({product.review_count})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.original_price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.original_price}
                </span>
              )}
            </div>

            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              disabled={!product.in_stock || isAddingToCart}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isAddingToCart ? 'Adding...' : product.in_stock ? 'Add to Cart' : 'Sold Out'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Popup Overlay with animation */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            id="overlay"
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={product.image_url || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover rounded mb-4"
              />

              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <Button onClick={handleAddToCart} className="bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
