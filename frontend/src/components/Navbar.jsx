import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                    EduMarket
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/explore" className="text-gray-700 hover:text-indigo-600">Explore</Link>
                    <Link to="/instructor/dashboard" className="text-gray-700 hover:text-indigo-600">Teach</Link>
                    {user ? (
                        <>
                            <button
                                onClick={logout}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                            <Link to="/student/dashboard" className="text-xl">
                                <FaUserCircle />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                            <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    <button className="text-2xl text-gray-700">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
