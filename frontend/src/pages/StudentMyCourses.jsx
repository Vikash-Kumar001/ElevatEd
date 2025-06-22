import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
    BookOpen, Clock, Users, Star, Trophy, Play, Calendar, 
    TrendingUp, Award, Brain, Target, ChevronRight, Filter,
    Search, Grid3X3, List, Bookmark, MoreVertical,
    CheckCircle, PlayCircle, Download, Share2, Sparkles
} from 'lucide-react';
import CourseCard from '../components/CourseCard';

const StudentMyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const heroRef = useRef(null);
    const coursesRef = useRef(null);
    const statsRef = useRef(null);
    
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
    const isCoursesInView = useInView(coursesRef, { once: true, margin: "-50px" });

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && heroRef.current) {
            window.anime({
                targets: '.floating-element',
                translateY: [-20, 20],
                rotate: [0, 360],
                opacity: [0.2, 0.5],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1000)
            });

            window.anime({
                targets: '.pulse-element',
                scale: [1, 1.1],
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

    useEffect(() => {
        // Enhanced mock data with progress and completion status
        const mockCourses = [
            {
                id: 1,
                title: 'Advanced JavaScript & ES6+',
                description: 'Master modern JavaScript with advanced concepts, async programming, and ES6+ features.',
                instructor: 'Sarah Wilson',
                image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
                progress: 85,
                totalLessons: 24,
                completedLessons: 20,
                duration: '12 hours',
                rating: 4.8,
                status: 'in-progress',
                category: 'Programming',
                level: 'Advanced',
                lastAccessed: '2 days ago',
                certificate: true
            },
            {
                id: 2,
                title: 'React Mastery: Complete Guide',
                description: 'Comprehensive React course covering hooks, context, performance optimization, and modern patterns.',
                instructor: 'Michael Chen',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
                progress: 100,
                totalLessons: 32,
                completedLessons: 32,
                duration: '18 hours',
                rating: 4.9,
                status: 'completed',
                category: 'Frontend',
                level: 'Intermediate',
                lastAccessed: '1 week ago',
                certificate: true
            },
            {
                id: 3,
                title: 'UI/UX Design Fundamentals',
                description: 'Learn design principles, user research, prototyping, and create stunning user interfaces.',
                instructor: 'Emily Rodriguez',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
                progress: 45,
                totalLessons: 20,
                completedLessons: 9,
                duration: '15 hours',
                rating: 4.7,
                status: 'in-progress',
                category: 'Design',
                level: 'Beginner',
                lastAccessed: '3 days ago',
                certificate: false
            },
            {
                id: 4,
                title: 'Python Data Science',
                description: 'Complete data science workflow with Python, pandas, numpy, and machine learning libraries.',
                instructor: 'David Kumar',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
                progress: 30,
                totalLessons: 28,
                completedLessons: 8,
                duration: '22 hours',
                rating: 4.6,
                status: 'in-progress',
                category: 'Data Science',
                level: 'Intermediate',
                lastAccessed: '5 days ago',
                certificate: false
            },
            {
                id: 5,
                title: 'Digital Marketing Strategy',
                description: 'Modern digital marketing tactics, social media strategy, and conversion optimization.',
                instructor: 'Lisa Thompson',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
                progress: 100,
                totalLessons: 16,
                completedLessons: 16,
                duration: '10 hours',
                rating: 4.5,
                status: 'completed',
                category: 'Marketing',
                level: 'Beginner',
                lastAccessed: '2 weeks ago',
                certificate: true
            },
            {
                id: 6,
                title: 'Cloud Architecture with AWS',
                description: 'Build scalable cloud solutions using AWS services, DevOps practices, and infrastructure as code.',
                instructor: 'Robert Kim',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
                progress: 65,
                totalLessons: 30,
                completedLessons: 19,
                duration: '25 hours',
                rating: 4.8,
                status: 'in-progress',
                category: 'Cloud',
                level: 'Advanced',
                lastAccessed: '1 day ago',
                certificate: false
            }
        ];
        
        setCourses(mockCourses);
        setFilteredCourses(mockCourses);
    }, []);

    useEffect(() => {
        let filtered = courses;
        
        if (searchTerm) {
            filtered = filtered.filter(course => 
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (filterStatus !== 'all') {
            filtered = filtered.filter(course => course.status === filterStatus);
        }
        
        setFilteredCourses(filtered);
    }, [courses, searchTerm, filterStatus]);

    const stats = [
        { 
            label: 'Courses Enrolled', 
            value: courses.length.toString(), 
            icon: BookOpen, 
            gradient: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-50 to-cyan-50'
        },
        { 
            label: 'Completed', 
            value: courses.filter(c => c.status === 'completed').length.toString(), 
            icon: Trophy, 
            gradient: 'from-green-500 to-emerald-500',
            bgGradient: 'from-green-50 to-emerald-50'
        },
        { 
            label: 'In Progress', 
            value: courses.filter(c => c.status === 'in-progress').length.toString(), 
            icon: Clock, 
            gradient: 'from-orange-500 to-amber-500',
            bgGradient: 'from-orange-50 to-amber-50'
        },
        { 
            label: 'Certificates', 
            value: courses.filter(c => c.certificate && c.status === 'completed').length.toString(), 
            icon: Award, 
            gradient: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-50 to-pink-50'
        }
    ];

    const EnhancedCourseCard = ({ course, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCoursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-20">
                {course.status === 'completed' ? (
                    <div className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        <span>Completed</span>
                    </div>
                ) : (
                    <div className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        <PlayCircle className="w-3 h-3" />
                        <span>In Progress</span>
                    </div>
                )}
            </div>

            {/* Course Image */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button Overlay */}
                <motion.div 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </div>
                </motion.div>
            </div>

            {/* Course Content */}
            <div className="p-6">
                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        ></motion.div>
                    </div>
                </div>

                {/* Category & Level */}
                <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                        {course.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        {course.level}
                    </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-gray-700 font-medium">{course.instructor}</span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.completedLessons}/{course.totalLessons}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 mr-3"
                    >
                        <Play className="w-4 h-4" />
                        <span>{course.status === 'completed' ? 'Review' : 'Continue'}</span>
                    </motion.button>
                    
                    <div className="flex space-x-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200"
                        >
                            <Bookmark className="w-4 h-4 text-gray-600" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200"
                        >
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-element absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-element absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                
                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 8,
                        y: mousePosition.y - 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-20 pb-12 overflow-hidden">
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Your Learning Journey
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                My Learning
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
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Track your progress, continue your courses, and achieve your learning goals
                        </motion.p>
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
            <section ref={statsRef} className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`bg-gradient-to-br ${stat.bgGradient} p-6 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-4 shadow-lg`}
                                >
                                    <stat.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    initial={{ scale: 0 }}
                                    animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                                >
                                    {stat.value}
                                </motion.h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8"
                    >
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex items-center space-x-4">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            >
                                <option value="all">All Courses</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>

                            {/* View Mode Toggle */}
                            <div className="flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-1">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-xl transition-all duration-200 ${
                                        viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <Grid3X3 className="w-5 h-5" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-xl transition-all duration-200 ${
                                        viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <List className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Courses Grid */}
            <section ref={coursesRef} className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCourses.length > 0 ? (
                        <div className={`grid gap-8 ${
                            viewMode === 'grid' 
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                                : 'grid-cols-1'
                        }`}>
                            {filteredCourses.map((course, index) => (
                                <EnhancedCourseCard key={course.id} course={course} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                            <p className="text-gray-600">Try adjusting your search or filters</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default StudentMyCourses;