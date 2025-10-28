import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>🛒 E-Commerce Store</h3>
                        <p style={{ color: '#9ca3af' }}>Your one-stop shop for quality products at great prices.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link to="/" style={{ color: '#9ca3af' }}>Home</Link>
                            <Link to="/products" style={{ color: '#9ca3af' }}>Products</Link>
                            <Link to="/cart" style={{ color: '#9ca3af' }}>Cart</Link>
                            <Link to="/order-history" style={{ color: '#9ca3af' }}>Orders</Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Customer Service</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link to="/contact" style={{ color: '#9ca3af', transition: 'color 0.3s' }} 
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                                Contact Us
                            </Link>
                            <Link to="/privacy-policy" style={{ color: '#9ca3af', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-service" style={{ color: '#9ca3af', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                                Terms of Service
                            </Link>
                            <Link to="/shipping-info" style={{ color: '#9ca3af', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                                Shipping Info
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                            <a href="#" style={{ color: '#9ca3af' }}><FaFacebook /></a>
                            <a href="#" style={{ color: '#9ca3af' }}><FaTwitter /></a>
                            <a href="#" style={{ color: '#9ca3af' }}><FaInstagram /></a>
                            <a href="#" style={{ color: '#9ca3af' }}><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #4b5563', paddingTop: '1.5rem' }}>
                    <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                        Built with React, Node.js, Express, and MongoDB
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;