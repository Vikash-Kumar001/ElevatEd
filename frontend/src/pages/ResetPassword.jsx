import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Mail, ArrowLeft, Shield, CheckCircle, AlertCircle, Key, 
    Clock, Sparkles, Lock, RefreshCw, Eye, EyeOff, Send,
    HelpCircle, Zap, Heart, Globe, Star
} from 'lucide-react';
import Buttons from '../components/Buttons';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const formRef = useRef(null);
    
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    useEffect(() => {
        // Anime.js floating animation for background elements
        if (window.anime && containerRef.current) {
            window.anime({
                targets: '.floating-bg',
                translateY: [-30, 30],
                rotate: [0, 360],
                opacity: [0.15, 0.35],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1000)
            });

            window.anime({
                targets: '.pulse-bg',
                scale: [1, 1.15],
                opacity: [0.3, 0.6],
                duration: 2500,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(500)
            });

            // Floating icons animation
            window.anime({
                targets: '.floating-icon',
                translateY: [-20, 20],
                translateX: [-10, 10],
                rotate: [-15, 15],
                opacity: [0.4, 0.7],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(800)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
            setMessage('If this email is registered, a reset link has been sent to your inbox.');
            
            // Reset form after success
            setTimeout(() => {
                setEmail('');
                setShowSuccess(false);
                setMessage('');
            }, 5000);
        }, 2000);
    };

    const securityFeatures = [
        {
            icon: Shield,
            title: "Secure Process",
            description: "Bank-level encryption protects your data"
        },
        {
            icon: Clock,
            title: "Quick Recovery",
            description: "Reset link expires in 15 minutes"
        },
        {
            icon: CheckCircle,
            title: "Verified Email",
            description: "Only registered emails receive links"
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-bg absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute top-1/2 right-20 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-bg absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                
                {/* Floating icons */}
                <div className="floating-icon absolute top-1/4 left-1/6 w-8 h-8 text-blue-400/50">
                    <Lock className="w-full h-full" />
                </div>
                <div className="floating-icon absolute top-1/3 right-1/4 w-6 h-6 text-purple-400/50">
                    <Key className="w-full h-full" />
                </div>
                <div className="floating-icon absolute bottom-1/3 left-1/2 w-10 h-10 text-pink-400/50">
                    <Shield className="w-full h-full" />
                </div>
                <div className="floating-icon absolute bottom-1/4 right-1/6 w-7 h-7 text-cyan-400/50">
                    <Mail className="w-full h-full" />
                </div>

                {/* Pulse elements */}
                <div className="pulse-bg absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="pulse-bg absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="pulse-bg absolute bottom-1/2 left-1/5 w-5 h-5 bg-pink-400 rounded-full"></div>

                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 12,
                        y: mousePosition.y - 12,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
            </div>

            {/* Main Content */}
            <motion.div 
                style={{ y }}
                className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Side - Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8"
                            >
                                <RefreshCw className="w-5 h-5 text-blue-500 mr-2" />
                                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Secure Password Reset
                                </span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                    Forgot Your
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Password?
                                </span>
                            </h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                            >
                                No worries! Enter your email address and we'll send you a secure link to reset your password and get you back to learning.
                            </motion.p>

                            {/* Security Features */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="space-y-4"
                            >
                                {securityFeatures.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                        className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl p-8 md:p-12 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-orange-200/30 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>

                                <div className="relative z-10">
                                    {/* Back to Login Link */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="mb-8"
                                    >
                                        <Link to="/login" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 group">
                                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                                            Back to Login
                                        </Link>
                                    </motion.div>

                                    {/* Form Header */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-center mb-8"
                                    >
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                                            <Mail className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                            Reset Password
                                        </h2>
                                        <p className="text-gray-600">
                                            Enter your email to receive a reset link
                                        </p>
                                    </motion.div>

                                    {/* Success Message */}
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                            className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-shrink-0">
                                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-green-800 font-medium">Reset link sent!</p>
                                                    <p className="text-xs text-green-600 mt-1">Check your email for the reset instructions.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Form */}
                                    <motion.form
                                        ref={formRef}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <motion.input
                                                    whileFocus={{ scale: 1.02 }}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your registered email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                                                    required
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <button
                                                type="submit"
                                                disabled={isLoading || !email}
                                                className="w-full relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative flex items-center justify-center space-x-2">
                                                    {isLoading ? (
                                                        <>
                                                            <RefreshCw className="w-5 h-5 animate-spin" />
                                                            <span>Sending Reset Link...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-5 h-5" />
                                                            <span>Send Reset Link</span>
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        </motion.div>

                                        {message && !showSuccess && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 bg-blue-50 border border-blue-200 rounded-2xl"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                                    <p className="text-sm text-blue-800">{message}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.form>

                                    {/* Additional Help */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        className="mt-8 pt-6 border-t border-gray-200 text-center"
                                    >
                                        <p className="text-sm text-gray-500 mb-4">
                                            Remember your password?
                                        </p>
                                        <Link to="/login">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-200"
                                            >
                                                <Key className="w-4 h-4" />
                                                <span>Sign In Instead</span>
                                            </motion.button>
                                        </Link>
                                    </motion.div>

                                    {/* Need Help Link */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                        className="mt-6 text-center"
                                    >
                                        <Link to="/help" className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 group">
                                            <HelpCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                                            <span>Need help? Contact support</span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="mt-8 text-center"
                            >
                                <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <Shield className="w-4 h-4" />
                                        <span>Secure & encrypted</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Globe className="w-4 h-4" />
                                        <span>Trusted worldwide</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Star className="w-4 h-4" />
                                        <span>24/7 support</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPassword;