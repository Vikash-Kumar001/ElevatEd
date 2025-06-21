import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-10">
            <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4 text-indigo-600">EduMarket</h2>
                    <p className="text-sm">Empowering learning with modern education experiences. Explore courses anytime, anywhere.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="text-sm space-y-2">
                        <li><Link to="/explore" className="hover:text-indigo-600">Explore Courses</Link></li>
                        <li><Link to="/login" className="hover:text-indigo-600">Login</Link></li>
                        <li><Link to="/register" className="hover:text-indigo-600">Register</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Teach on EduMarket</h3>
                    <ul className="text-sm space-y-2">
                        <li><Link to="/instructor/dashboard" className="hover:text-indigo-600">Instructor Panel</Link></li>
                        <li><Link to="/instructor/create-course" className="hover:text-indigo-600">Create Course</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-indigo-600">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 py-4 text-center text-sm">
                &copy; {new Date().getFullYear()} EduMarket. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;