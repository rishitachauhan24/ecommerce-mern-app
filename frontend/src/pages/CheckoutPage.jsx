import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../services/orderService';

const CheckoutPage = () => {
    const { cartItems, getTotalAmount, clearCart } = useCart();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [shippingAddress, setShippingAddress] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        setLoading(true);
        try {
            const orderData = {
                products: cartItems.map(item => ({
                    product: item._id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                shippingAddress,
                paymentMethod: 'Cash on Delivery',
                totalAmount: getTotalAmount()
            };
            await createOrder(orderData);
            clearCart();
            navigate('/order-history');
        } catch (error) {
            console.error('Error creating order:', error);
            alert('Failed to create order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <div>
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total Amount: ${getTotalAmount().toFixed(2)}</h3>
                <button onClick={handleCheckout} disabled={loading}>
                    {loading ? 'Processing...' : 'Place Order'}
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;