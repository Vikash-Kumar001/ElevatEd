import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
    Users, BookOpen, BarChart3, Settings, TrendingUp, Shield, 
    Bell, Search, Filter, Download, Plus, Edit, Trash2, Eye,
    Star, Clock, Award, Globe, Zap, Target, Brain, Heart,
    Activity, DollarSign, Calendar, MessageSquare, FileText,
    PieChart, LineChart, UserCheck, BookmarkPlus, Sparkles,
    ArrowRight
} from 'lucide-react';

const AdminDashboard = () => {
    const dashboardRef = useRef(null);
    const statsRef = useRef(null);
    const cardsRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
    const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && dashboardRef.current) {
            window.anime({
                targets: '.floating-element',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.1, 0.4],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(600)
            });

            window.anime({
                targets: '.pulse-element',
                scale: [1, 1.2],
                opacity: [0.3, 0.7],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(500)
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

    const dashboardStats = [
        { 
            number: "15,247", 
            label: "Total Users", 
            icon: Users, 
            gradient: "from-blue-500 to-cyan-500",
            change: "+12.5%",
            changeType: "increase"
        },
        { 
            number: "3,842", 
            label: "Active Courses", 
            icon: BookOpen, 
            gradient: "from-purple-500 to-pink-500",
            change: "+8.3%",
            changeType: "increase"
        },
        { 
            number: "$248K", 
            label: "Revenue", 
            icon: DollarSign, 
            gradient: "from-green-500 to-emerald-500",
            change: "+15.2%",
            changeType: "increase"
        },
        { 
            number: "4.8", 
            label: "Avg Rating", 
            icon: Star, 
            gradient: "from-orange-500 to-red-500",
            change: "+0.3",
            changeType: "increase"
        }
    ];

    const managementCards = [
        {
            title: "User Management",
            description: "Manage user accounts, roles, and permissions across the platform",
            icon: Users,
            gradient: "from-blue-500 to-cyan-600",
            bgGradient: "from-blue-50 to-cyan-50",
            link: "/admin/users",
            stats: "15,247 users",
            actions: ["View All", "Add User", "Bulk Actions"]
        },
        {
            title: "Course Management",
            description: "Oversee course content, approvals, and instructor submissions",
            icon: BookOpen,
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-pink-50",
            link: "/admin/courses",
            stats: "3,842 courses",
            actions: ["View All", "Approve", "Analytics"]
        },
        {
            title: "Analytics & Reports",
            description: "Track platform performance, user engagement, and revenue metrics",
            icon: BarChart3,
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50",
            link: "/admin/analytics",
            stats: "Real-time data",
            actions: ["View Dashboard", "Export", "Schedule"]
        },
        {
            title: "Content Moderation",
            description: "Review and moderate user-generated content and course materials",
            icon: Shield,
            gradient: "from-red-500 to-pink-600",
            bgGradient: "from-red-50 to-pink-50",
            link: "/admin/moderation",
            stats: "24 pending",
            actions: ["Review Queue", "Approve", "Reject"]
        },
        {
            title: "Financial Management",
            description: "Handle payments, instructor payouts, and financial reporting",
            icon: DollarSign,
            gradient: "from-yellow-500 to-orange-600",
            bgGradient: "from-yellow-50 to-orange-50",
            link: "/admin/finance",
            stats: "$248K revenue",
            actions: ["Payments", "Payouts", "Reports"]
        },
        {
            title: "System Settings",
            description: "Configure platform settings, integrations, and system preferences",
            icon: Settings,
            gradient: "from-gray-500 to-slate-600",
            bgGradient: "from-gray-50 to-slate-50",
            link: "/admin/settings",
            stats: "System health: 99.9%",
            actions: ["Configure", "Backup", "Monitor"]
        }
    ];

    const quickActions = [
        { name: "Add New User", icon: Plus, color: "from-blue-500 to-blue-600" },
        { name: "Review Courses", icon: Eye, color: "from-purple-500 to-purple-600" },
        { name: "Generate Report", icon: FileText, color: "from-green-500 to-green-600" },
        { name: "Send Notification", icon: Bell, color: "from-orange-500 to-orange-600" }
    ];

    const recentActivity = [
        { action: "New course submitted", user: "Sarah Johnson", time: "2 min ago", type: "course" },
        { action: "User account verified", user: "Michael Chen", time: "5 min ago", type: "user" },
        { action: "Payment processed", user: "Emily Davis", time: "8 min ago", type: "payment" },
        { action: "Course approved", user: "David Wilson", time: "15 min ago", type: "course" },
        { action: "Refund requested", user: "Lisa Anderson", time: "22 min ago", type: "payment" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-element absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-element absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
                
                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 8,
                        y: mousePosition.y - 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />
            </div>

            {/* Header Section */}
            <section ref={dashboardRef} className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-8 pb-12">
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-purple-600/3 to-pink-600/3"
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8"
                    >
                        <div className="mb-6 lg:mb-0">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-sm mb-4"
                            >
                                <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Admin Control Center
                                </span>
                            </motion.div>
                            
                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
                                Dashboard Overview
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                Monitor, manage, and optimize your learning platform with comprehensive administrative tools
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-3"
                        >
                            {quickActions.map((action, index) => (
                                <motion.button
                                    key={action.name}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${action.color} text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                                >
                                    <action.icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{action.name}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Search and Filter Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-8"
                    >
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search users, courses, or content..."
                                className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <Filter className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700 font-medium">Filters</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="relative -mt-6 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dashboardStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="group"
                            >
                                <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg`}
                                        >
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div className={`flex items-center space-x-1 text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                                            <TrendingUp className="w-4 h-4" />
                                            <span>{stat.change}</span>
                                        </div>
                                    </div>
                                    <motion.h3 
                                        initial={{ scale: 0 }}
                                        animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1"
                                    >
                                        {stat.number}
                                    </motion.h3>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Cards Section */}
            <section ref={cardsRef} className="pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                            Management Tools
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive tools to manage every aspect of your learning platform
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {managementCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                <button onClick={() => window.location.href = card.link} className="block w-full h-full">
                                    <div className={`relative bg-gradient-to-br ${card.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${card.gradient} rounded-2xl shadow-lg`}
                                                >
                                                    <card.icon className="w-7 h-7 text-white" />
                                                </motion.div>
                                                <span className="text-sm font-medium text-gray-500 bg-white/80 px-3 py-1 rounded-full">
                                                    {card.stats}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                                                {card.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {card.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {card.actions.map((action, actionIndex) => (
                                                    <span 
                                                        key={actionIndex}
                                                        className="text-xs px-3 py-1 bg-white/60 text-gray-700 rounded-full border border-white/50"
                                                    >
                                                        {action}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recent Activity Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg p-8"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Recent Activity</h3>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                            >
                                <span>View All</span>
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>

                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gray-50/80 rounded-xl hover:bg-white/80 transition-colors duration-300"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                            activity.type === 'course' ? 'bg-blue-100 text-blue-600' :
                                            activity.type === 'user' ? 'bg-green-100 text-green-600' :
                                            'bg-yellow-100 text-yellow-600'
                                        }`}>
                                            {activity.type === 'course' ? <BookOpen className="w-5 h-5" /> :
                                             activity.type === 'user' ? <UserCheck className="w-5 h-5" /> :
                                             <DollarSign className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{activity.action}</p>
                                            <p className="text-sm text-gray-500">{activity.user}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                        <Clock className="w-4 h-4" />
                                        <span>{activity.time}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Floating Action Elements */}
            <div className="fixed bottom-8 right-8 z-20">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                    <Plus className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Pulse elements for ambient animation */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="pulse-element absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="pulse-element absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="pulse-element absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="pulse-element absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-400 rounded-full"></div>
            </div>
        </div>
    );
};

export default AdminDashboard;