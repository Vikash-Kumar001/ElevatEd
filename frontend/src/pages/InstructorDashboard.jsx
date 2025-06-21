import React from 'react';
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/instructor/create-course" className="bg-blue-100 hover:bg-blue-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">Create New Course</h2>
                    <p className="text-sm text-gray-600 mt-2">Design and publish your course</p>
                </Link>
                <Link to="/instructor/my-courses" className="bg-purple-100 hover:bg-purple-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">My Courses</h2>
                    <p className="text-sm text-gray-600 mt-2">Manage your existing courses</p>
                </Link>
            </div>
        </div>
    );
};

export default InstructorDashboard;