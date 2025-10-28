import React from 'react';
import { FaTruck, FaShippingFast, FaBoxOpen, FaMapMarkedAlt, FaClock, FaRupeeSign } from 'react-icons/fa';

const ShippingInfoPage = () => {
    return (
        <div>
            {/* Header */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
            }}>
                <div className="container">
                    <h1><FaTruck /> Shipping Information</h1>
                    <p>Everything you need to know about our shipping and delivery</p>
                </div>
            </div>

            <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '900px' }}>
                {/* Introduction */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        At ShopEase, we strive to deliver your orders quickly and safely. Below you'll find detailed information 
                        about our shipping policies, delivery times, and costs.
                    </p>
                </div>

                {/* Shipping Methods */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <FaShippingFast style={{ color: 'var(--primary-color)' }} />
                        Shipping Methods
                    </h2>
                    
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                            🚚 Standard Shipping (Free)
                        </h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)', paddingLeft: '2rem' }}>
                            <li><strong>Delivery Time:</strong> 5-7 business days</li>
                            <li><strong>Cost:</strong> FREE on orders above ₹499</li>
                            <li><strong>Tracking:</strong> Available</li>
                            <li><strong>Coverage:</strong> All major cities and towns in India</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>
                            ⚡ Express Shipping
                        </h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)', paddingLeft: '2rem' }}>
                            <li><strong>Delivery Time:</strong> 2-3 business days</li>
                            <li><strong>Cost:</strong> ₹99</li>
                            <li><strong>Tracking:</strong> Real-time tracking available</li>
                            <li><strong>Coverage:</strong> Major metropolitan areas</li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--warning-color)' }}>
                            🚀 Same Day Delivery
                        </h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)', paddingLeft: '2rem' }}>
                            <li><strong>Delivery Time:</strong> Within 24 hours</li>
                            <li><strong>Cost:</strong> ₹199</li>
                            <li><strong>Tracking:</strong> Live tracking with delivery partner contact</li>
                            <li><strong>Coverage:</strong> Delhi NCR, Mumbai, Bangalore, and Hyderabad only</li>
                            <li><strong>Note:</strong> Order must be placed before 2:00 PM</li>
                        </ul>
                    </div>
                </div>

                {/* Shipping Costs */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <FaRupeeSign style={{ color: 'var(--secondary-color)' }} />
                        Shipping Costs
                    </h2>
                    
                    <div style={{ 
                        display: 'grid',
                        gap: '1rem',
                        marginTop: '1.5rem'
                    }}>
                        <div style={{ 
                            padding: '1.5rem',
                            borderRadius: '0.5rem',
                            background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
                            border: '2px solid var(--primary-color)'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Orders below ₹499</h4>
                            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--dark)' }}>₹49 shipping fee</p>
                        </div>

                        <div style={{ 
                            padding: '1.5rem',
                            borderRadius: '0.5rem',
                            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                            border: '2px solid var(--secondary-color)'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>Orders ₹499 and above</h4>
                            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--dark)' }}>FREE Shipping! 🎉</p>
                        </div>
                    </div>
                </div>

                {/* Delivery Locations */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <FaMapMarkedAlt style={{ color: 'var(--primary-color)' }} />
                        Delivery Locations
                    </h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        We currently deliver to the following locations:
                    </p>
                    <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)', paddingLeft: '2rem' }}>
                        <li>🇮🇳 All states and union territories of India</li>
                        <li>📍 Major cities and metropolitan areas</li>
                        <li>📍 Tier 2 and Tier 3 cities</li>
                        <li>📍 Rural areas (delivery may take additional 2-3 days)</li>
                    </ul>
                    <div style={{ 
                        marginTop: '1.5rem',
                        padding: '1rem',
                        backgroundColor: '#fff3cd',
                        borderRadius: '0.5rem',
                        border: '1px solid #ffc107'
                    }}>
                        <p style={{ color: '#856404', margin: 0 }}>
                            <strong>Note:</strong> Some remote locations may have limited shipping options. 
                            Please contact customer support for specific delivery inquiries.
                        </p>
                    </div>
                </div>

                {/* Order Processing */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <FaClock style={{ color: 'var(--warning-color)' }} />
                        Order Processing Time
                    </h2>
                    <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)', paddingLeft: '2rem' }}>
                        <li>⏰ Orders are processed within 1-2 business days</li>
                        <li>⏰ Orders placed on weekends/holidays are processed the next business day</li>
                        <li>⏰ You will receive a confirmation email once your order is shipped</li>
                        <li>⏰ Tracking information will be sent via email and SMS</li>
                        <li>⏰ Processing time is separate from delivery time</li>
                    </ul>
                </div>

                {/* Tracking Your Order */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <FaBoxOpen style={{ color: 'var(--secondary-color)' }} />
                        Tracking Your Order
                    </h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Once your order has been shipped, you can track it using:
                    </p>
                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '1.5rem'
                    }}>
                        <div style={{ 
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            backgroundColor: '#f0f4ff',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Tracking link sent to your email
                            </p>
                        </div>
                        <div style={{ 
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            backgroundColor: '#f0f4ff',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>SMS</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Real-time updates via SMS
                            </p>
                        </div>
                        <div style={{ 
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            backgroundColor: '#f0f4ff',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👤</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>My Account</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Track in your order history
                            </p>
                        </div>
                    </div>
                </div>

                {/* Delivery Issues */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Delivery Issues</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        What to do if there's an issue with your delivery:
                    </p>
                    <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)', paddingLeft: '2rem' }}>
                        <li><strong>Damaged Package:</strong> Contact us immediately with photos</li>
                        <li><strong>Missing Items:</strong> Report within 48 hours of delivery</li>
                        <li><strong>Wrong Item:</strong> We'll arrange a free pickup and replacement</li>
                        <li><strong>Delivery Delay:</strong> Check tracking or contact support</li>
                        <li><strong>Failed Delivery:</strong> We'll attempt redelivery the next business day</li>
                    </ul>
                </div>

                {/* International Shipping */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>International Shipping</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Currently, we only ship within India. We are working on expanding our shipping to international locations. 
                        Stay tuned for updates!
                    </p>
                </div>

                {/* Contact for Shipping */}
                <div style={{ 
                    backgroundColor: '#f0f4ff',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid var(--primary-color)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '1rem' }}>Shipping Questions?</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Have questions about shipping? Our customer support team is here to help!
                    </p>
                    <p style={{ fontWeight: '600', color: 'var(--primary-color)', fontSize: '1.1rem' }}>
                        📧 shipping@shopease.com<br />
                        📞 +91 98765 43210<br />
                        💬 Live Chat: Available Mon-Sat, 9 AM - 6 PM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfoPage;
