import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
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

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home', 'Sports'];
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

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
          <h1>All Products</h1>
          <p>Browse our complete collection</p>
        </div>
      </div>
      
      <div className="container">
        <div className="mb-3">
          <h3>Categories</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={filter === cat ? 'btn btn-primary' : 'btn btn-outline'}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Showing {filteredProducts.length} products
        </p>

        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <h2>No products found</h2>
            <p>Try selecting a different category</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;