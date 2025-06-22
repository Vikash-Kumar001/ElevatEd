import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
    Search, Filter, Star, Clock, Users, Play, BookOpen, 
    Code, Palette, Camera, BarChart3, Brain, TrendingUp,
    Award, ChevronDown, Grid, List, Sparkles, ArrowRight
} from 'lucide-react';
import Buttons from '../components/Buttons';

const ExploreCourses = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popular');
    const [isLoading, setIsLoading] = useState(true);
    
    const heroRef = useRef(null);
    const coursesRef = useRef(null);
    const isCoursesInView = useInView(coursesRef, { once: true, margin: "-100px" });

    const categories = [
        { id: 'all', name: 'All Courses', icon: BookOpen, color: 'from-gray-500 to-gray-600' },
        { id: 'web-dev', name: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
        { id: 'design', name: 'Design & UX', icon: Palette, color: 'from-purple-500 to-pink-500' },
        { id: 'photography', name: 'Photography', icon: Camera, color: 'from-green-500 to-emerald-500' },
        { id: 'business', name: 'Business', icon: BarChart3, color: 'from-orange-500 to-red-500' },
        { id: 'data-science', name: 'Data Science', icon: Brain, color: 'from-violet-500 to-purple-500' },
        { id: 'marketing', name: 'Marketing', icon: TrendingUp, color: 'from-pink-500 to-rose-500' }
    ];

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setCourses([
                {
                    id: 1,
                    title: 'Complete Full Stack Web Development Bootcamp',
                    description: 'Master the MERN stack with hands-on projects. Build real-world applications from scratch.',
                    instructor: 'John Doe',
                    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
                    category: 'web-dev',
                    rating: 4.8,
                    students: 12543,
                    duration: '42 hours',
                    level: 'Beginner',
                    price: 89.99,
                    badge: 'Bestseller',
                    lessons: 156
                },
                {
                    id: 2,
                    title: 'Python for Data Science & Machine Learning',
                    description: 'Complete data analysis with Pandas, NumPy, and Scikit-learn. Real industry projects included.',
                    instructor: 'Jane Smith',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
                    category: 'data-science',
                    rating: 4.9,
                    students: 8967,
                    duration: '38 hours',
                    level: 'Intermediate',
                    price: 79.99,
                    badge: 'Highest Rated',
                    lessons: 142
                },
                {
                    id: 3,
                    title: 'UI/UX Design Masterclass: Figma to Prototype',
                    description: 'Design stunning interfaces and user experiences. Learn Figma, design systems, and prototyping.',
                    instructor: 'Alex Lee',
                    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
                    category: 'design',
                    rating: 4.7,
                    students: 6789,
                    duration: '28 hours',
                    level: 'Beginner',
                    price: 69.99,
                    badge: 'New',
                    lessons: 98
                },
                {
                    id: 4,
                    title: 'Professional Photography: From Basics to Pro',
                    description: 'Master camera settings, composition, and photo editing. Build your photography portfolio.',
                    instructor: 'Sarah Wilson',
                    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop',
                    category: 'photography',
                    rating: 4.6,
                    students: 4321,
                    duration: '32 hours',
                    level: 'All Levels',
                    price: 94.99,
                    badge: 'Popular',
                    lessons: 124
                },
                {
                    id: 5,
                    title: 'Digital Marketing Strategy & Analytics',
                    description: 'Complete digital marketing course covering SEO, social media, and Google Analytics.',
                    instructor: 'Mike Johnson',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
                    category: 'marketing',
                    rating: 4.5,
                    students: 7654,
                    duration: '24 hours',
                    level: 'Intermediate',
                    price: 74.99,
                    badge: 'Updated',
                    lessons: 87
                },
                {
                    id: 6,
                    title: 'Business Strategy & Leadership Essentials',
                    description: 'Develop strategic thinking and leadership skills for modern business challenges.',
                    instructor: 'Emily Davis',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
                    category: 'business',
                    rating: 4.8,
                    students: 5432,
                    duration: '30 hours',
                    level: 'Advanced',
                    price: 99.99,
                    badge: 'Premium',
                    lessons: 112
                }
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        let filtered = courses;

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(course => course.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort courses
        switch (sortBy) {
            case 'popular':
                filtered.sort((a, b) => b.students - a.students);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilteredCourses(filtered);
    }, [courses, selectedCategory, searchTerm, sortBy]);

    const getBadgeColor = (badge) => {
        switch (badge) {
            case 'Bestseller': return 'bg-orange-500';
            case 'Highest Rated': return 'bg-green-500';
            case 'New': return 'bg-blue-500';
            case 'Popular': return 'bg-purple-500';
            case 'Updated': return 'bg-cyan-500';
            case 'Premium': return 'bg-pink-500';
            default: return 'bg-gray-500';
        }
    };

    const getLevelColor = (level) => {
        switch (level) {
            case 'Beginner': return 'text-green-600 bg-green-50';
            case 'Intermediate': return 'text-yellow-600 bg-yellow-50';
            case 'Advanced': return 'text-red-600 bg-red-50';
            case 'All Levels': return 'text-blue-600 bg-blue-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
                            <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                5,000+ Premium Courses Available
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                Explore Our
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Course Library
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover world-class courses taught by industry experts. Transform your skills and advance your career.
                        </p>
                    </motion.div>

                    {/* Search and Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 mb-8"
                    >
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                            {/* Search Input */}
                            <div className="relative flex-1 w-full lg:w-auto">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>

                            {/* Sort Filter */}
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>

                            {/* View Mode Toggle */}
                            <div className="flex bg-gray-100 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        viewMode === 'grid' 
                                            ? 'bg-white shadow-sm text-blue-600' 
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        viewMode === 'list' 
                                            ? 'bg-white shadow-sm text-blue-600' 
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Counter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center mb-8"
                    >
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-blue-600">{filteredCourses.length}</span> courses
                            {selectedCategory !== 'all' && (
                                <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
                            )}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Courses Grid */}
            <section ref={coursesRef} className="relative py-16">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid gap-8 ${
                        viewMode === 'grid' 
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                            : 'grid-cols-1'
                    }`}>
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isCoursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group"
                            >
                                <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/50 ${
                                    viewMode === 'list' ? 'flex' : ''
                                }`}>
                                    {/* Course Image */}
                                    <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                                        <img 
                                            src={course.image} 
                                            alt={course.title}
                                            className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                                                viewMode === 'list' ? 'h-full' : 'h-48'
                                            }`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        
                                        {/* Badge */}
                                        <div className={`absolute top-4 left-4 px-3 py-1 ${getBadgeColor(course.badge)} text-white text-xs font-semibold rounded-full`}>
                                            {course.badge}
                                        </div>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                                            >
                                                <Play className="w-6 h-6 text-blue-600 ml-1" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-6 flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                                                {course.level}
                                            </span>
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {course.description}
                                        </p>

                                        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span>{course.lessons} lessons</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Users className="w-4 h-4" />
                                                <span>{course.students.toLocaleString()}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-500">By {course.instructor}</p>
                                                <p className="text-2xl font-bold text-gray-900">${course.price}</p>
                                            </div>
                                            
                                            <Link to={`/course/${course.id}`}>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="group/btn px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                                >
                                                    <span>View Course</span>
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredCourses.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                }}
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ExploreCourses;