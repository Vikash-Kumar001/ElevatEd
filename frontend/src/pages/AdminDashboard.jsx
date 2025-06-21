import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link to="/admin/users" className="bg-indigo-100 hover:bg-indigo-200 p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Manage Users</h2>
                </Link>
                <Link to="/admin/courses" className="bg-green-100 hover:bg-green-200 p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Manage Courses</h2>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;