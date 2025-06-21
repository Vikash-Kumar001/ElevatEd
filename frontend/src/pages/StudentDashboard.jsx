import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome, Student!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/student/my-courses" className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">My Courses</h2>
                    <p className="text-sm text-gray-600 mt-2">Continue your learning journey</p>
                </Link>
                <Link to="/student/certificates" className="bg-green-100 hover:bg-green-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">My Certificates</h2>
                    <p className="text-sm text-gray-600 mt-2">Download your earned certificates</p>
                </Link>
                <Link to="/explore" className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded shadow">
                    <h2 className="text-xl font-semibold">Browse More Courses</h2>
                    <p className="text-sm text-gray-600 mt-2">Expand your skills with new topics</p>
                </Link>
            </div>
        </div>
    );
};

export default StudentDashboard;