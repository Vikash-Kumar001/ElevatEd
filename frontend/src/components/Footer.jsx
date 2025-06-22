import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    BookOpen, Users, Award, Heart, Mail, Phone, MapPin, 
    ArrowRight, Sparkles, Globe, Shield, Star, Target,
    Facebook, Twitter, Instagram, Linkedin, Youtube, Send
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        learn: [
            { name: 'Explore Courses', href: '/explore' },
            { name: 'Browse Categories', href: '/categories' },
            { name: 'Free Courses', href: '/free-courses' },
            { name: 'Certifications', href: '/certifications' },
            { name: 'Learning Paths', href: '/learning-paths' }
        ],
        teach: [
            { name: 'Instructor Panel', href: '/instructor/dashboard' },
            { name: 'Create Course', href: '/instructor/create-course' },
            { name: 'Teaching Resources', href: '/teaching-resources' },
            { name: 'Instructor Community', href: '/instructor-community' },
            { name: 'Success Stories', href: '/success-stories' }
        ],
        support: [
            { name: 'Help Center', href: '/help' },
            { name: 'Contact Support', href: '/support' },
            { name: 'System Status', href: '/status' },
            { name: 'Bug Reports', href: '/bugs' },
            { name: 'Feature Requests', href: '/features' }
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press Kit', href: '/press' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Privacy Policy', href: '/privacy' }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: '#', color: 'from-blue-500 to-blue-600', hoverColor: 'hover:from-blue-600 hover:to-blue-700' },
        { icon: Twitter, href: '#', color: 'from-cyan-400 to-cyan-500', hoverColor: 'hover:from-cyan-500 hover:to-cyan-600' },
        { icon: Instagram, href: '#', color: 'from-pink-500 to-purple-500', hoverColor: 'hover:from-pink-600 hover:to-purple-600' },
        { icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-700', hoverColor: 'hover:from-blue-700 hover:to-blue-800' },
        { icon: Youtube, href: '#', color: 'from-red-500 to-red-600', hoverColor: 'hover:from-red-600 hover:to-red-700' }
    ];

    const stats = [
        { icon: Users, number: '50K+', label: 'Active Students' },
        { icon: BookOpen, number: '5K+', label: 'Courses' },
        { icon: Award, number: '98%', label: 'Success Rate' },
        { icon: Globe, number: '150+', label: 'Countries' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                                <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                                <span className="text-white font-medium">Stay Updated</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Never Miss an Update
                            </h2>
                            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                                Subscribe to our newsletter and get the latest courses, updates, and exclusive offers delivered to your inbox.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="max-w-md mx-auto"
                        >
                            <div className="flex gap-4">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Subscribe</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg"
                                    >
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {stat.number}
                                    </h3>
                                    <p className="text-blue-100 font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    ElevatEd
                                </h2>
                            </div>
                            <p className="text-blue-100 leading-relaxed mb-6">
                                Empowering millions of learners worldwide with cutting-edge education technology. 
                                Transform your career with our AI-powered learning platform.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-blue-100">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span>hello@elevated.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-blue-100">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span>+91 8595654823</span>
                                </div>
                                <div className="flex items-center space-x-3 text-blue-100">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span>Gurugram, HR</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                                <Target className="w-5 h-5 mr-2 text-blue-400" />
                                Learn
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.learn.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href}
                                            className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-purple-400" />
                                Teach
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.teach.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href}
                                            className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                                <Shield className="w-5 h-5 mr-2 text-green-400" />
                                Support
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href}
                                            className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href}
                                            className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social Media & Copyright */}
                    <div className="border-t border-white/10 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-4"
                            >
                                <span className="text-blue-100">Follow us:</span>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-10 h-10 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                                        >
                                            <social.icon className="w-5 h-5 text-white" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-6 text-blue-100"
                            >
                                <div className="flex items-center space-x-2">
                                    <Heart className="w-5 h-5 text-red-400" />
                                    <span>Made with love for learners</span>
                                </div>
                                <div className="hidden md:block">|</div>
                                <span>&copy; {currentYear} ElevatEd. All rights reserved.</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;