import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBoxOpen, FaCalendarAlt, FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { getMyOrders } from '../services/orderService';

const OrderHistoryPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="container order-history-page"><div className="alert alert-error">{error}</div></div>;

  return (
    <div className="container order-history-page">
      <div className="order-history-header">
        <div>
          <p className="eyebrow">YOUR ACCOUNT</p>
          <h1>Order History</h1>
          <p className="order-history-subtitle">Track your purchases and revisit everything you have ordered.</p>
        </div>
        <div className="order-count">
          <FaShoppingBag />
          <strong>{orders.length}</strong>
          <span>{orders.length === 1 ? 'order' : 'orders'}</span>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="order-empty-state">
          <div className="empty-icon"><FaBoxOpen /></div>
          <h2>No orders yet</h2>
          <p>Your future purchases will appear here once you place your first order.</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <article className="order-card" key={order._id}>
              <div className="order-card-header">
                <div>
                  <p className="order-label">ORDER ID</p>
                  <h2>#{order._id.slice(-8).toUpperCase()}</h2>
                </div>
                <span className={`order-status status-${order.status.toLowerCase()}`}>{order.status}</span>
              </div>

              <div className="order-meta">
                <span><FaCalendarAlt /> {new Date(order.createdAt).toLocaleDateString()}</span>
                <span><FaMapMarkerAlt /> {order.shippingAddress?.city || 'Shipping address saved'}</span>
              </div>

              <div className="order-products">
                {order.products.map((product, index) => (
                  <div className="order-product" key={product._id || `${order._id}-${index}`}>
                    <div className="order-product-icon"><FaBoxOpen /></div>
                    <div>
                      <strong>{product.name}</strong>
                      <p>Qty {product.quantity} x ₹{product.price.toFixed(2)}</p>
                    </div>
                    <strong>₹{(product.price * product.quantity).toFixed(2)}</strong>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <span>Total paid</span>
                <strong>₹{order.totalAmount.toFixed(2)}</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;