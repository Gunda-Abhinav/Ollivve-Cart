import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Users, Target, Heart, Shield, Truck, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Ollivve cart</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted e-commerce partner since 2020, bringing you quality products 
            and exceptional service with a commitment to sustainability and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2020 by a team of passionate entrepreneurs, Ollivve cart began as a small 
                startup with a big vision: to make quality products accessible to everyone while 
                maintaining ethical business practices.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a simple online marketplace has grown into a trusted platform 
                serving thousands of customers worldwide. We've built our reputation on three 
                core principles: quality, transparency, and exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to offer over 10,000 products across multiple categories, 
                working with verified suppliers who share our commitment to excellence.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">50,000+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're driven by a simple mission: to make online shopping better for everyone 
              through innovation, integrity, and genuine care for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600 text-sm">
                  Every product is carefully curated and tested to meet our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customer Care</h3>
                <p className="text-gray-600 text-sm">
                  Your satisfaction is our priority. We're here to help every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trust & Security</h3>
                <p className="text-gray-600 text-sm">
                  Your data and transactions are protected with industry-leading security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Quick and reliable shipping to get your orders to you as fast as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every great product is an even greater team. Meet the people who make Ollivve cart possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" 
                  alt="Sarah Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-green-600 text-sm mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Passionate about creating exceptional customer experiences and building sustainable business practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&crop=face" 
                  alt="Michael Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-green-600 text-sm mb-2">CTO</p>
                <p className="text-gray-600 text-sm">
                  Technology enthusiast focused on building scalable platforms and innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=200&fit=crop&crop=face" 
                  alt="Emily Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Emily Rodriguez</h3>
                <p className="text-green-600 text-sm mb-2">Head of Customer Success</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to ensuring every customer has an amazing experience with our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're honored to be recognized by industry leaders and customers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Best E-commerce Platform 2023</h3>
                <p className="text-gray-600 text-sm">Digital Commerce Awards</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Customer Choice Award</h3>
                <p className="text-gray-600 text-sm">Retail Excellence Awards</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Sustainable Business Leader</h3>
                <p className="text-gray-600 text-sm">Green Commerce Initiative</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">hello@Ollivve cart.com</p>
                <p className="text-gray-600">support@Ollivve cart.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (000) 111-1111</p>
                <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">123 abc Street</p>
                <p className="text-gray-600">San Francisco, CA 99999</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;