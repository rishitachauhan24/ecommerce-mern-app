// Sample Data Seeder for E-Commerce App
// Run this file to populate your database with sample products

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');

dotenv.config();

const sampleProducts = [
  // ==================== ELECTRONICS (10 Products) ====================
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    numReviews: 120
  },
  {
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    stock: 30,
    rating: 4.7,
    numReviews: 89
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker with 12-hour battery',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'Electronics',
    stock: 45,
    rating: 4.4,
    numReviews: 76
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with USB receiver',
    price: 599,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Electronics',
    stock: 100,
    rating: 4.3,
    numReviews: 143
  },
  {
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical gaming keyboard',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500',
    category: 'Electronics',
    stock: 35,
    rating: 4.6,
    numReviews: 98
  },
  {
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
    category: 'Electronics',
    stock: 60,
    rating: 4.5,
    numReviews: 52
  },
  {
    name: 'Webcam HD 1080p',
    description: 'Full HD webcam with auto-focus and noise reduction',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500',
    category: 'Electronics',
    stock: 40,
    rating: 4.4,
    numReviews: 67
  },
  {
    name: 'Power Bank 20000mAh',
    description: 'Fast charging power bank with dual USB ports',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500',
    category: 'Electronics',
    stock: 80,
    rating: 4.6,
    numReviews: 189
  },
  {
    name: 'Ring Light with Tripod',
    description: '10-inch LED ring light for photography and video',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=500',
    category: 'Electronics',
    stock: 55,
    rating: 4.5,
    numReviews: 93
  },
  {
    name: 'Phone Holder Stand',
    description: 'Adjustable aluminum phone stand for desk',
    price: 399,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
    category: 'Electronics',
    stock: 120,
    rating: 4.3,
    numReviews: 156
  },

  // ==================== CLOTHING (10 Products) ====================
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt - Multiple colors',
    price: 499,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Clothing',
    stock: 200,
    rating: 4.2,
    numReviews: 178
  },
  {
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans - Comfortable and durable',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'Clothing',
    stock: 150,
    rating: 4.5,
    numReviews: 234
  },
  {
    name: 'Formal Shirt',
    description: 'Premium cotton formal shirt for office wear',
    price: 899,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
    category: 'Clothing',
    stock: 120,
    rating: 4.4,
    numReviews: 145
  },
  {
    name: 'Hoodie Sweatshirt',
    description: 'Warm and cozy hoodie with front pocket',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
    category: 'Clothing',
    stock: 95,
    rating: 4.6,
    numReviews: 187
  },
  {
    name: 'Sports Jacket',
    description: 'Lightweight waterproof sports jacket',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    category: 'Clothing',
    stock: 70,
    rating: 4.5,
    numReviews: 98
  },
  {
    name: 'Casual Shorts',
    description: 'Cotton casual shorts for summer comfort',
    price: 599,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500',
    category: 'Clothing',
    stock: 140,
    rating: 4.3,
    numReviews: 112
  },
  {
    name: 'Winter Jacket',
    description: 'Heavy winter jacket with thermal insulation',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500',
    category: 'Clothing',
    stock: 50,
    rating: 4.7,
    numReviews: 156
  },
  {
    name: 'Track Pants',
    description: 'Comfortable track pants for gym and casual wear',
    price: 799,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500',
    category: 'Clothing',
    stock: 110,
    rating: 4.4,
    numReviews: 134
  },
  {
    name: 'Polo T-Shirt',
    description: 'Premium cotton polo t-shirt with collar',
    price: 699,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500',
    category: 'Clothing',
    stock: 130,
    rating: 4.5,
    numReviews: 167
  },
  {
    name: 'Designer Shirt',
    description: 'Stylish printed casual shirt for men',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
    category: 'Clothing',
    stock: 75,
    rating: 4.6,
    numReviews: 198
  },

  // ==================== BOOKS (10 Products) ====================
  {
    name: 'JavaScript: The Complete Guide',
    description: 'Master modern JavaScript with practical examples',
    price: 899,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    category: 'Books',
    stock: 60,
    rating: 4.8,
    numReviews: 234
  },
  {
    name: 'React & Redux Handbook',
    description: 'Complete guide to React and state management',
    price: 999,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500',
    category: 'Books',
    stock: 45,
    rating: 4.7,
    numReviews: 198
  },
  {
    name: 'Python Programming',
    description: 'Learn Python from basics to advanced concepts',
    price: 799,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500',
    category: 'Books',
    stock: 70,
    rating: 4.6,
    numReviews: 176
  },
  {
    name: 'Data Structures & Algorithms',
    description: 'Master DSA for competitive programming',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500',
    category: 'Books',
    stock: 55,
    rating: 4.9,
    numReviews: 267
  },
  {
    name: 'Machine Learning Basics',
    description: 'Introduction to ML and AI concepts',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500',
    category: 'Books',
    stock: 40,
    rating: 4.7,
    numReviews: 143
  },
  {
    name: 'Web Development Bootcamp',
    description: 'HTML, CSS, JavaScript complete course',
    price: 849,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    category: 'Books',
    stock: 65,
    rating: 4.5,
    numReviews: 189
  },
  {
    name: 'Database Management Systems',
    description: 'SQL, NoSQL, and database design principles',
    price: 949,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500',
    category: 'Books',
    stock: 50,
    rating: 4.6,
    numReviews: 156
  },
  {
    name: 'Cloud Computing Guide',
    description: 'AWS, Azure, and Google Cloud essentials',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500',
    category: 'Books',
    stock: 35,
    rating: 4.7,
    numReviews: 124
  },
  {
    name: 'Cyber Security Fundamentals',
    description: 'Network security and ethical hacking basics',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500',
    category: 'Books',
    stock: 42,
    rating: 4.8,
    numReviews: 201
  },
  {
    name: 'UI/UX Design Principles',
    description: 'Modern design patterns and user experience',
    price: 899,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500',
    category: 'Books',
    stock: 58,
    rating: 4.6,
    numReviews: 167
  },

  // ==================== HOME (10 Products) ====================
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with programmable settings',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
    category: 'Home',
    stock: 40,
    rating: 4.4,
    numReviews: 67
  },
  {
    name: 'Air Purifier',
    description: 'HEPA filter air purifier for clean indoor air',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
    category: 'Home',
    stock: 30,
    rating: 4.6,
    numReviews: 89
  },
  {
    name: 'Blender Mixer',
    description: '500W powerful mixer grinder with 3 jars',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500',
    category: 'Home',
    stock: 55,
    rating: 4.4,
    numReviews: 178
  },
  {
    name: 'Iron Press',
    description: 'Steam iron with non-stick soleplate',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500',
    category: 'Home',
    stock: 80,
    rating: 4.3,
    numReviews: 156
  },
  {
    name: 'Table Lamp',
    description: 'LED desk lamp with adjustable brightness',
    price: 799,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    category: 'Home',
    stock: 90,
    rating: 4.4,
    numReviews: 112
  },
  {
    name: 'Wall Clock',
    description: 'Modern silent wall clock - 12 inch',
    price: 499,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500',
    category: 'Home',
    stock: 110,
    rating: 4.2,
    numReviews: 87
  },
  {
    name: 'Bedsheet Set',
    description: 'Premium cotton bedsheet with 2 pillow covers',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500',
    category: 'Home',
    stock: 65,
    rating: 4.5,
    numReviews: 134
  },
  {
    name: 'Storage Organizer',
    description: '4-tier plastic storage organizer with wheels',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500',
    category: 'Home',
    stock: 50,
    rating: 4.3,
    numReviews: 76
  },
  {
    name: 'Microwave Oven',
    description: '20L solo microwave with 5 power levels',
    price: 5499,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500',
    category: 'Home',
    stock: 20,
    rating: 4.6,
    numReviews: 156
  },
  {
    name: 'Water Bottle Set',
    description: 'Set of 6 BPA-free plastic water bottles',
    price: 599,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'Home',
    stock: 100,
    rating: 4.4,
    numReviews: 98
  },

  // ==================== SPORTS (10 Products) ====================
  {
    name: 'Running Shoes',
    description: 'Comfortable running shoes with air cushion',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Sports',
    stock: 75,
    rating: 4.6,
    numReviews: 156
  },
  {
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat with carrying strap',
    price: 699,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'Sports',
    stock: 120,
    rating: 4.5,
    numReviews: 92
  },
  {
    name: 'Dumbbell Set',
    description: 'Adjustable dumbbells - 2kg to 10kg',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    category: 'Sports',
    stock: 45,
    rating: 4.7,
    numReviews: 123
  },
  {
    name: 'Resistance Bands',
    description: 'Set of 5 resistance bands for home workout',
    price: 499,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
    category: 'Sports',
    stock: 95,
    rating: 4.4,
    numReviews: 87
  },
  {
    name: 'Cricket Bat',
    description: 'Professional cricket bat - English willow',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500',
    category: 'Sports',
    stock: 35,
    rating: 4.6,
    numReviews: 76
  },
  {
    name: 'Football',
    description: 'Professional size 5 football',
    price: 899,
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500',
    category: 'Sports',
    stock: 80,
    rating: 4.5,
    numReviews: 143
  },
  {
    name: 'Badminton Racket',
    description: 'Lightweight badminton racket with cover',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500',
    category: 'Sports',
    stock: 60,
    rating: 4.4,
    numReviews: 98
  },
  {
    name: 'Gym Bag',
    description: 'Spacious sports duffel bag with shoe compartment',
    price: 999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Sports',
    stock: 70,
    rating: 4.3,
    numReviews: 112
  },
  {
    name: 'Jump Rope',
    description: 'Speed jump rope with counter',
    price: 299,
    image: 'https://images.unsplash.com/photo-1592632789004-57d4354f2499?w=500',
    category: 'Sports',
    stock: 150,
    rating: 4.5,
    numReviews: 167
  },
  {
    name: 'Tennis Racket',
    description: 'Professional tennis racket with cover bag',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500',
    category: 'Sports',
    stock: 45,
    rating: 4.7,
    numReviews: 189
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany();
    console.log('🗑️  Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products added');

    console.log('\n📦 Database seeded successfully!');
    console.log(`   ${sampleProducts.length} products added`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
