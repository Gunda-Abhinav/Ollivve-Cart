
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";

const Categories = () => {
  const { data: products } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  
  const getCategoryProductCount = (categoryName: string) => {
    return products?.filter(product => product.category?.name === categoryName).length || 0;
  };

  const getCategoryImage = (categoryName: string) => {
    const categoryProduct = products?.find(product => product.category?.name === categoryName);
    return categoryProduct?.image_url || "/placeholder.svg";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-gray-600 text-lg">Discover products organized by category</p>
        </div>

        {/* Categories Grid */}
        {categoriesLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-t-lg" />
                <Skeleton className="h-20 w-full rounded-b-lg" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories?.map((category) => (
              <Link key={category.id} to={`/products?category=${encodeURIComponent(category.name)}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <img 
                      src={category.image_url || getCategoryImage(category.name)} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                        <Badge variant="secondary" className="bg-white text-gray-900">
                          {getCategoryProductCount(category.name)} products
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      {category.description || `Explore our collection of ${category.name.toLowerCase()} products`}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )) || (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No categories found.</p>
              </div>
            )}
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">All Categories</h2>
          {categoriesLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-32 w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories?.map((category) => (
                <Link key={category.id} to={`/products?category=${encodeURIComponent(category.name)}`}>
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-semibold text-xl">{category.name[0]}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {getCategoryProductCount(category.name)} products
                    </p>
                  </div>
                </Link>
              )) || (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No categories available.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
