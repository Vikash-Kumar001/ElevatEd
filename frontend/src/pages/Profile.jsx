import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    User, Settings, BookOpen, Award, MessageCircle, BarChart3,
    Edit3, Camera, Mail, Phone, MapPin, Calendar, Clock,
    Star, TrendingUp, Download, Share2, Bell, Shield,
    Bookmark, Play, Eye, Heart, Trophy, Target, Zap,
    Globe, Github, Linkedin, Twitter, Instagram, ChevronRight,
    Upload, Save, X, Check, Plus, Minus, Filter, Search,
    Moon, Sun, Palette, Lock, HelpCircle, LogOut, Crown,
    Sparkles, Rocket, Brain, Code, Paintbrush, Camera as CameraIcon
} from 'lucide-react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        title: 'Full Stack Developer',
        bio: 'Passionate developer with 5+ years of experience in creating amazing web applications. Love to teach and share knowledge with the community.',
        location: 'San Francisco, CA',
        joined: 'January 2023',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=400&fit=crop'
    });

    const heroRef = useRef(null);
    const statsRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

    useEffect(() => {
        // Anime.js animations
        if (window.anime) {
            window.anime({
                targets: '.floating-orb',
                translateY: [-20, 20],
                rotate: [0, 360],
                scale: [0.8, 1.2],
                opacity: [0.3, 0.7],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(600)
            });

            window.anime({
                targets: '.pulse-dot',
                scale: [1, 1.5],
                opacity: [0.4, 0.8],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(300)
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

    const stats = [
        { number: "127", label: "Courses Completed", icon: BookOpen, gradient: "from-blue-500 to-cyan-500", change: "+12%" },
        { number: "43", label: "Certificates Earned", icon: Award, gradient: "from-purple-500 to-pink-500", change: "+8%" },
        { number: "2.4K", label: "Learning Hours", icon: Clock, gradient: "from-green-500 to-emerald-500", change: "+15%" },
        { number: "4.9", label: "Average Rating", icon: Star, gradient: "from-orange-500 to-red-500", change: "+0.2" }
    ];

    const achievements = [
        { title: "Expert Learner", description: "Completed 100+ courses", icon: Crown, color: "from-yellow-400 to-orange-500" },
        { title: "Speed Runner", description: "Finished 5 courses in a week", icon: Zap, color: "from-blue-400 to-purple-500" },
        { title: "Master Coder", description: "Aced all programming courses", icon: Code, color: "from-green-400 to-blue-500" },
        { title: "Design Guru", description: "Top 1% in design courses", icon: Paintbrush, color: "from-pink-400 to-red-500" }
    ];

    const recentCourses = [
        {
            title: "Advanced React Development",
            instructor: "Sarah Johnson",
            progress: 85,
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
            duration: "12 hours",
            rating: 4.8
        },
        {
            title: "UI/UX Design Masterclass",
            instructor: "Michael Chen",
            progress: 60,
            thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
            duration: "8 hours",
            rating: 4.9
        },
        {
            title: "Machine Learning Fundamentals",
            instructor: "Dr. Emily Davis",
            progress: 35,
            thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
            duration: "15 hours",
            rating: 4.7
        }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: User },
        { id: 'courses', label: 'My Courses', icon: BookOpen },
        { id: 'achievements', label: 'Achievements', icon: Trophy },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const socialLinks = [
        { platform: 'GitHub', icon: Github, url: '#', color: 'hover:text-gray-800' },
        { platform: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
        { platform: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
        { platform: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-orb absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-orb absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-orb absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>

                <motion.div
                    className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 12,
                        y: mousePosition.y - 12,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />
            </div>

            {/* Header Section */}
            <section ref={heroRef} className="relative">
                {/* Cover Image */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0"
                    >
                        <img
                            src={profileData.coverImage}
                            alt="Cover"
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent' : 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'}`}></div>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0">
                        <div className="pulse-dot absolute top-1/4 left-1/4 w-3 h-3 bg-white/60 rounded-full"></div>
                        <div className="pulse-dot absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/60 rounded-full"></div>
                        <div className="pulse-dot absolute bottom-1/3 left-1/2 w-4 h-4 bg-purple-400/60 rounded-full"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-6 right-6 flex space-x-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/60 text-white' : 'bg-white/60 text-gray-700'}`}
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/60 text-white' : 'bg-white/60 text-gray-700'}`}
                        >
                            <Share2 className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/60 text-white' : 'bg-white/60 text-gray-700'}`}
                        >
                            <Settings className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative -mt-24 md:-mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-xl rounded-3xl border ${isDarkMode ? 'border-gray-700/50' : 'border-white/50'} shadow-2xl p-8`}
                        >
                            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                                {/* Avatar */}
                                <div className="relative">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative"
                                    >
                                        <img
                                            src={profileData.avatar}
                                            alt={profileData.name}
                                            className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-xl"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-lg"
                                        >
                                            <Camera className="w-4 h-4" />
                                        </motion.button>
                                    </motion.div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg"></div>
                                </div>

                                {/* Profile Details */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <motion.h1
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}
                                            >
                                                {profileData.name}
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="ml-3 inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full"
                                                >
                                                    <Crown className="w-4 h-4 mr-1" />
                                                    Pro
                                                </motion.span>
                                            </motion.h1>
                                            <motion.p
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className={`text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium mb-3`}
                                            >
                                                {profileData.title}
                                            </motion.p>
                                            <motion.p
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl leading-relaxed mb-4`}
                                            >
                                                {profileData.bio}
                                            </motion.p>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className={`flex flex-wrap items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                            >
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-1" />
                                                    {profileData.location}
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    Joined {profileData.joined}
                                                </div>
                                                <div className="flex items-center">
                                                    <Mail className="w-4 h-4 mr-1" />
                                                    {profileData.email}
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsEditing(!isEditing)}
                                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                            <span>Edit Profile</span>
                                        </motion.button>
                                    </div>

                                    {/* Social Links */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="flex items-center space-x-4 mt-6"
                                    >
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.platform}
                                                href={social.url}
                                                whileHover={{ scale: 1.2, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-3 ${isDarkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'} rounded-2xl transition-all duration-300 ${social.color}`}
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl p-6 border ${isDarkMode ? 'border-gray-700/50' : 'border-white/50'} shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-2xl shadow-lg`}
                                    >
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div className={`px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full ${isDarkMode ? 'bg-green-900/50 text-green-400' : ''}`}>
                                        {stat.change}
                                    </div>
                                </div>
                                <h3 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    {stat.number}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <section className="sticky top-0 z-40 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-1 overflow-x-auto py-4">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                        : isDarkMode
                                            ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                <span>{tab.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Recent Activity */}
                            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-white/50'} shadow-lg`}>
                                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                                    Recent Courses
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recentCourses.map((course, index) => (
                                        <motion.div
                                            key={course.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-100'}`}
                                        >
                                            <div className="relative">
                                                <img
                                                    src={course.thumbnail}
                                                    alt={course.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-sm">
                                                    {course.duration}
                                                </div>
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-lg p-2`}>
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                                {course.progress}%
                                                            </span>
                                                            <div className="flex items-center space-x-1">
                                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                                    {course.rating}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${course.progress}%` }}
                                                                transition={{ duration: 1, delay: index * 0.2 }}
                                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                                    {course.title}
                                                </h3>
                                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>
                                                    by {course.instructor}
                                                </p>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                                                >
                                                    <Play className="w-4 h-4" />
                                                    <span>Continue Learning</span>
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <section className="py-12">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    {activeTab === 'overview' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="space-y-8"
                                        >
                                            {/* Recent Courses ... (already present) */}

                                            {/* Achievements */}
                                            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-white/50'} shadow-lg`}>
                                                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                                                    Recent Achievements
                                                </h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                    {achievements.map((achievement, index) => (
                                                        <motion.div
                                                            key={achievement.title}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            whileHover={{ scale: 1.05, y: -5 }}
                                                            className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-2xl p-6 text-center border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-100'} shadow-lg hover:shadow-xl transition-all duration-300`}
                                                        >
                                                            <motion.div
                                                                whileHover={{ rotate: 360 }}
                                                                transition={{ duration: 0.6 }}
                                                                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl mb-4 shadow-lg`}
                                                            >
                                                                <achievement.icon className="w-8 h-8 text-white" />
                                                            </motion.div>
                                                            <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                                                {achievement.title}
                                                            </h3>
                                                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                                                                {achievement.description}
                                                            </p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'courses' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-center py-16 text-xl text-gray-500"
                                        >
                                            {/* You can replace this with your actual courses list */}
                                            <BookOpen className="mx-auto mb-4 w-10 h-10 text-blue-500" />
                                            <div>My Courses content coming soon...</div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'achievements' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-center py-16 text-xl text-gray-500"
                                        >
                                            <Award className="mx-auto mb-4 w-10 h-10 text-yellow-500" />
                                            <div>Achievements details coming soon...</div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'analytics' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-center py-16 text-xl text-gray-500"
                                        >
                                            <BarChart3 className="mx-auto mb-4 w-10 h-10 text-purple-500" />
                                            <div>Analytics dashboard coming soon...</div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'settings' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-center py-16 text-xl text-gray-500"
                                        >
                                            <Settings className="mx-auto mb-4 w-10 h-10 text-gray-500" />
                                            <div>Settings panel coming soon...</div>
                                        </motion.div>
                                    )}
                                </div>
                            </section>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Profile;