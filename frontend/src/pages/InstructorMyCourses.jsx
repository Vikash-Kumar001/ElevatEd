import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../components/Cards';
import { 
    FaPlus, 
    FaBookOpen, 
    FaUsers, 
    FaStar, 
    FaChartLine, 
    FaGraduationCap,
    FaEdit,
    FaEye,
    FaUserGraduate,
    FaDollarSign
} from 'react-icons/fa';

const InstructorMyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Simulate loading delay for smooth animation
        setTimeout(() => {
            setCourses([
                {
                    id: 101,
                    title: 'Node.js API Development',
                    description: 'Build scalable REST APIs with Node.js, Express, and MongoDB. Learn authentication, middleware, and deployment.',
                    instructor: 'You',
                    image: '/assets/node-api.jpg',
                    students: 1247,
                    rating: 4.8,
                    reviews: 234,
                    price: 89.99,
                    status: 'published',
                    category: 'Backend Development',
                    duration: '12 hours',
                    lessons: 45,
                    earnings: 24567.89
                },
                {
                    id: 102,
                    title: 'UI Design Essentials',
                    description: 'Master modern UI design principles, design systems, and tools like Figma and Adobe XD.',
                    instructor: 'You',
                    image: '/assets/ui-design.jpg',
                    students: 892,
                    rating: 4.9,
                    reviews: 178,
                    price: 79.99,
                    status: 'published',
                    category: 'Design',
                    duration: '8 hours',
                    lessons: 32,
                    earnings: 18934.52
                },
                {
                    id: 103,
                    title: 'React Advanced Patterns',
                    description: 'Deep dive into advanced React patterns, hooks, performance optimization, and state management.',
                    instructor: 'You',
                    image: '/assets/react-advanced.jpg',
                    students: 567,
                    rating: 4.7,
                    reviews: 98,
                    price: 99.99,
                    status: 'draft',
                    category: 'Frontend Development',
                    duration: '15 hours',
                    lessons: 52,
                    earnings: 12456.33
                }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            scale: 1.02,
            y: -8,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesFilter = activeFilter === 'all' || course.status === activeFilter;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
    const totalEarnings = courses.reduce((sum, course) => sum + course.earnings, 0);
    const averageRating = courses.reduce((sum, course) => sum + course.rating, 0) / courses.length || 0;

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 flex items-center justify-center">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading your courses...</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Hero Section */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                        My Course Studio
                        <span className="inline-block animate-bounce ml-2">🎓</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                        "Empower minds, shape futures, and build your teaching legacy."
                    </p>
                </motion.div>

                {/* Stats Overview */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Students</p>
                                <p className="text-3xl font-bold text-indigo-600">{totalStudents.toLocaleString()}</p>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-3">
                                <FaUsers className="text-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                                <p className="text-3xl font-bold text-green-600">${totalEarnings.toLocaleString()}</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-3">
                                <FaDollarSign className="text-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                                <p className="text-3xl font-bold text-yellow-600">{averageRating.toFixed(1)}</p>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl p-3">
                                <FaStar className="text-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                                <p className="text-3xl font-bold text-purple-600">{courses.length}</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-3">
                                <FaBookOpen className="text-2xl" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Controls Section */}
                <motion.div 
                    className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        
                        {/* Search Bar */}
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search your courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {['all', 'published', 'draft'].map((filter) => (
                                <motion.button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 ${
                                        activeFilter === filter
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                </motion.button>
                            ))}
                        </div>

                        {/* Create Course Button */}
                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlus />
                            Create New Course
                        </motion.button>
                    </div>
                </motion.div>

                {/* Courses Grid */}
                <AnimatePresence>
                    {filteredCourses.length > 0 ? (
                        <motion.div 
                            className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    layout
                                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Course Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                course.status === 'published' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white text-xl font-bold mb-2">{course.title}</h3>
                                            <p className="text-white/90 text-sm">{course.category}</p>
                                        </div>
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                                        
                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-2">
                                                <FaUserGraduate className="text-indigo-500" />
                                                <span className="text-sm text-gray-600">{course.students} students</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaStar className="text-yellow-500" />
                                                <span className="text-sm text-gray-600">{course.rating} ({course.reviews})</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaBookOpen className="text-purple-500" />
                                                <span className="text-sm text-gray-600">{course.lessons} lessons</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaChartLine className="text-green-500" />
                                                <span className="text-sm text-gray-600">${course.earnings.toFixed(0)}</span>
                                            </div>
                                        </div>

                                        {/* Price and Actions */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <span className="text-2xl font-bold text-indigo-600">${course.price}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <motion.button
                                                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    title="View Course"
                                                >
                                                    <FaEye className="text-gray-600" />
                                                </motion.button>
                                                <motion.button
                                                    className="p-2 bg-indigo-100 hover:bg-indigo-200 rounded-xl transition-colors duration-200"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    title="Edit Course"
                                                >
                                                    <FaEdit className="text-indigo-600" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="text-center py-16"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-8xl mb-6">📚</div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">No courses found</h3>
                            <p className="text-gray-500 mb-8">
                                {searchQuery ? 'Try adjusting your search terms' : 'Start creating your first course to inspire learners worldwide!'}
                            </p>
                            <motion.button
                                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPlus />
                                Create Your First Course
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default InstructorMyCourses;