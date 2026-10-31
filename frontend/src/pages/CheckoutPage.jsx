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

    const handleCheckout = async (event) => {
        event.preventDefault();

        if (!user) {
            navigate('/login');
            return;
        }

        if (cartItems.length === 0) {
            alert('Your cart is empty. Add a product before placing an order.');
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
        <div className="container checkout-page">
            <h1>Checkout</h1>
            <div className="checkout-layout">
                <div className="cart-summary">
                    <h2>Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    {item.name} - ₹{item.price} x {item.quantity}
                                </li>
                            ))}
                        </ul>
                    )}
                    <h3>Total Amount: ₹{getTotalAmount().toFixed(2)}</h3>
                </div>

                <form className="form-container" onSubmit={handleCheckout}>
                    <h2>Shipping Address</h2>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            className="form-control"
                            type="text"
                            value={shippingAddress.address}
                            onChange={(event) => setShippingAddress({ ...shippingAddress, address: event.target.value })}
                            placeholder="House number and street"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            className="form-control"
                            type="text"
                            value={shippingAddress.city}
                            onChange={(event) => setShippingAddress({ ...shippingAddress, city: event.target.value })}
                            placeholder="City"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            id="postalCode"
                            className="form-control"
                            type="text"
                            value={shippingAddress.postalCode}
                            onChange={(event) => setShippingAddress({ ...shippingAddress, postalCode: event.target.value })}
                            placeholder="Postal code"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            className="form-control"
                            type="text"
                            value={shippingAddress.country}
                            onChange={(event) => setShippingAddress({ ...shippingAddress, country: event.target.value })}
                            placeholder="Country"
                            required
                        />
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={loading || cartItems.length === 0}>
                        {loading ? 'Processing...' : 'Place Order'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;