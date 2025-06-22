import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Award, CheckCircle, Star, BookOpen, Download, Share2 } from 'lucide-react';

const CourseDetails = () => {
    const courseId = "1"; // Mock course ID
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        // Replace with real API call
        const mockData = {
            id: courseId,
            title: 'Full Stack Web Development Masterclass',
            description: 'Master modern web development with this comprehensive course covering frontend, backend, and deployment strategies. Build real-world projects and gain industry-ready skills.',
            instructor: 'John Doe',
            instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            rating: 4.8,
            students: 12847,
            duration: '42 hours',
            level: 'Beginner to Advanced',
            price: 99,
            originalPrice: 199,
            content: [
                'HTML5 & CSS3 Modern Techniques',
                'JavaScript ES6+ & Advanced Concepts',
                'React.js with Hooks & Context',
                'Node.js & Express.js Backend',
                'MongoDB & Database Design',
                'RESTful APIs & GraphQL',
                'Authentication & Security',
                'Deployment & DevOps Basics'
            ],
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
            features: ['Lifetime Access', 'Certificate of Completion', '24/7 Support', 'Mobile & Desktop'],
            prerequisites: ['Basic computer skills', 'No prior coding experience required']
        };
        setCourse(mockData);
    }, [courseId]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    if (!course) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ 
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ 
                        x: [0, -150, 0],
                        y: [0, 100, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-4 py-8 max-w-6xl"
            >
                {/* Header Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {course.title}
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {course.description}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Course Image */}
                        <motion.div
                            variants={cardVariants}
                            className="relative group overflow-hidden rounded-2xl"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Course Stats */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                                        <span className="text-white font-semibold">{course.rating}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Rating</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <Users className="w-5 h-5 text-blue-400 mr-1" />
                                        <span className="text-white font-semibold">{course.students.toLocaleString()}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Students</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <Clock className="w-5 h-5 text-green-400 mr-1" />
                                        <span className="text-white font-semibold">{course.duration}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Duration</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <Award className="w-5 h-5 text-purple-400 mr-1" />
                                        <span className="text-white font-semibold">{course.level}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Level</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Course Content */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
                                What You'll Learn
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {course.content.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-200">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Instructor */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Meet Your Instructor</h3>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={course.instructorImage}
                                    alt={course.instructor}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                                />
                                <div>
                                    <h4 className="text-xl font-semibold text-white">{course.instructor}</h4>
                                    <p className="text-gray-300">Senior Full Stack Developer</p>
                                    <div className="flex items-center mt-1">
                                        <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                                        <span className="text-sm text-gray-300">4.9 • 50k+ students</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 sticky top-8"
                        >
                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <span className="text-3xl font-bold text-white">${course.price}</span>
                                    <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                                </div>
                                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                                    50% OFF Limited Time
                                </div>
                            </div>

                            {/* Enroll Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsEnrolled(!isEnrolled)}
                                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 mb-4 ${
                                    isEnrolled
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                                } shadow-lg hover:shadow-xl`}
                            >
                                {isEnrolled ? 'Enrolled ✓' : 'Enroll Now'}
                            </motion.button>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center space-x-2 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                                >
                                    <Download className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm">Download</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center space-x-2 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                                >
                                    <Share2 className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm">Share</span>
                                </motion.button>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                <h4 className="text-white font-semibold">This course includes:</h4>
                                {course.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Prerequisites */}
                            <div>
                                <h4 className="text-white font-semibold mb-3">Prerequisites:</h4>
                                {course.prerequisites.map((prereq, index) => (
                                    <div key={index} className="flex items-start space-x-3 mb-2">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{prereq}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CourseDetails;