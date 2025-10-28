import React, { useEffect, useState } from 'react';
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
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              <h2>Order ID: {order._id}</h2>
              <p>Total Amount: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>
              <h3>Products:</h3>
              <ul>
                {order.products.map(product => (
                  <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistoryPage;