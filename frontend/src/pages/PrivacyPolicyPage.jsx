import React, { useState } from 'react';
import { FaShieldAlt, FaUserSecret, FaCookie, FaEnvelope, FaLock, FaEye, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState('collection');
    const [cookieConsent, setCookieConsent] = useState(null);

    const sections = [
        { id: 'collection', title: 'Data Collection', icon: FaUserSecret },
        { id: 'usage', title: 'How We Use Data', icon: FaShieldAlt },
        { id: 'cookies', title: 'Cookies', icon: FaCookie },
        { id: 'security', title: 'Security', icon: FaLock },
        { id: 'rights', title: 'Your Rights', icon: FaCheckCircle }
    ];

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            {/* Header with animated gradient */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaShieldAlt style={{ marginRight: '1rem' }} /> Privacy Policy
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                        🔒 Your data, your privacy, our commitment
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
                        Last Updated: October 28, 2025
                    </p>
                </div>
                {/* Decorative circles */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    zIndex: 0
                }}></div>
            </div>

            <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '1200px' }}>
                {/* Interactive Navigation Tabs */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    marginBottom: '2rem',
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {sections.map(section => {
                        const Icon = section.icon;
                        return (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    border: activeSection === section.id ? '2px solid #667eea' : '2px solid #e5e7eb',
                                    borderRadius: '2rem',
                                    background: activeSection === section.id ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                                    color: activeSection === section.id ? 'white' : '#6b7280',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transform: activeSection === section.id ? 'scale(1.05)' : 'scale(1)'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeSection !== section.id) {
                                        e.currentTarget.style.borderColor = '#667eea';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeSection !== section.id) {
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }
                                }}
                            >
                                <Icon /> {section.title}
                            </button>
                        );
                    })}
                </div>

                {/* Cookie Consent Interactive Banner */}
                {cookieConsent === null && (
                    <div style={{
                        backgroundColor: '#fff3cd',
                        border: '2px solid #ffc107',
                        padding: '1.5rem',
                        borderRadius: '1rem',
                        marginBottom: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        animation: 'slideDown 0.5s ease'
                    }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0, marginBottom: '0.5rem', color: '#856404' }}>
                                <FaCookie /> Cookie Consent Required
                            </h3>
                            <p style={{ margin: 0, color: '#856404' }}>
                                We use cookies to improve your experience. Do you accept our cookie policy?
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => setCookieConsent(true)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <FaCheckCircle /> Accept
                            </button>
                            <button
                                onClick={() => setCookieConsent(false)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'white',
                                    color: '#dc2626',
                                    border: '2px solid #dc2626',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <FaTimesCircle /> Decline
                            </button>
                        </div>
                    </div>
                )}

                {cookieConsent !== null && (
                    <div style={{
                        backgroundColor: cookieConsent ? '#d1fae5' : '#fee2e2',
                        border: `2px solid ${cookieConsent ? '#10b981' : '#ef4444'}`,
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        color: cookieConsent ? '#065f46' : '#991b1b',
                        fontWeight: '600'
                    }}>
                        {cookieConsent ? '✅ Thank you! Cookies accepted.' : '❌ Cookies declined. Some features may be limited.'}
                    </div>
                )}

                {/* Section Content - Data Collection */}
                {activeSection === 'collection' && (
                    <div style={{ 
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                        animation: 'fadeIn 0.5s ease'
                    }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#667eea' }}>
                            <FaUserSecret style={{ fontSize: '2rem' }} />
                            Information We Collect
                        </h2>
                        
                        <div style={{ 
                            backgroundColor: '#f3f4f6',
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            marginBottom: '1.5rem',
                            borderLeft: '4px solid #667eea'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1f2937' }}>
                                📝 Personal Information
                            </h3>
                            <ul style={{ lineHeight: '2', color: '#4b5563', paddingLeft: '2rem' }}>
                                <li>✉️ <strong>Contact Details:</strong> Name, email address, phone number</li>
                                <li>📍 <strong>Address Information:</strong> Shipping and billing addresses</li>
                                <li>💳 <strong>Payment Data:</strong> Processed securely via encrypted payment gateways</li>
                                <li>🔐 <strong>Account Credentials:</strong> Username and encrypted password (we never see your plain password)</li>
                                <li>🛒 <strong>Purchase History:</strong> Order details, products purchased, transaction records</li>
                            </ul>
                        </div>

                        <div style={{ 
                            backgroundColor: '#fef3c7',
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            borderLeft: '4px solid #f59e0b'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1f2937' }}>
                                🤖 Automatically Collected Data
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
                                    <strong>🌐 Network Info</strong>
                                    <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', color: '#6b7280' }}>IP address, ISP, location</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
                                    <strong>💻 Device Data</strong>
                                    <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', color: '#6b7280' }}>Browser, OS, device type</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
                                    <strong>📊 Usage Analytics</strong>
                                    <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', color: '#6b7280' }}>Pages viewed, click patterns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section Content - How We Use Data */}
                {activeSection === 'usage' && (
                    <div style={{ 
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                        animation: 'fadeIn 0.5s ease'
                    }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#667eea' }}>
                            <FaShieldAlt style={{ fontSize: '2rem' }} />
                            How We Use Your Information
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { icon: '🛍️', title: 'Order Processing', desc: 'Fulfill and deliver your orders efficiently' },
                                { icon: '💬', title: 'Communication', desc: 'Send order updates, receipts, and support messages' },
                                { icon: '📧', title: 'Marketing', desc: 'Promotional offers (you can opt-out anytime)' },
                                { icon: '🔒', title: 'Security', desc: 'Prevent fraud and protect your account' },
                                { icon: '📈', title: 'Analytics', desc: 'Improve our website and services' },
                                { icon: '⚖️', title: 'Legal Compliance', desc: 'Meet regulatory and legal requirements' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    backgroundColor: '#f9fafb',
                                    borderRadius: '0.75rem',
                                    border: '2px solid #e5e7eb',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1f2937' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Section Content - Cookies */}
                {activeSection === 'cookies' && (
                    <div style={{ 
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                        animation: 'fadeIn 0.5s ease'
                    }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#f59e0b' }}>
                            <FaCookie style={{ fontSize: '2rem' }} />
                            Cookies & Tracking Technologies
                        </h2>
                        
                        <div style={{ 
                            backgroundColor: '#fffbeb',
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            marginBottom: '1.5rem',
                            border: '2px solid #fbbf24'
                        }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#78350f', margin: 0 }}>
                                🍪 <strong>What are cookies?</strong> Small text files stored on your device to remember your preferences and improve your experience.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { type: 'Essential Cookies', purpose: 'Required for website functionality (login, cart)', toggle: false, color: '#dc2626' },
                                { type: 'Performance Cookies', purpose: 'Track website performance and user experience', toggle: true, color: '#2563eb' },
                                { type: 'Marketing Cookies', purpose: 'Personalize ads and track campaigns', toggle: true, color: '#16a34a' },
                                { type: 'Analytics Cookies', purpose: 'Understand how visitors use our site', toggle: true, color: '#9333ea' }
                            ].map((cookie, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.25rem',
                                    backgroundColor: '#f9fafb',
                                    borderRadius: '0.5rem',
                                    borderLeft: `4px solid ${cookie.color}`
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0, marginBottom: '0.25rem', color: cookie.color }}>{cookie.type}</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>{cookie.purpose}</p>
                                    </div>
                                    <div style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: cookie.toggle ? '#10b981' : '#6b7280',
                                        color: 'white',
                                        borderRadius: '1rem',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>
                                        {cookie.toggle ? 'Optional' : 'Required'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Section Content - Security */}
                {activeSection === 'security' && (
                    <div style={{ 
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                        animation: 'fadeIn 0.5s ease'
                    }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#667eea' }}>
                            <FaLock style={{ fontSize: '2rem' }} />
                            Data Security Measures
                        </h2>
                        
                        <div style={{ 
                            backgroundColor: '#dcfce7',
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            marginBottom: '1.5rem',
                            border: '2px solid #16a34a'
                        }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#14532d', margin: 0 }}>
                                🔐 We implement <strong>industry-standard security measures</strong> to protect your personal information from unauthorized access, disclosure, or destruction.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ 
                                padding: '1.5rem',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                borderRadius: '1rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
                                <h3 style={{ marginBottom: '0.5rem' }}>SSL/TLS Encryption</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>All data transmitted is encrypted end-to-end</p>
                            </div>
                            
                            <div style={{ 
                                padding: '1.5rem',
                                background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                                color: 'white',
                                borderRadius: '1rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                                <h3 style={{ marginBottom: '0.5rem' }}>Password Hashing</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Passwords secured with bcrypt algorithm</p>
                            </div>
                            
                            <div style={{ 
                                padding: '1.5rem',
                                background: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)',
                                color: 'white',
                                borderRadius: '1rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
                                <h3 style={{ marginBottom: '0.5rem' }}>Access Control</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Limited employee access to sensitive data</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section Content - Your Rights */}
                {activeSection === 'rights' && (
                    <div style={{ 
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                        animation: 'fadeIn 0.5s ease'
                    }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#667eea' }}>
                            <FaCheckCircle style={{ fontSize: '2rem' }} />
                            Your Privacy Rights
                        </h2>
                        
                        <div style={{ marginBottom: '2rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
                                Under data protection laws, you have the following rights regarding your personal information:
                            </p>
                        </div>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { right: 'Right to Access', desc: 'Request a copy of your personal data we hold', icon: '👁️' },
                                { right: 'Right to Rectification', desc: 'Correct inaccurate or incomplete data', icon: '✏️' },
                                { right: 'Right to Erasure', desc: 'Request deletion of your personal data ("right to be forgotten")', icon: '🗑️' },
                                { right: 'Right to Restriction', desc: 'Limit how we process your data', icon: '⏸️' },
                                { right: 'Right to Data Portability', desc: 'Receive your data in a structured, machine-readable format', icon: '📦' },
                                { right: 'Right to Object', desc: 'Object to processing for marketing purposes', icon: '🚫' },
                                { right: 'Right to Withdraw Consent', desc: 'Withdraw consent for data processing at any time', icon: '❌' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    padding: '1.25rem',
                                    backgroundColor: '#f9fafb',
                                    borderRadius: '0.75rem',
                                    border: '2px solid #e5e7eb',
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ede9fe';
                                    e.currentTarget.style.borderColor = '#667eea';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f9fafb';
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                }}>
                                    <div style={{ fontSize: '2rem', minWidth: '50px', textAlign: 'center' }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#1f2937' }}>{item.right}</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            padding: '1.5rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            borderRadius: '0.75rem',
                            textAlign: 'center'
                        }}>
                            <FaEnvelope style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.5rem' }}>Exercise Your Rights</h3>
                            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                                To exercise any of these rights, please contact us at:
                            </p>
                            <a href="mailto:privacy@shopease.com" style={{
                                color: 'white',
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                textDecoration: 'underline'
                            }}>
                                privacy@shopease.com
                            </a>
                        </div>
                    </div>
                )}

                {/* Contact Section */}
                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    borderTop: '4px solid #667eea'
                }}>
                    <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>Questions About Our Privacy Policy?</h3>
                    <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                        If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <strong>📧 Email:</strong> privacy@shopease.com
                        </div>
                        <div>
                            <strong>📞 Phone:</strong> +91 98765 43210
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
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

export default PrivacyPolicyPage;
