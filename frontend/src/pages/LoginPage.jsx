import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, user } = useAuth();
    const navigate = useNavigate();

    // If user is already logged in, show a message
    useEffect(() => {
        if (user) {
            // User is already logged in, but we'll still show the login page
            // They can logout first if they want to login with different account
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
            <div className="form-container">
                {user && (
                    <div className="alert alert-info" style={{ marginBottom: '1.5rem' }}>
                        You are already logged in as <strong>{user.name}</strong>. 
                        <br />Logout first to login with a different account.
                    </div>
                )}
                <div className="text-center mb-4">
                    <FaSignInAlt style={{ fontSize: '3rem', color: 'var(--primary-color)', margin: '0 auto 1rem' }} />
                    <h2>Welcome Back!</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Login to your account</p>
                </div>

                {error && (
                    <div className="alert alert-error">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            <FaEnvelope /> Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>
                            <FaLock /> Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '100%' }}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="text-center mt-3">
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Don't have an account? <Link to="/signup" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Sign up here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;