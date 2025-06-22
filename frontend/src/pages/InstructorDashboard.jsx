import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
    Plus, BookOpen, Users, TrendingUp, DollarSign, Eye, Star, 
    BarChart3, Calendar, Clock, Target, Award, Zap, Globe, 
    PlayCircle, Edit, Settings, MessageSquare, Bell, Search,
    Filter, ChevronRight, Sparkles, Rocket, Brain, Heart
} from 'lucide-react';

const InstructorDashboard = () => {
    const dashboardRef = useRef(null);
    const statsRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [selectedTimeframe, setSelectedTimeframe] = useState('This Month');
    
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && dashboardRef.current) {
            window.anime({
                targets: '.floating-bg',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.1, 0.3],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1200)
            });

            window.anime({
                targets: '.pulse-dot',
                scale: [1, 1.2],
                opacity: [0.3, 0.7],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(600)
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
        { 
            title: "Total Students", 
            value: "2,847", 
            change: "+12.5%", 
            icon: Users, 
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        { 
            title: "Course Revenue", 
            value: "$15,642", 
            change: "+8.2%", 
            icon: DollarSign, 
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        { 
            title: "Course Views", 
            value: "18,239", 
            change: "+15.7%", 
            icon: Eye, 
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        },
        { 
            title: "Average Rating", 
            value: "4.8", 
            change: "+0.3", 
            icon: Star, 
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        }
    ];

    const quickActions = [
        {
            title: "Create New Course",
            description: "Design and publish your next masterpiece",
            icon: Plus,
            gradient: "from-blue-600 to-purple-600",
            bgGradient: "from-blue-50 to-purple-50",
            link: "/instructor/create-course",
            featured: true
        },
        {
            title: "My Courses",
            description: "Manage and update your existing courses",
            icon: BookOpen,
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50",
            link: "/instructor/my-courses"
        },
        {
            title: "Analytics",
            description: "Track performance and insights",
            icon: BarChart3,
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-pink-50",
            link: "/instructor/analytics"
        },
        {
            title: "Student Messages",
            description: "Connect with your learners",
            icon: MessageSquare,
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-50 to-red-50",
            link: "/instructor/messages"
        },
        {
            title: "Course Settings",
            description: "Customize your course preferences",
            icon: Settings,
            gradient: "from-indigo-500 to-blue-600",
            bgGradient: "from-indigo-50 to-blue-50",
            link: "/instructor/settings"
        },
        {
            title: "Live Sessions",
            description: "Schedule and manage live classes",
            icon: PlayCircle,
            gradient: "from-pink-500 to-rose-600",
            bgGradient: "from-pink-50 to-rose-50",
            link: "/instructor/live-sessions"
        }
    ];

    const recentCourses = [
        {
            id: 1,
            title: "Advanced React Development",
            students: 1243,
            rating: 4.9,
            revenue: "$3,240",
            status: "Published",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop"
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            students: 892,
            rating: 4.7,
            revenue: "$2,180",
            status: "Published",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            title: "Python for Data Science",
            students: 567,
            rating: 4.8,
            revenue: "$1,890",
            status: "Draft",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop"
        }
    ];

    const achievements = [
        { title: "Top Instructor", icon: Award, color: "text-yellow-500" },
        { title: "Best Seller", icon: Target, color: "text-green-500" },
        { title: "Rising Star", icon: Rocket, color: "text-blue-500" },
        { title: "Student Favorite", icon: Heart, color: "text-red-500" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-bg absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute top-40 right-20 w-56 h-56 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-bg absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                
                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-md pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 16,
                        y: mousePosition.y - 16,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />

                {/* Pulse dots */}
                <div className="pulse-dot absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="pulse-dot absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="pulse-dot absolute bottom-1/3 left-1/5 w-4 h-4 bg-pink-400 rounded-full"></div>
            </div>

            <div ref={dashboardRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-4"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Instructor Portal
                                </span>
                            </motion.div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                    Welcome Back,
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Sarah!
                                </span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                                Ready to inspire minds and shape futures? Let's create something amazing today.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <select 
                                    value={selectedTimeframe}
                                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                                    className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-3 pr-10 font-medium text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                >
                                    <option>This Week</option>
                                    <option>This Month</option>
                                    <option>This Quarter</option>
                                    <option>This Year</option>
                                </select>
                                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-200"
                            >
                                <Bell className="w-4 h-4" />
                                <span>Notifications</span>
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            </motion.button>
                        </div>
                    </div>

                    {/* Achievements Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-3"
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-sm"
                            >
                                <achievement.icon className={`w-4 h-4 ${achievement.color}`} />
                                <span className="text-sm font-medium text-gray-700">{achievement.title}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <section ref={statsRef} className="mb-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className={`relative bg-gradient-to-br ${stat.bgGradient} p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg`}
                                            >
                                                <stat.icon className="w-6 h-6 text-white" />
                                            </motion.div>
                                            <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                                {stat.change}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                            {stat.value}
                                        </h3>
                                        <p className="text-sm text-gray-600 font-medium">
                                            {stat.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Quick Actions Grid */}
                <section className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                            Quick Actions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to manage your teaching excellence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickActions.map((action, index) => (
                            <motion.div
                                key={action.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                viewport={{ once: true }}
                                className={`group relative ${action.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <Link to={action.link} className="block">
                                    <div className={`relative bg-gradient-to-br ${action.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${action.featured ? 'ring-2 ring-blue-200' : ''}`}>
                                        {action.featured && (
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                                                Featured
                                            </div>
                                        )}
                                        
                                        <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${action.gradient} rounded-2xl mb-6 shadow-lg`}
                                            >
                                                <action.icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            
                                            <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 ${action.featured ? 'text-2xl' : 'text-xl'}`}>
                                                {action.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {action.description}
                                            </p>

                                            <div className="flex items-center text-sm font-semibold">
                                                <span className={`bg-gradient-to-r ${action.gradient} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-200`}>
                                                    Get Started
                                                </span>
                                                <ChevronRight className="w-4 h-4 ml-2 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Recent Courses */}
                <section className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                                Recent Courses
                            </h2>
                            <p className="text-lg text-gray-600">
                                Monitor your latest course performance
                            </p>
                        </div>
                        
                        <Link to="/instructor/my-courses">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-4 sm:mt-0"
                            >
                                <span>View All</span>
                                <ChevronRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {recentCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${course.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {course.status}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                                        {course.title}
                                    </h3>
                                    
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Users className="w-4 h-4 text-blue-500" />
                                            <span className="text-gray-600">{course.students} students</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                            <span className="text-gray-600">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <DollarSign className="w-4 h-4 text-green-500" />
                                            <span className="text-gray-600">{course.revenue}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <TrendingUp className="w-4 h-4 text-purple-500" />
                                            <span className="text-gray-600">Growing</span>
                                        </div>
                                    </div>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full mt-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-200 flex items-center justify-center space-x-2"
                                    >
                                        <Edit className="w-4 h-4" />
                                        <span>Edit Course</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                            <Brain className="w-4 h-4 text-white mr-2" />
                            <span className="text-white font-medium">Ready to Inspire?</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Share Your Knowledge with the World
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Create your next course and impact thousands of learners globally. Your expertise can change lives.
                        </p>
                        
                        <Link to="/instructor/create-course">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Plus className="w-5 h-5 mr-2" />
                                <span>Create New Course</span>
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default InstructorDashboard;