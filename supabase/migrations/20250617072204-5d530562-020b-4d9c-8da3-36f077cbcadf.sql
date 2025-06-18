
-- Add more categories
INSERT INTO public.categories (name, description, image_url) VALUES
  ('Beauty & Health', 'Beauty products and health supplements', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop'),
  ('Automotive', 'Car accessories and automotive parts', 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop'),
  ('Kitchen & Dining', 'Kitchen appliances and dining essentials', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop'),
  ('Office Supplies', 'Office equipment and stationery', 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500&h=500&fit=crop'),
  ('Gaming', 'Video games and gaming accessories', 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=500&fit=crop');

-- Add more products across different categories and price ranges
INSERT INTO public.products (name, description, price, original_price, category_id, image_url, images, tags, in_stock, stock_quantity, rating, review_count) 
SELECT 
  'Bluetooth Speaker Pro',
  'Portable wireless speaker with deep bass and 12-hour battery life. Perfect for outdoor adventures.',
  79.99,
  99.99,
  c.id,
  'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop'],
  ARRAY['bluetooth', 'speaker', 'portable', 'wireless'],
  true,
  30,
  4.4,
  156
FROM public.categories c WHERE c.name = 'Electronics'
UNION ALL
SELECT 
  'Gaming Laptop Ultra',
  'High-performance gaming laptop with RTX graphics and 144Hz display.',
  1299.99,
  1599.99,
  c.id,
  'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop'],
  ARRAY['gaming', 'laptop', 'rtx', 'high-performance'],
  true,
  15,
  4.7,
  89
FROM public.categories c WHERE c.name = 'Electronics'
UNION ALL
SELECT 
  'Vintage Denim Jacket',
  'Classic denim jacket with a vintage wash. Perfect for layering in any season.',
  69.99,
  NULL,
  c.id,
  'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop'],
  ARRAY['denim', 'jacket', 'vintage', 'casual'],
  true,
  80,
  4.1,
  43
FROM public.categories c WHERE c.name = 'Clothing'
UNION ALL
SELECT 
  'Premium Hoodie',
  'Comfortable cotton blend hoodie with a modern fit. Available in multiple colors.',
  45.99,
  59.99,
  c.id,
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'],
  ARRAY['hoodie', 'cotton', 'comfortable', 'casual'],
  true,
  120,
  4.3,
  78
FROM public.categories c WHERE c.name = 'Clothing'
UNION ALL
SELECT 
  'Running Shoes Elite',
  'Professional running shoes with advanced cushioning and breathable mesh.',
  129.99,
  149.99,
  c.id,
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'],
  ARRAY['running', 'shoes', 'athletic', 'breathable'],
  true,
  60,
  4.6,
  134
FROM public.categories c WHERE c.name = 'Sports'
UNION ALL
SELECT 
  'Yoga Mat Premium',
  'Non-slip yoga mat with extra thickness for comfort during practice.',
  24.99,
  34.99,
  c.id,
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop'],
  ARRAY['yoga', 'mat', 'fitness', 'non-slip'],
  true,
  40,
  4.2,
  67
FROM public.categories c WHERE c.name = 'Sports'
UNION ALL
SELECT 
  'Garden Tool Set',
  'Complete 5-piece garden tool set with ergonomic handles.',
  39.99,
  NULL,
  c.id,
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop'],
  ARRAY['garden', 'tools', 'ergonomic', 'outdoor'],
  true,
  25,
  4.0,
  32
FROM public.categories c WHERE c.name = 'Home & Garden'
UNION ALL
SELECT 
  'LED Plant Growing Light',
  'Full spectrum LED grow light for indoor plants and herbs.',
  89.99,
  119.99,
  c.id,
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop'],
  ARRAY['led', 'grow-light', 'plants', 'indoor'],
  true,
  18,
  4.5,
  45
FROM public.categories c WHERE c.name = 'Home & Garden'
UNION ALL
SELECT 
  'Programming Guide Complete',
  'Comprehensive guide to modern programming languages and frameworks.',
  34.99,
  NULL,
  c.id,
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop'],
  ARRAY['programming', 'guide', 'educational', 'technology'],
  true,
  100,
  4.8,
  145
FROM public.categories c WHERE c.name = 'Books'
UNION ALL
SELECT 
  'Skincare Routine Kit',
  'Complete 4-step skincare routine with natural ingredients.',
  59.99,
  79.99,
  c.id,
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop'],
  ARRAY['skincare', 'routine', 'natural', 'beauty'],
  true,
  45,
  4.4,
  89
FROM public.categories c WHERE c.name = 'Beauty & Health'
UNION ALL
SELECT 
  'Protein Powder Premium',
  'Whey protein powder with natural flavors. 30 servings per container.',
  49.99,
  NULL,
  c.id,
  'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop'],
  ARRAY['protein', 'whey', 'fitness', 'supplement'],
  true,
  75,
  4.3,
  112
FROM public.categories c WHERE c.name = 'Beauty & Health'
UNION ALL
SELECT 
  'Car Phone Mount',
  'Magnetic car phone mount with 360-degree rotation.',
  19.99,
  29.99,
  c.id,
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop'],
  ARRAY['car', 'phone', 'mount', 'magnetic'],
  true,
  200,
  4.1,
  234
FROM public.categories c WHERE c.name = 'Automotive'
UNION ALL
SELECT 
  'Espresso Machine Deluxe',
  'Professional-grade espresso machine with milk frother.',
  299.99,
  399.99,
  c.id,
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop'],
  ARRAY['espresso', 'coffee', 'machine', 'professional'],
  true,
  12,
  4.7,
  76
FROM public.categories c WHERE c.name = 'Kitchen & Dining'
UNION ALL
SELECT 
  'Ergonomic Office Chair',
  'Adjustable office chair with lumbar support and breathable mesh.',
  199.99,
  249.99,
  c.id,
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500&h=500&fit=crop'],
  ARRAY['office', 'chair', 'ergonomic', 'adjustable'],
  true,
  35,
  4.5,
  98
FROM public.categories c WHERE c.name = 'Office Supplies'
UNION ALL
SELECT 
  'Gaming Mechanical Keyboard',
  'RGB mechanical keyboard with customizable keys and macro support.',
  149.99,
  179.99,
  c.id,
  'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=500&fit=crop'],
  ARRAY['gaming', 'keyboard', 'mechanical', 'rgb'],
  true,
  28,
  4.6,
  145
FROM public.categories c WHERE c.name = 'Gaming';

-- Add some out of stock items for testing
INSERT INTO public.products (name, description, price, original_price, category_id, image_url, images, tags, in_stock, stock_quantity, rating, review_count) 
SELECT 
  'Limited Edition Sneakers',
  'Exclusive limited edition sneakers - currently sold out.',
  199.99,
  NULL,
  c.id,
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop'],
  ARRAY['sneakers', 'limited', 'exclusive', 'sold-out'],
  false,
  0,
  4.9,
  67
FROM public.categories c WHERE c.name = 'Sports';
