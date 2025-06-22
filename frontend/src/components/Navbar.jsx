import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Brain, Search, Bell, User, Menu, X, ChevronDown, 
    BookOpen, GraduationCap, Users, BarChart3, Settings,
    Globe, Award, MessageSquare, LogOut, UserCircle
} from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const navigate = useNavigate(); 
    
    // Mock user data - replace with your AuthContext
    const user = {
        name: "John Doe",
        email: "john@example.com",
        role: "Student",
        avatar: null
    };
    
    const isLoggedIn = true; // Replace with actual auth state

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Explore Courses', href: '/explore', icon: BookOpen },
        { label: 'Teach', href: '/instructor/dashboard', icon: GraduationCap },
        { label: 'Community', href: '/community', icon: Users },
        { label: 'About', href: '/about', icon: Globe }
    ];

    const profileMenuItems = [
        { label: 'My Profile', href: '/profile', icon: UserCircle },
        { label: 'My Courses', href: '/student/dashboard', icon: BookOpen },
        { label: 'Achievements', href: '/achievements', icon: Award },
        { label: 'Messages', href: '/messages', icon: MessageSquare },
        { label: 'Settings', href: '/settings', icon: Settings },
        { label: 'Analytics', href: '/analytics', icon: BarChart3 }
    ];

    const handleLogout = () => {
        // Replace with actual logout logic
        console.log('Logging out...');
        setIsProfileDropdownOpen(false);
    };

    const handleNavigation = (href) => {
        navigate(href);
        setIsMobileMenuOpen(false);
        setIsProfileDropdownOpen(false);
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20' 
                        : 'bg-white/80 backdrop-blur-sm shadow-md'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => handleNavigation('/')}
                        >
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                            >
                                <Brain className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    ElevatEd
                                </h1>
                                <p className="text-xs text-gray-500 -mt-1">Learning Management System</p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    className="relative group"
                                >
                                    <button
                                        onClick={() => handleNavigation(link.href)}
                                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50 group"
                                    >
                                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                        <span>{link.label}</span>
                                    </button>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="hidden md:block relative"
                        >
                            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
                                searchFocused ? 'text-blue-600' : 'text-gray-400'
                            }`} />
                            <input 
                                type="text" 
                                placeholder="Search courses, instructors..." 
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                className={`pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-64 ${
                                    searchFocused ? 'bg-white shadow-lg' : ''
                                }`}
                            />
                        </motion.div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4">
                            {isLoggedIn ? (
                                <>
                                    {/* Notifications */}
                                    <motion.button 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                                    >
                                        <Bell className="w-5 h-5" />
                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                                    </motion.button>

                                    {/* Profile Dropdown */}
                                    <div className="relative">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                            className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
                                        >
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <User className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="hidden md:block text-left">
                                                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.role}</p>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                                isProfileDropdownOpen ? 'rotate-180' : ''
                                            }`} />
                                        </motion.button>

                                        <AnimatePresence>
                                            {isProfileDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute right-0 mt-2 w-64 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 py-2 z-50"
                                                >
                                                    <div className="px-4 py-3 border-b border-gray-100">
                                                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                                        <p className="text-xs text-gray-500">{user.email}</p>
                                                    </div>
                                                    
                                                    {profileMenuItems.map((item, index) => (
                                                        <motion.button
                                                            key={item.label}
                                                            whileHover={{ x: 5 }}
                                                            onClick={() => handleNavigation(item.href)}
                                                            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                                        >
                                                            <item.icon className="w-4 h-4" />
                                                            <span>{item.label}</span>
                                                        </motion.button>
                                                    ))}
                                                    
                                                    <div className="border-t border-gray-100 mt-2 pt-2">
                                                        <motion.button
                                                            whileHover={{ x: 5 }}
                                                            onClick={handleLogout}
                                                            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
                                                        >
                                                            <LogOut className="w-4 h-4" />
                                                            <span>Logout</span>
                                                        </motion.button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleNavigation('/login')}
                                        className="hidden md:block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200"
                                    >
                                        Login
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleNavigation('/register')}
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200"
                                    >
                                        Get Started
                                    </motion.button>
                                </>
                            )}

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-lg lg:hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-6">
                            {/* Mobile Search */}
                            <div className="mb-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input 
                                        type="text" 
                                        placeholder="Search courses..." 
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="space-y-2 mb-6">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        onClick={() => handleNavigation(link.href)}
                                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                                    >
                                        <link.icon className="w-5 h-5" />
                                        <span className="font-medium">{link.label}</span>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Mobile Auth Actions */}
                            {!isLoggedIn && (
                                <div className="space-y-3 pt-4 border-t border-gray-200">
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        onClick={() => handleNavigation('/login')}
                                        className="w-full px-4 py-3 text-gray-700 hover:text-blue-600 border border-gray-200 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium"
                                    >
                                        Login
                                    </motion.button>
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        onClick={() => handleNavigation('/register')}
                                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium"
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {(isMobileMenuOpen || isProfileDropdownOpen) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsProfileDropdownOpen(false);
                        }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;