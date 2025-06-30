
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Ollivve </span>
              <span className="text-green-500">Cart</span>
            </h3>
            <p className="text-gray-400">Your trusted e-commerce partner for quality products and exceptional service.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            {/* <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul> */}

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">Help Center</li>
              <li className="hover:text-white transition-colors">Returns</li>
              <li className="hover:text-white transition-colors">Shipping Info</li>
              <li className="hover:text-white transition-colors">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates and exclusive offers</p>
            <div className="flex">
              <Input placeholder="Your email" className="rounded-r-none" />
              <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Abhinav's Ollivve cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
