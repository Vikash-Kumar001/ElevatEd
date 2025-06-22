import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Mail, Lock, Eye, EyeOff, ArrowRight, BookOpen, 
    Sparkles, Shield, CheckCircle, Github, Chrome, Apple
} from 'lucide-react';
import Buttons from '../components/Buttons';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            login({ email, password, rememberMe });
            setIsLoading(false);
        }, 1500);
    };

    const socialProviders = [
        { 
            name: 'Google', 
            icon: Chrome, 
            gradient: 'from-blue-500 to-blue-600',
            hoverGradient: 'hover:from-blue-600 hover:to-blue-700'
        },
        { 
            name: 'GitHub', 
            icon: Github, 
            gradient: 'from-gray-700 to-gray-800',
            hoverGradient: 'hover:from-gray-800 hover:to-gray-900'
        },
        { 
            name: 'Apple', 
            icon: Apple, 
            gradient: 'from-gray-800 to-black',
            hoverGradient: 'hover:from-black hover:to-gray-900'
        }
    ];

    const benefits = [
        { icon: BookOpen, text: 'Access 5,000+ courses' },
        { icon: Shield, text: 'Secure & private learning' },
        { icon: CheckCircle, text: 'Industry certifications' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Branding & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block px-8"
                    >
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center space-x-4 mb-8"
                            >
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    EduMaster
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    Welcome Back
                                </h2>
                                <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
                                    Continue your learning journey with the world's best online courses
                                </p>
                            </motion.div>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.text}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                                    className="flex items-center space-x-6 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-lg text-gray-700 font-medium">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Login Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-lg mx-auto"
                    >
                        <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-white/50 shadow-2xl">
                            {/* Mobile Logo */}
                            <div className="lg:hidden text-center mb-10">
                                <div className="inline-flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                        <BookOpen className="w-7 h-7 text-white" />
                                    </div>
                                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        EduMaster
                                    </h1>
                                </div>
                            </div>

                            {/* Header */}
                            <div className="text-center mb-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
                                >
                                    <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
                                    <span className="text-sm font-medium text-blue-600">Sign in to continue</span>
                                </motion.div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">Login to Your Account</h2>
                                <p className="text-gray-600 text-lg">Access your courses and continue learning</p>
                            </div>

                            {/* Social Login */}
                            <div className="mb-10">
                                <div className="grid grid-cols-3 gap-4">
                                    {socialProviders.map((provider, index) => (
                                        <motion.button
                                            key={provider.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-4 bg-gradient-to-r ${provider.gradient} ${provider.hoverGradient} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                                        >
                                            <provider.icon className="w-6 h-6" />
                                        </motion.button>
                                    ))}
                                </div>
                                
                                <div className="flex items-center my-8">
                                    <div className="flex-1 border-t border-gray-300"></div>
                                    <span className="px-6 text-sm text-gray-500 bg-white font-medium">or continue with email</span>
                                    <div className="flex-1 border-t border-gray-300"></div>
                                </div>
                            </div>

                            {/* Login Form */}
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 text-gray-900"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 text-gray-900"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Remember Me & Forgot Password */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="flex items-center justify-between pt-2"
                                >
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <span className="text-sm text-gray-600 font-medium">Remember me</span>
                                    </label>
                                    <Link 
                                        to="/forgot-password" 
                                        className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="pt-4"
                                >
                                    <motion.button
                                        type="submit"
                                        disabled={isLoading}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                    >
                                        {isLoading ? (
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                        ) : (
                                            <>
                                                <span>Sign In</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </motion.div>
                            </form>

                            {/* Sign Up Link */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="text-center mt-10 pt-8 border-t border-gray-200"
                            >
                                <p className="text-gray-600 text-lg">
                                    Don't have an account?{' '}
                                    <Link 
                                        to="/register" 
                                        className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 hover:underline"
                                    >
                                        Sign up for free
                                    </Link>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;