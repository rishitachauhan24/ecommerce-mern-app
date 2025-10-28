import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleQuantityChange = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="empty-state">
          <FaShoppingCart style={{ fontSize: '5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }} />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1><FaShoppingCart /> Shopping Cart</h1>
          <p>You have {cartItems.length} item(s) in your cart</p>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          <h2>Cart Items</h2>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img 
                src={item.image || `https://via.placeholder.com/100x100?text=${encodeURIComponent(item.name)}`} 
                alt={item.name} 
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{item.category}</p>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item._id, item.quantity, -1)}
                  >
                    <FaMinus />
                  </button>
                  <span style={{ fontSize: '1.125rem', fontWeight: '600', minWidth: '40px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-color)', minWidth: '100px', textAlign: 'right' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="btn btn-danger"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({cartItems.length} items):</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span style={{ color: 'var(--secondary-color)' }}>Free</span>
          </div>
          <div className="summary-row">
            <span>Tax (Estimated):</span>
            <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${(parseFloat(calculateTotal()) + parseFloat(calculateTotal()) * 0.1).toFixed(2)}</span>
          </div>

          <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
            Proceed to Checkout
          </Link>
          
          <button
            onClick={clearCart}
            className="btn btn-outline"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Clear Cart
          </button>

          <Link to="/products" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', color: 'var(--primary-color)' }}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;