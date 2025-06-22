import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
    BookOpen, Award, TrendingUp, Clock, Target, Star, Play, 
    ChevronRight, Calendar, BarChart3, Trophy, Bookmark,
    User, Settings, Bell, Search, Filter, Grid, List,
    Download, Eye, CheckCircle, RotateCcw, Sparkles,
    Brain, Zap, Globe, Heart, Rocket, GraduationCap
} from 'lucide-react';

const StudentDashboard = () => {
    const headerRef = useRef(null);
    const statsRef = useRef(null);
    const coursesRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
    const isCoursesInView = useInView(coursesRef, { once: true, margin: "-100px" });

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && headerRef.current) {
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

    const stats = [
        { 
            number: "12", 
            label: "Courses Enrolled", 
            icon: BookOpen, 
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        { 
            number: "8", 
            label: "Certificates Earned", 
            icon: Award, 
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        },
        { 
            number: "156", 
            label: "Hours Learned", 
            icon: Clock, 
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        { 
            number: "94%", 
            label: "Completion Rate", 
            icon: Target, 
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        }
    ];

    const recentCourses = [
        {
            id: 1,
            title: "Advanced React Development",
            instructor: "Sarah Johnson",
            progress: 85,
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
            category: "Web Development",
            rating: 4.8,
            duration: "12 hours",
            nextLesson: "State Management with Redux",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            instructor: "Michael Chen",
            progress: 60,
            thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
            category: "Design",
            rating: 4.9,
            duration: "18 hours",
            nextLesson: "Color Theory and Psychology",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "Data Science with Python",
            instructor: "Emily Davis",
            progress: 40,
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            category: "Data Science",
            rating: 4.7,
            duration: "25 hours",
            nextLesson: "Machine Learning Basics",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    const achievements = [
        {
            title: "First Course Completed",
            description: "Completed your first course successfully",
            icon: GraduationCap,
            earned: true,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Speed Learner",
            description: "Completed 5 courses in one month",
            icon: Zap,
            earned: true,
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            title: "Knowledge Seeker",
            description: "Enrolled in 10+ courses",
            icon: Brain,
            earned: true,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Global Learner",
            description: "Learn from instructors worldwide",
            icon: Globe,
            earned: false,
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    const quickActions = [
        {
            title: "Continue Learning",
            description: "Resume your current course",
            icon: Play,
            link: "/student/my-courses",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            title: "Browse Courses",
            description: "Discover new learning opportunities",
            icon: Search,
            link: "/explore",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        },
        {
            title: "View Certificates",
            description: "Download your achievements",
            icon: Download,
            link: "/student/certificates",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            title: "Learning Goals",
            description: "Set and track your progress",
            icon: Target,
            link: "/student/goals",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-element absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
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
            <section ref={headerRef} className="relative pt-8 pb-12">
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-purple-600/3 to-pink-600/3"
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8"
                    >
                        <div className="mb-6 lg:mb-0">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-4"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Welcome back, Alex!
                                </span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                    Your Learning
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Dashboard
                                </span>
                            </h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-600 max-w-2xl"
                            >
                                Continue your learning journey and track your progress across all courses
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center space-x-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <Bell className="w-5 h-5 text-gray-600" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <Settings className="w-5 h-5 text-gray-600" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="pulse-element absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="pulse-element absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                        <div className="pulse-element absolute bottom-1/3 left-1/3 w-4 h-4 bg-pink-400 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="relative py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="group"
                            >
                                <div className={`relative bg-gradient-to-br ${stat.bgGradient} p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl mb-4 shadow-lg`}
                                        >
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        
                                        <motion.h3 
                                            initial={{ scale: 0 }}
                                            animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                                        >
                                            {stat.number}
                                        </motion.h3>
                                        <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                            Quick Actions
                        </h2>
                        <p className="text-gray-600">Jump back into your learning or explore new opportunities</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {quickActions.map((action, index) => (
                            <motion.div
                                key={action.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                viewport={{ once: true }}
                            >
                                <Link to={action.link} className="group block">
                                    <div className={`relative bg-gradient-to-br ${action.bgGradient} p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                        
                                        <div className="relative z-10">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl mb-4 shadow-lg`}
                                            >
                                                <action.icon className="w-6 h-6 text-white" />
                                            </motion.div>
                                            
                                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                                                {action.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {action.description}
                                            </p>
                                            
                                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200 mt-2" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Courses */}
            <section ref={coursesRef} className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCoursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
                    >
                        <div className="mb-4 sm:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                                Continue Learning
                            </h2>
                            <p className="text-gray-600">Pick up where you left off</p>
                        </div>
                        
                        <Link to="/student/my-courses">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <span>View All</span>
                                <ChevronRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {recentCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isCoursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <img 
                                            src={course.thumbnail} 
                                            alt={course.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 1 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Play className="w-6 h-6 text-gray-900 ml-1" />
                                            </div>
                                        </motion.div>
                                        
                                        <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${course.gradient} text-white text-xs font-medium rounded-full`}>
                                            {course.category}
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{course.duration}</span>
                                        </div>
                                        
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                                        
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">Progress</span>
                                                <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${course.progress}%` }}
                                                    transition={{ duration: 1, delay: index * 0.2 }}
                                                    className={`h-2 bg-gradient-to-r ${course.gradient} rounded-full`}
                                                ></motion.div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Next lesson:</p>
                                                <p className="text-sm font-medium text-gray-800">{course.nextLesson}</p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-12 bg-gradient-to-br from-blue-50/50 to-indigo-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                            Your Achievements
                        </h2>
                        <p className="text-gray-600">Celebrate your learning milestones</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                viewport={{ once: true }}
                                className={`group relative ${achievement.earned ? 'cursor-pointer' : 'opacity-50'}`}
                            >
                                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                                    <motion.div
                                        whileHover={achievement.earned ? { rotate: 360 } : {}}
                                        transition={{ duration: 0.6 }}
                                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl mb-4 shadow-lg relative`}
                                    >
                                        <achievement.icon className="w-8 h-8 text-white" />
                                        {achievement.earned && (
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                    </motion.div>
                                    
                                    <h3 className="font-bold text-gray-900 mb-2 text-sm">
                                        {achievement.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentDashboard;