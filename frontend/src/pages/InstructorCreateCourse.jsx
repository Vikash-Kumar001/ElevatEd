import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
    BookOpen, Upload, Image, Tag, Sparkles, 
    CheckCircle, ArrowRight, Camera, Palette, Code, 
    Brain, TrendingUp, Globe, Award, Users, Clock,
    Play, Star, Zap, Target, Shield, Rocket
} from 'lucide-react';
import Buttons from '../components/Buttons';

const InstructorCreateCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        level: 'beginner',
        duration: '',
        price: '',
        tags: ''
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const heroRef = useRef(null);
    const formRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (window.anime && heroRef.current) {
            window.anime({
                targets: '.floating-element',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.3, 0.7],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(600)
            });
            window.anime({
                targets: '.pulse-element',
                scale: [1, 1.2],
                opacity: [0.4, 0.8],
                duration: 2500,
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

    const categories = [
        { name: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
        { name: 'Design & UX', icon: Palette, color: 'from-purple-500 to-pink-500' },
        { name: 'Photography', icon: Camera, color: 'from-green-500 to-emerald-500' },
        { name: 'Data Science', icon: Brain, color: 'from-violet-500 to-purple-500' },
        { name: 'Marketing', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
        { name: 'Business', icon: Globe, color: 'from-indigo-500 to-blue-500' }
    ];

    const levels = [
        { value: 'beginner', label: 'Beginner', icon: Play, description: 'For those starting out' },
        { value: 'intermediate', label: 'Intermediate', icon: Target, description: 'For those with some experience' },
        { value: 'advanced', label: 'Advanced', icon: Rocket, description: 'For experienced learners' }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategorySelect = (category) => {
        setFormData({ ...formData, category: category });
    };

    const handleLevelSelect = (level) => {
        setFormData({ ...formData, level: level });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Course submitted:', formData);
        setIsSubmitting(false);
    };

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const getStepProgress = () => (currentStep / 3) * 100;

    // Features for "Why Teach With Us"
    const teachFeatures = [
        {
            icon: Award,
            title: "Global Recognition",
            description: "Get your courses in front of millions of learners worldwide.",
            gradient: "from-amber-500 to-orange-600",
            bgGradient: "from-amber-50 to-orange-50"
        },
        {
            icon: Users,
            title: "Vibrant Community",
            description: "Join a supportive network of instructors and education experts.",
            gradient: "from-blue-500 to-cyan-600",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            icon: Shield,
            title: "Secure Earnings",
            description: "Earn a sustainable income with transparent and timely payouts.",
            gradient: "from-red-500 to-pink-600",
            bgGradient: "from-red-50 to-pink-50"
        },
        {
            icon: Zap,
            title: "Powerful Tools",
            description: "Leverage advanced tools for course creation, analytics, and engagement.",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            icon: Star,
            title: "Inspire Learners",
            description: "Make a real impact by sharing your expertise and passion.",
            gradient: "from-indigo-500 to-blue-600",
            bgGradient: "from-indigo-50 to-blue-50"
        },
        {
            icon: Clock,
            title: "Flexible Schedule",
            description: "Teach at your own pace and on your own terms.",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        }
    ];

    return (
        <div className="bg-white overflow-hidden min-h-screen">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-element absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-element absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
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
            <section ref={heroRef} className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"
                />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8"
                        >
                            <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Create Your Masterpiece
                            </span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                Share Your
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Knowledge
                            </span>
                        </h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            Create engaging courses that inspire and educate millions of learners worldwide. 
                            Transform your expertise into a thriving online business.
                        </motion.p>
                    </motion.div>
                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="pulse-element absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="pulse-element absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                        <div className="pulse-element absolute bottom-1/3 left-1/3 w-4 h-4 bg-pink-400 rounded-full"></div>
                        <div className="pulse-element absolute bottom-1/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Progress Bar */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6 mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-600">Step {currentStep} of 3</span>
                        <span className="text-sm font-medium text-gray-600">{Math.round(getStepProgress())}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${getStepProgress()}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Form Section */}
            <section ref={formRef} className="relative py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.form 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl overflow-hidden"
                    >
                        {/* Step 1: Basic Information */}
                        {currentStep === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="p-8 md:p-12"
                            >
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                        Course Basics
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Enter an engaging course title"
                                            className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
                                        <textarea
                                            name="description"
                                            placeholder="Describe what students will learn and achieve"
                                            className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 h-32 resize-none"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (hours)</label>
                                            <input
                                                type="number"
                                                name="duration"
                                                placeholder="e.g., 10"
                                                className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Price ($)</label>
                                            <input
                                                type="number"
                                                name="price"
                                                placeholder="e.g., 99"
                                                className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                value={formData.price}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Category & Level */}
                        {currentStep === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="p-8 md:p-12"
                            >
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                                        <Tag className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                        Category & Level
                                    </h2>
                                </div>
                                <div className="space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-4">Select Category</label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {categories.map((category, index) => (
                                                <motion.div
                                                    key={category.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handleCategorySelect(category.name)}
                                                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                                                        formData.category === category.name
                                                            ? 'border-blue-500 bg-blue-50'
                                                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                                                        <category.icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <p className="text-sm font-medium text-center text-gray-900">{category.name}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-4">Course Level</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {levels.map((level, index) => (
                                                <motion.div
                                                    key={level.value}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleLevelSelect(level.value)}
                                                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                                                        formData.level === level.value
                                                            ? 'border-purple-500 bg-purple-50'
                                                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <level.icon className={`w-8 h-8 mb-3 ${
                                                        formData.level === level.value ? 'text-purple-600' : 'text-gray-600'
                                                    }`} />
                                                    <h3 className="font-semibold text-gray-900 mb-1">{level.label}</h3>
                                                    <p className="text-sm text-gray-600">{level.description}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Media & Tags */}
                        {currentStep === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="p-8 md:p-12"
                            >
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                                        <Image className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                        Media & Details
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Image URL</label>
                                        <div className="relative">
                                            <input
                                                type="url"
                                                name="image"
                                                placeholder="https://example.com/course-image.jpg"
                                                className="w-full px-4 py-4 pr-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                value={formData.image}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Upload className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tags (comma separated)</label>
                                        <input
                                            type="text"
                                            name="tags"
                                            placeholder="react, javascript, web development, frontend"
                                            className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                                            value={formData.tags}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                    {formData.image && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-gray-50 rounded-xl p-4"
                                        >
                                            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                                            <img
                                                src={formData.image}
                                                alt="Course preview"
                                                className="w-full h-48 object-cover rounded-lg"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Form Navigation */}
                        <div className="px-8 md:px-12 pb-8 md:pb-12">
                            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <div className="flex space-x-4">
                                    {currentStep > 1 && (
                                        <motion.button
                                            type="button"
                                            onClick={prevStep}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-300"
                                        >
                                            Previous
                                        </motion.button>
                                    )}
                                </div>
                                <div className="flex space-x-4">
                                    {currentStep < 3 ? (
                                        <motion.button
                                            type="button"
                                            onClick={nextStep}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                        >
                                            <span>Next Step</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                            className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    <span>Publishing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span>Publish Course</span>
                                                </>
                                            )}
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                            Why Teach With Us?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Join thousands of successful instructors and build your teaching empire
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teachFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className={`relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                                        >
                                            <feature.icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InstructorCreateCourse;