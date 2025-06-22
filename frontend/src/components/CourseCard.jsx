import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    Play, Clock, Users, Star, BookOpen, Award, ChevronRight, 
    Heart, Share2, Download, TrendingUp, Zap, CheckCircle2,
    BarChart3, Globe, Shield, Sparkles
} from 'lucide-react';

const CourseCard = ({ course, index = 0 }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    useEffect(() => {
        // Anime.js hover animations
        if (window.anime && cardRef.current && isHovered) {
            window.anime({
                targets: cardRef.current.querySelector('.floating-badge'),
                translateY: [-5, 5],
                rotate: [-2, 2],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine'
            });

            window.anime({
                targets: cardRef.current.querySelectorAll('.skill-tag'),
                scale: [1, 1.05],
                duration: 800,
                delay: window.anime.stagger(100),
                easing: 'easeOutElastic(1, .6)'
            });
        }
    }, [isHovered]);

    // Mock course data if not provided
    const defaultCourse = {
        id: 1,
        title: "Advanced React Development & Modern Web Architecture",
        description: "Master React 18, Next.js 14, TypeScript, and modern web development practices with real-world projects and industry best practices.",
        instructor: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        rating: 4.9,
        students: 15420,
        duration: "32 hours",
        lectures: 156,
        level: "Advanced",
        price: 89.99,
        originalPrice: 199.99,
        category: "Web Development",
        skills: ["React", "TypeScript", "Next.js", "Redux"],
        completion: 94,
        certified: true,
        bestseller: true,
        updated: "2024",
        language: "English"
    };

    const courseData = course || defaultCourse;
    const discount = Math.round((1 - courseData.price / courseData.originalPrice) * 100);

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    const hoverVariants = {
        rest: { 
            y: 0,
            scale: 1,
            rotateY: 0,
            transition: { duration: 0.3 }
        },
        hover: { 
            y: -10,
            scale: 1.02,
            rotateY: 2,
            transition: { duration: 0.3 }
        }
    };

    const imageVariants = {
        rest: { scale: 1 },
        hover: { 
            scale: 1.1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative perspective-1000"
        >
            <motion.div
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                    <motion.img
                        variants={imageVariants}
                        src={courseData.image}
                        alt={courseData.title}
                        className="w-full h-48 sm:h-52 lg:h-56 object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {courseData.bestseller && (
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                className="floating-badge px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1"
                            >
                                <Sparkles className="w-3 h-3" />
                                <span>BESTSELLER</span>
                            </motion.div>
                        )}
                        {courseData.certified && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                                className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center space-x-1"
                            >
                                <Award className="w-3 h-3" />
                                <span>CERTIFIED</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Top Right Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsLiked(!isLiked)}
                            className={`w-10 h-10 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 ${
                                isLiked 
                                    ? 'bg-red-500/90 text-white' 
                                    : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                        >
                            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                        >
                            <Share2 className="w-4 h-4" />
                        </motion.button>
                    </div>

                    {/* Play Button Overlay */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group/play"
                        >
                            <Play className="w-8 h-8 text-blue-600 ml-1 group-hover/play:text-blue-700 transition-colors" />
                        </motion.button>
                    </motion.div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{courseData.duration}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                    {/* Category & Level */}
                    <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
                            {courseData.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {courseData.level}
                        </span>
                    </div>

                    {/* Title */}
                    <motion.h2 
                        className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-900 transition-colors duration-300 line-clamp-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {courseData.title}
                    </motion.h2>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {courseData.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                        {courseData.skills?.slice(0, 3).map((skill, idx) => (
                            <span
                                key={skill}
                                className="skill-tag px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                        {courseData.skills?.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                                +{courseData.skills.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {courseData.instructor.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{courseData.instructor}</p>
                            <p className="text-xs text-gray-500">Expert Instructor</p>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="font-semibold text-gray-900">{courseData.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{courseData.students?.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <BookOpen className="w-4 h-4" />
                                <span>{courseData.lectures} lectures</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Course Completion</span>
                            <span className="font-semibold text-green-600">{courseData.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${courseData.completion}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4">
                        <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-gray-900">
                                    ${courseData.price}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                    ${courseData.originalPrice}
                                </span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                    {discount}% OFF
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">Limited time offer</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = `/course/${courseData.id}`}
                            className="group/btn px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                        >
                            <span>Enroll Now</span>
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </motion.button>
                    </div>

                    {/* Additional Features */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <Globe className="w-3 h-3" />
                                <span>{courseData.language}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Shield className="w-3 h-3" />
                                <span>Lifetime Access</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 text-green-600">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Updated {courseData.updated}</span>
                        </div>
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
        </motion.div>
    );
};

export default CourseCard;