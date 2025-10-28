import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate sending message
        setTimeout(() => {
            toast.success('Message sent successfully! We will get back to you soon.', {
                position: "top-right",
                autoClose: 3000,
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setLoading(false);
        }, 1000);
    };

    return (
        <div>
            {/* Header */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
            }}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Get in touch with us.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '3rem 1.5rem' }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Contact Information */}
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Have questions? We're here to help! Reach out to us through any of the following channels.
                        </p>

                        {/* Contact Cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Email */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1rem',
                                padding: '1.5rem',
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                boxShadow: 'var(--shadow)',
                                transition: 'transform 0.3s, box-shadow 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}>
                                <div style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem'
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        support@shopease.com
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        info@shopease.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1rem',
                                padding: '1.5rem',
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                boxShadow: 'var(--shadow)',
                                transition: 'transform 0.3s, box-shadow 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}>
                                <div style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem'
                                }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        +91 98765 43210
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        +91 98765 43211
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1rem',
                                padding: '1.5rem',
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                boxShadow: 'var(--shadow)',
                                transition: 'transform 0.3s, box-shadow 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}>
                                <div style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem'
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Address</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        123 Shopping Street,<br />
                                        Delhi, India - 110001
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" style={{ 
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <FaFacebook />
                                </a>
                                <a href="#" style={{ 
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <FaTwitter />
                                </a>
                                <a href="#" style={{ 
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <FaInstagram />
                                </a>
                                <a href="#" style={{ 
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ 
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <h2 style={{ marginBottom: '1rem' }}>Send us a Message</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="What is this about?"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Write your message here..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                style={{ 
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    border: 'none',
                                    fontSize: '1.1rem',
                                    padding: '1rem'
                                }}
                                disabled={loading}
                            >
                                {loading ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map or Additional Info */}
                <div style={{ 
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '1rem' }}>Business Hours</h3>
                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '1.5rem'
                    }}>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--dark)' }}>Monday - Friday</p>
                            <p style={{ color: 'var(--text-secondary)' }}>9:00 AM - 6:00 PM</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--dark)' }}>Saturday</p>
                            <p style={{ color: 'var(--text-secondary)' }}>10:00 AM - 4:00 PM</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--dark)' }}>Sunday</p>
                            <p style={{ color: 'var(--text-secondary)' }}>Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
