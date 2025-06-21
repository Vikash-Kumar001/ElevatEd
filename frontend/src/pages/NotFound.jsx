import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="text-indigo-500 hover:underline">
                Go back to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
