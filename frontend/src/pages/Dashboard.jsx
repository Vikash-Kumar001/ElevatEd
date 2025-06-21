import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/admin" className="bg-red-100 hover:bg-red-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">Admin Panel</h2>
                </Link>
                <Link to="/instructor/dashboard" className="bg-purple-100 hover:bg-purple-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">Instructor Panel</h2>
                </Link>
                <Link to="/student/dashboard" className="bg-blue-100 hover:bg-blue-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">Student Panel</h2>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;