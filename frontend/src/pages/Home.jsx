import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-indigo-50 py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Learn Anytime, Anywhere
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Join thousands of learners and instructors on EduMarket.
                    </p>
                    <Link to="/explore">
                        <Buttons>Explore Courses</Buttons>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-indigo-100 p-6 rounded shadow">
                        <h3 className="font-semibold text-lg mb-2">Wide Range of Courses</h3>
                        <p className="text-sm text-gray-700">Choose from a variety of categories and skills to enhance your knowledge.</p>
                    </div>
                    <div className="bg-indigo-100 p-6 rounded shadow">
                        <h3 className="font-semibold text-lg mb-2">Expert Instructors</h3>
                        <p className="text-sm text-gray-700">Learn from industry experts who bring real-world experience to the classroom.</p>
                    </div>
                    <div className="bg-indigo-100 p-6 rounded shadow">
                        <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                        <p className="text-sm text-gray-700">Get certified and boost your resume with professional recognition.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-indigo-600 text-white py-16 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Become an Instructor</h2>
                    <p className="mb-6">Share your skills and earn by teaching what you love.</p>
                    <Link to="/instructor/create-course">
                        <Buttons className="bg-white text-indigo-600 hover:bg-gray-100">Start Teaching</Buttons>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;