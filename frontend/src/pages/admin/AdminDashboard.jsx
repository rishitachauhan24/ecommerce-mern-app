import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="admin-options">
                <Link to="/admin/manage-products" className="admin-link">
                    Manage Products
                </Link>
                <Link to="/admin/manage-orders" className="admin-link">
                    Manage Orders
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;