import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Home, ArrowLeft, Search, Compass, BookOpen, Users,
    Sparkles, Star, Clock, Target, Zap, Heart, Globe,
    ChevronRight, AlertCircle
} from 'lucide-react';

const NotFound = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    useEffect(() => {
        // Anime.js floating animation for background elements
        if (window.anime && containerRef.current) {
            window.anime({
                targets: '.floating-bg',
                translateY: [-40, 40],
                rotate: [0, 360],
                opacity: [0.1, 0.3],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1200)
            });

            window.anime({
                targets: '.pulse-bg',
                scale: [1, 1.2],
                opacity: [0.2, 0.5],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(600)
            });

            // Glitch effect for 404 text
            window.anime({
                targets: '.glitch-404',
                translateX: [-2, 2, -1, 1, 0],
                duration: 200,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutQuad'
            });
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const quickLinks = [
        {
            name: "Explore Courses",
            path: "/explore",
            icon: BookOpen,
            gradient: "from-blue-500 to-cyan-500",
            description: "Discover our course library"
        },
        {
            name: "Join Community",
            path: "/community",
            icon: Users,
            gradient: "from-purple-500 to-pink-500",
            description: "Connect with learners"
        },
        {
            name: "Search",
            path: "/search",
            icon: Search,
            gradient: "from-green-500 to-emerald-500",
            description: "Find what you need"
        },
        {
            name: "Get Help",
            path: "/help",
            icon: Compass,
            gradient: "from-orange-500 to-red-500",
            description: "Support & guidance"
        }
    ];

    const suggestions = [
        "Web Development Courses",
        "Design & UX Programs",
        "Data Science Track",
        "Business Courses",
        "Photography Classes",
        "AI & Machine Learning"
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-bg absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
                <div className="floating-bg absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

                {/* Pulse elements */}
                <div className="pulse-bg absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400 rounded-full"></div>
                <div className="pulse-bg absolute top-1/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="pulse-bg absolute bottom-1/3 left-1/2 w-5 h-5 bg-pink-400 rounded-full"></div>
                <div className="pulse-bg absolute bottom-1/4 right-1/5 w-3 h-3 bg-cyan-400 rounded-full"></div>

                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 16,
                        y: mousePosition.y - 16,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y }}
                className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-6xl mx-auto text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8"
                    >
                        <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
                        <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            Page Not Found
                        </span>
                    </motion.div>

                    {/* 404 Text with Glitch Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h1 className="glitch-404 text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black mb-4 leading-none">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                                404
                                {/* Glitch layers */}
                                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent opacity-20 animate-pulse"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent opacity-15 transform translate-x-1"></span>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Main Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                Oops! Lost in
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Cyberspace
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            The page you're looking for seems to have vanished into the digital void.
                            But don't worry – we'll help you find your way back to amazing learning content!
                        </motion.p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
                    >
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 min-w-[200px]"
                            >
                                <Home className="w-5 h-5" />
                                <span>Back to Home</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.history.back()}
                            className="group flex items-center space-x-3 px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 min-w-[200px]"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                            <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Go Back</span>
                        </motion.button>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mb-16"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-8">
                            Or explore these popular destinations
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {quickLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group"
                                >
                                    <Link to={link.path}>
                                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${link.gradient} rounded-2xl mb-4 shadow-lg`}
                                            >
                                                <link.icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-200">
                                                {link.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                                                {link.description}
                                            </p>
                                            <ChevronRight className="w-4 h-4 text-gray-400 mx-auto mt-3 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Suggestions Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <Sparkles className="w-6 h-6 text-yellow-500 mr-2" />
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Popular Right Now
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {suggestions.map((suggestion, index) => (
                                <motion.div
                                    key={suggestion}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="group cursor-pointer"
                                >
                                    <Link to="/explore">
                                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 text-center">
                                            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                {suggestion}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="mt-8 pt-6 border-t border-gray-200 text-center"
                        >
                            <p className="text-gray-500 text-sm mb-4">
                                Still can't find what you're looking for?
                            </p>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <Heart className="w-4 h-4" />
                                    <span>Contact Support</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Footer Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        className="mt-20 mb-8 text-center"
                    >
                        <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                            <div className="flex items-center space-x-2">
                                <Globe className="w-4 h-4" />
                                <span>Available worldwide</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>24/7 support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-4 h-4" />
                                <span>Trusted by millions</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;