import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/productService';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data.slice(0, 6)); // Show first 6 products on homepage
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Discover amazing products at great prices!</p>
        </div>
      </div>
      
      <div className="container">
        <div className="flex-between mb-3">
          <h2>Featured Products</h2>
          <Link to="/products" className="btn btn-outline">View All Products</Link>
        </div>
        
        {products.length === 0 ? (
          <div className="empty-state">
            <h2>No products available</h2>
            <p>Check back soon for new products!</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;