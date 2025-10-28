import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaUser, FaHome, FaBox, FaSignOutAlt, FaClipboardList, FaUserCircle, FaSignInAlt, FaUserPlus, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { getTotalItems } = useCart();
    const cartItemCount = getTotalItems();
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav className="navbar" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem' }}>
                {/* Logo/Brand */}
                <Link to="/" className="navbar-brand" style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '2rem' }}>🛒</span>
                    <span>ShopEase</span>
                </Link>

                {/* Navigation Links */}
                <ul className="navbar-nav" style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', alignItems: 'center', margin: 0 }}>
                    {/* Main Links */}
                    <li>
                        <Link to="/" style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '0.5rem',
                            transition: 'all 0.3s',
                            fontWeight: '500',
                            color: 'var(--text-primary)'
                        }} 
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f4ff';
                            e.currentTarget.style.color = 'var(--primary-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}>
                            <FaHome /> Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/products" style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '0.5rem',
                            transition: 'all 0.3s',
                            fontWeight: '500',
                            color: 'var(--text-primary)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f4ff';
                            e.currentTarget.style.color = 'var(--primary-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}>
                            <FaBox /> Products
                        </Link>
                    </li>

                    {/* Contact Us */}
                    <li>
                        <Link to="/contact" style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '0.5rem',
                            transition: 'all 0.3s',
                            fontWeight: '500',
                            color: 'var(--text-primary)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f4ff';
                            e.currentTarget.style.color = 'var(--primary-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}>
                            <FaEnvelope /> Contact
                        </Link>
                    </li>
                    
                    {/* Cart with Badge */}
                    <li>
                        <Link to="/cart" style={{ 
                            position: 'relative',
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '0.5rem',
                            transition: 'all 0.3s',
                            fontWeight: '500',
                            color: 'var(--text-primary)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f4ff';
                            e.currentTarget.style.color = 'var(--primary-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}>
                            <FaShoppingCart style={{ fontSize: '1.25rem' }} />
                            Cart
                            {cartItemCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '4px',
                                    right: '4px',
                                    backgroundColor: '#ef4444',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '22px',
                                    height: '22px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    boxShadow: '0 2px 4px rgba(239, 68, 68, 0.4)',
                                    animation: 'pulse 2s infinite'
                                }}>
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </li>

                    {/* Divider */}
                    <li style={{ 
                        width: '1px', 
                        height: '30px', 
                        backgroundColor: '#e5e7eb', 
                        margin: '0 0.5rem' 
                    }}></li>

                    {/* User Section */}
                    {user ? (
                        <>
                            {/* My Orders */}
                            <li>
                                <Link to="/order-history" style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '0.5rem',
                                    transition: 'all 0.3s',
                                    fontWeight: '500',
                                    color: 'var(--text-primary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f0f4ff';
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}>
                                    <FaClipboardList /> Orders
                                </Link>
                            </li>

                            {/* Admin Panel */}
                            {user.role === 'admin' && (
                                <li>
                                    <Link to="/admin" style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '0.5rem',
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '0.5rem',
                                        transition: 'all 0.3s',
                                        fontWeight: '500',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: 'white'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        👑 Admin
                                    </Link>
                                </li>
                            )}

                            {/* User Profile */}
                            <li style={{ position: 'relative' }}>
                                <div style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '0.75rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.75rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                                }}>
                                    <FaUserCircle style={{ fontSize: '1.5rem' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                                        <span style={{ fontSize: '0.75rem', opacity: '0.9' }}>Welcome</span>
                                        <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{user.name}</span>
                                    </div>
                                </div>
                            </li>

                            {/* Logout Button */}
                            <li>
                                <button onClick={logout} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '0.5rem',
                                    border: '2px solid #ef4444',
                                    backgroundColor: 'white',
                                    color: '#ef4444',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ef4444';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = '#ef4444';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <FaSignOutAlt /> Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            {/* Login Button */}
                            <li>
                                <Link to="/login" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    border: '2px solid var(--primary-color)',
                                    backgroundColor: 'white',
                                    color: 'var(--primary-color)',
                                    fontWeight: '600',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <FaSignInAlt /> Login
                                </Link>
                            </li>

                            {/* Sign Up Button */}
                            <li>
                                <Link to="/signup" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    fontWeight: '600',
                                    border: 'none',
                                    transition: 'all 0.3s',
                                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                                }}>
                                    <FaUserPlus /> Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;