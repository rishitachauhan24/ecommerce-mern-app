import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
  const { _id, name, price, description, image, category, rating, numReviews, stock } = product;

  // Default image if none provided
  const productImage = image || `https://via.placeholder.com/300x200?text=${encodeURIComponent(name)}`;

  return (
    <div className="product-card">
      <Link to={`/product/${_id}`}>
        <img src={productImage} alt={name} />
      </Link>
      <div className="product-card-body">
        <span className="badge badge-info">{category}</span>
        <Link to={`/product/${_id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description?.substring(0, 80)}...</p>
        
        <div className="product-rating">
          <FaStar />
          <span>{rating} ({numReviews} reviews)</span>
        </div>
        
        <div className="flex-between" style={{ alignItems: 'center', marginTop: '1rem' }}>
          <div className="product-price">₹{price.toFixed(0)}</div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }} 
            className="btn btn-primary"
            disabled={stock === 0}
          >
            <FaShoppingCart /> {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
        
        {stock > 0 && stock < 10 && (
          <p style={{ color: 'var(--warning-color)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Only {stock} left in stock!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;