import React, { useState } from 'react';
import { FaFileContract, FaGavel, FaExclamationTriangle, FaHandshake, FaShoppingCart, FaUndo, FaCreditCard, FaUserShield, FaBan, FaCheckCircle } from 'react-icons/fa';

const TermsOfServicePage = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);

    const termsData = [
        {
            id: 'account',
            title: 'Account & Registration',
            icon: FaUserShield,
            color: '#3b82f6',
            content: [
                { point: 'Must be 18+ years old to create account', emoji: '🎂' },
                { point: 'Provide accurate and current information', emoji: '✅' },
                { point: 'Keep credentials secure and confidential', emoji: '🔐' },
                { point: 'Responsible for all account activities', emoji: '👤' },
                { point: 'Notify us immediately of unauthorized access', emoji: '🚨' }
            ]
        },
        {
            id: 'orders',
            title: 'Orders & Payments',
            icon: FaShoppingCart,
            color: '#10b981',
            content: [
                { point: 'All prices in Indian Rupees (₹)', emoji: '💰' },
                { point: 'Prices subject to change without notice', emoji: '📊' },
                { point: 'Payment processed securely via trusted gateways', emoji: '🔒' },
                { point: 'Order confirmation sent via email', emoji: '📧' },
                { point: 'We reserve right to cancel fraudulent orders', emoji: '⚠️' }
            ]
        },
        {
            id: 'returns',
            title: 'Returns & Refunds',
            icon: FaUndo,
            color: '#f59e0b',
            content: [
                { point: '7-day return policy on most products', emoji: '📅' },
                { point: 'Items must be unused and in original packaging', emoji: '📦' },
                { point: 'Refunds processed within 5-7 business days', emoji: '⏱️' },
                { point: 'Return shipping costs may apply', emoji: '🚚' },
                { point: 'Some items are non-returnable (electronics, perishables)', emoji: '🚫' }
            ]
        },
        {
            id: 'prohibited',
            title: 'Prohibited Activities',
            icon: FaBan,
            color: '#ef4444',
            content: [
                { point: 'No fraudulent or illegal activities', emoji: '❌' },
                { point: 'No unauthorized access to systems', emoji: '🛑' },
                { point: 'No content scraping or data mining', emoji: '⛔' },
                { point: 'No spam or phishing attempts', emoji: '🚷' },
                { point: 'Violation may result in account termination', emoji: '⚡' }
            ]
        }
    ];

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            {/* Header with different gradient */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaGavel style={{ marginRight: '1rem' }} /> Terms of Service
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                        ⚖️ Legal agreement between you and ShopEase
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
                        Effective Date: October 28, 2025
                    </p>
                </div>
                {/* Decorative shapes */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '100px',
                    height: '100px',
                    border: '3px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    transform: 'rotate(45deg)',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '15%',
                    width: '80px',
                    height: '80px',
                    border: '3px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>
            </div>

            <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '1200px' }}>
                {/* Welcome Message */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    marginBottom: '2rem',
                    border: '2px solid #f59e0b',
                    textAlign: 'center'
                }}>
                    <FaFileContract style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '1rem' }} />
                    <h2 style={{ marginBottom: '1rem', color: '#1f2937' }}>Welcome to ShopEase!</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', margin: 0 }}>
                        These Terms of Service govern your use of our website and services. By accessing or using our platform, 
                        you agree to be bound by these terms. Please read them carefully before proceeding.
                    </p>
                </div>

                {/* Acceptance Checkbox */}
                <div style={{
                    backgroundColor: acceptedTerms ? '#d1fae5' : '#fee2e2',
                    border: `3px solid ${acceptedTerms ? '#10b981' : '#ef4444'}`,
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease'
                }}>
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        style={{
                            width: '30px',
                            height: '30px',
                            cursor: 'pointer',
                            accentColor: '#10b981'
                        }}
                    />
                    <label htmlFor="acceptTerms" style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: acceptedTerms ? '#065f46' : '#991b1b',
                        cursor: 'pointer',
                        flex: 1
                    }}>
                        {acceptedTerms ? (
                            <><FaCheckCircle style={{ marginRight: '0.5rem' }} /> I have read and accept the Terms of Service</>
                        ) : (
                            <><FaExclamationTriangle style={{ marginRight: '0.5rem' }} /> Please read and accept the terms to continue</>
                        )}
                    </label>
                </div>

                {/* Interactive Terms Cards */}
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {termsData.map((section) => {
                        const Icon = section.icon;
                        const isExpanded = expandedSection === section.id;
                        
                        return (
                            <div key={section.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '1rem',
                                boxShadow: isExpanded ? '0 10px 25px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                                border: `2px solid ${isExpanded ? section.color : '#e5e7eb'}`,
                                transition: 'all 0.3s ease',
                                transform: isExpanded ? 'scale(1.02)' : 'scale(1)'
                            }}>
                                {/* Section Header */}
                                <div
                                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                                    style={{
                                        padding: '1.5rem',
                                        background: isExpanded ? section.color : '#f9fafb',
                                        color: isExpanded ? 'white' : '#1f2937',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isExpanded) {
                                            e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isExpanded) {
                                            e.currentTarget.style.backgroundColor = '#f9fafb';
                                        }
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Icon style={{ fontSize: '2rem' }} />
                                        <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{section.title}</h3>
                                    </div>
                                    <div style={{
                                        fontSize: '1.5rem',
                                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        ▼
                                    </div>
                                </div>

                                {/* Section Content */}
                                {isExpanded && (
                                    <div style={{
                                        padding: '2rem',
                                        animation: 'expandContent 0.3s ease'
                                    }}>
                                        <div style={{ display: 'grid', gap: '1rem' }}>
                                            {section.content.map((item, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '1rem',
                                                    padding: '1rem',
                                                    backgroundColor: '#f9fafb',
                                                    borderRadius: '0.5rem',
                                                    borderLeft: `4px solid ${section.color}`,
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                                                    e.currentTarget.style.transform = 'translateX(5px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#f9fafb';
                                                    e.currentTarget.style.transform = 'translateX(0)';
                                                }}>
                                                    <div style={{ fontSize: '1.5rem', minWidth: '30px' }}>{item.emoji}</div>
                                                    <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>{item.point}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Additional Important Terms */}
                <div style={{
                    marginTop: '2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {/* Intellectual Property */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        border: '2px solid #8b5cf6',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(139, 92, 246, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>©️</div>
                        <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Intellectual Property</h3>
                        <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                            All content, logos, and trademarks are property of ShopEase. 
                            Unauthorized use is strictly prohibited.
                        </p>
                    </div>

                    {/* Limitation of Liability */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        border: '2px solid #ef4444',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(239, 68, 68, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
                        <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Limitation of Liability</h3>
                        <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                            We are not liable for indirect, incidental, or consequential damages. 
                            Our liability is limited to the purchase price.
                        </p>
                    </div>

                    {/* Dispute Resolution */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        border: '2px solid #06b6d4',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(6, 182, 212, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚖️</div>
                        <h3 style={{ color: '#06b6d4', marginBottom: '1rem' }}>Dispute Resolution</h3>
                        <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                            Disputes will be resolved through arbitration in accordance 
                            with Indian laws and jurisdiction.
                        </p>
                    </div>
                </div>

                {/* Modification Notice */}
                <div style={{
                    marginTop: '2rem',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: 'white',
                    borderRadius: '1rem',
                    textAlign: 'center'
                }}>
                    <FaExclamationTriangle style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '1rem' }}>Changes to Terms</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.95 }}>
                        We reserve the right to modify these terms at any time. Changes will be effective 
                        immediately upon posting. Continued use of our website constitutes acceptance of modified terms.
                    </p>
                </div>

                {/* Contact Legal Team */}
                <div style={{
                    marginTop: '2rem',
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    borderTop: '4px solid #f59e0b'
                }}>
                    <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>
                        <FaHandshake style={{ marginRight: '0.5rem' }} />
                        Legal Questions?
                    </h3>
                    <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        For legal inquiries or clarification on our terms, please contact our legal team.
                    </p>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '3rem', 
                        flexWrap: 'wrap',
                        marginBottom: '1rem'
                    }}>
                        <div>
                            <strong style={{ color: '#f59e0b' }}>📧 Legal Email:</strong><br />
                            <a href="mailto:legal@shopease.com" style={{ 
                                color: '#2563eb', 
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>
                                legal@shopease.com
                            </a>
                        </div>
                        <div>
                            <strong style={{ color: '#f59e0b' }}>📞 Legal Hotline:</strong><br />
                            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1f2937' }}>
                                +91 98765 43210
                            </span>
                        </div>
                    </div>
                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1rem',
                        backgroundColor: '#fef3c7',
                        borderRadius: '0.5rem',
                        color: '#78350f'
                    }}>
                        <strong>📍 Registered Office:</strong> ShopEase Pvt. Ltd., 123 Business Park, Mumbai, Maharashtra 400001, India
                    </div>
                </div>

                {/* Acceptance Button */}
                {!acceptedTerms && (
                    <div style={{
                        marginTop: '2rem',
                        textAlign: 'center',
                        padding: '2rem',
                        backgroundColor: '#fef2f2',
                        borderRadius: '1rem',
                        border: '2px dashed #ef4444'
                    }}>
                        <FaExclamationTriangle style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }} />
                        <p style={{ fontSize: '1.1rem', color: '#991b1b', fontWeight: '600' }}>
                            Please scroll to the top and accept the terms to proceed with using our services.
                        </p>
                        <button
                            onClick={() => {
                                setAcceptedTerms(true);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem 2rem',
                                background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <FaCheckCircle /> Accept Terms & Scroll Up
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes expandContent {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default TermsOfServicePage;
