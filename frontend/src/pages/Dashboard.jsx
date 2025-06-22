import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Shield, GraduationCap, Users, BarChart3, Settings, Bell, Search, User, ChevronRight,
    BookOpen, Calendar, Award, MessageSquare, FileText, Video, Clock, TrendingUp,
    Target, PieChart, Brain, Globe, Zap, Star, CheckCircle, AlertCircle, Play
} from 'lucide-react';

const Dashboard = () => {
    const heroRef = useRef(null);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        // Anime.js floating animation for background elements
        if (window.anime && heroRef.current) {
            window.anime({
                targets: '.floating-element',
                translateY: [-20, 20],
                opacity: [0.3, 0.6],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(500)
            });
        }
    }, []);

    const dashboardCards = [
        {
            title: "Admin Panel",
            description: "System management, user administration, and platform settings",
            path: "/admin",
            icon: Shield,
            gradient: "from-red-500 via-pink-500 to-rose-400",
            bgGradient: "from-red-50 to-pink-50",
            iconColor: "text-red-600",
            stats: "12 Active Admins",
            features: ["User Management", "System Settings", "Analytics", "Reports"]
        },
        {
            title: "Instructor Hub",
            description: "Course creation, student management, and teaching tools",
            path: "/instructor/dashboard",
            icon: GraduationCap,
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgGradient: "from-purple-50 to-indigo-50",
            iconColor: "text-purple-600",
            stats: "45 Active Instructors",
            features: ["Course Builder", "Grade Management", "Live Classes", "Resources"]
        },
        {
            title: "Student Portal",
            description: "Access courses, track progress, and engage with content",
            path: "/student/dashboard",
            icon: Users,
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-50 to-cyan-50",
            iconColor: "text-blue-600",
            stats: "2,847 Enrolled Students",
            features: ["My Courses", "Assignments", "Progress Tracking", "Certificates"]
        }
    ];

    const lmsStats = [
        { label: "Total Courses", value: "134", change: "+23%", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
        { label: "Active Students", value: "2,847", change: "+12%", icon: Users, color: "from-green-500 to-emerald-500" },
        { label: "Completion Rate", value: "87%", change: "+5%", icon: Target, color: "from-purple-500 to-pink-500" },
        { label: "Live Sessions", value: "28", change: "+15%", icon: Video, color: "from-orange-500 to-red-500" }
    ];

    const recentActivities = [
        { type: "course", title: "Advanced React Development", status: "completed", time: "2 hours ago", color: "bg-green-100 text-green-800" },
        { type: "assignment", title: "Database Design Project", status: "submitted", time: "4 hours ago", color: "bg-blue-100 text-blue-800" },
        { type: "discussion", title: "JavaScript Best Practices", status: "active", time: "6 hours ago", color: "bg-purple-100 text-purple-800" },
        { type: "quiz", title: "Python Fundamentals Quiz", status: "graded", time: "1 day ago", color: "bg-orange-100 text-orange-800" }
    ];

    const upcomingEvents = [
        { title: "Web Development Bootcamp", date: "June 25", time: "10:00 AM", type: "Live Class", attendees: 45 },
        { title: "Data Science Workshop", date: "June 27", time: "2:00 PM", type: "Workshop", attendees: 23 },
        { title: "UI/UX Design Seminar", date: "June 30", time: "11:00 AM", type: "Seminar", attendees: 67 }
    ];

    const quickActions = [
        { label: "Create Course", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
        { label: "Schedule Class", icon: Calendar, color: "from-green-500 to-emerald-500" },
        { label: "Grade Assignments", icon: FileText, color: "from-purple-500 to-pink-500" },
        { label: "View Analytics", icon: BarChart3, color: "from-orange-500 to-red-500" },
        { label: "Send Announcements", icon: MessageSquare, color: "from-indigo-500 to-purple-500" },
        { label: "Manage Resources", icon: Globe, color: "from-teal-500 to-cyan-500" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
                <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-30 blur-lg"></div>
                <div className="floating-element absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-15 blur-2xl"></div>
                <div className="floating-element absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 blur-xl"></div>
            </div>

            {/* Header */}
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                            >
                                <Brain className="w-5 h-5 text-white" />
                            </motion.div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                ElevatEd LMS
                            </h1>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:block relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input 
                                    type="text" 
                                    placeholder="Search courses, students..." 
                                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-64"
                                />
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                            >
                                <Bell className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                            </motion.button>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer"
                            >
                                <User className="w-4 h-4 text-white" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                {/* Welcome Section */}
                <motion.div 
                    ref={heroRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
                            Learning Management System
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empowering education through technology. Manage courses, track progress, and create engaging learning experiences.
                        </p>
                    </div>
                </motion.div>

                {/* LMS Stats */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {lmsStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                                </div>
                                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Dashboard Cards */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
                >
                    {dashboardCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.8 + index * 0.15,
                                ease: "easeOut"
                            }}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group"
                        >
                            <div 
                                onClick={() => console.log(`Navigating to ${card.path}`)} 
                                className="block cursor-pointer"
                            >
                                <div className={`relative bg-gradient-to-br ${card.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                                    {/* Animated gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    {/* Floating icon background */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <motion.div 
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className={`p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                            >
                                                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                                className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            >
                                                <ChevronRight className="w-6 h-6 text-gray-400" />
                                            </motion.div>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {card.description}
                                        </p>

                                        {/* Feature list */}
                                        <div className="mb-6">
                                            {card.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-500 mb-1">
                                                    <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-500">
                                                {card.stats}
                                            </span>
                                            <motion.div 
                                                className={`px-4 py-2 bg-gradient-to-r ${card.gradient} text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                                            >
                                                Access Panel
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Recent Activities & Upcoming Events */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Recent Activities */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-blue-600" />
                            Recent Activities
                        </h3>
                        <div className="space-y-3">
                            {recentActivities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                                    className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">{activity.title}</p>
                                        <p className="text-sm text-gray-500">{activity.time}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${activity.color}`}>
                                        {activity.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Upcoming Events */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                            Upcoming Events
                        </h3>
                        <div className="space-y-3">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                                    className="p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {event.type}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{event.date} at {event.time}</span>
                                        <span className="flex items-center">
                                            <Users className="w-3 h-3 mr-1" />
                                            {event.attendees}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {quickActions.map((action, index) => (
                            <motion.button
                                key={action.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center space-y-2 p-4 bg-white/70 backdrop-blur-sm hover:bg-white/90 rounded-xl border border-white/50 hover:border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                <div className={`p-3 bg-gradient-to-r ${action.color} rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                                    <action.icon className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                    {action.label}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;