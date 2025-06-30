import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const ProductDetailPopup = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg max-w-4xl w-full shadow-xl z-50 overflow-y-auto max-h-[90vh] p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image section */}
          <div>
            <img
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded"
            />
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-4">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    src={img}
                    className={`h-16 w-full object-cover rounded cursor-pointer border-2 ${
                      selectedImage === i ? "border-green-600" : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info section */}
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h2 className="text-2xl font-bold mb-3">{product.name}</h2>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="line-through text-gray-500 text-xl">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-red-500">-{discountPercentage}% OFF</Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button className="bg-green-600 hover:bg-green-700 flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPopup;
