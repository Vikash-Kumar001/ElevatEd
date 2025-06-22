import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    Upload, Video, FileText, BookOpen, Play, CheckCircle, 
    AlertCircle, Cloud, Youtube, Sparkles, Rocket, 
    ArrowRight, Eye, Clock, Users, Star
} from 'lucide-react';
import Buttons from '../components/Buttons';

const InstructorUploadLecture = () => {
    const [formData, setFormData] = useState({
        courseId: '',
        title: '',
        videoUrl: '',
        description: '',
        duration: '',
        thumbnail: '',
        difficulty: 'beginner',
        tags: ''
    });

    const [dragActive, setDragActive] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const formRef = useRef(null);
    const headerRef = useRef(null);
    const isFormInView = useInView(formRef, { once: true, margin: "-50px" });
    const isHeaderInView = useInView(headerRef, { once: true });

    useEffect(() => {
        // Anime.js floating animation for background elements
        if (window.anime) {
            window.anime({
                targets: '.floating-upload-element',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.1, 0.3],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1000)
            });

            window.anime({
                targets: '.pulse-upload-element',
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFile = (file) => {
        console.log('File uploaded:', file);
        simulateUpload();
    };

    const simulateUpload = () => {
        setIsUploading(true);
        setUploadProgress(0);
        
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Lecture uploaded:', formData);
        simulateUpload();
    };

    const difficultyOptions = [
        { value: 'beginner', label: 'Beginner', color: 'from-green-500 to-emerald-500' },
        { value: 'intermediate', label: 'Intermediate', color: 'from-yellow-500 to-orange-500' },
        { value: 'advanced', label: 'Advanced', color: 'from-red-500 to-pink-500' },
        { value: 'expert', label: 'Expert', color: 'from-purple-500 to-indigo-500' }
    ];

    const stats = [
        { number: "2.5M+", label: "Students Reached", icon: Users },
        { number: "4.9", label: "Average Rating", icon: Star },
        { number: "95%", label: "Completion Rate", icon: CheckCircle }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-upload-element absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-upload-element absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-upload-element absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                
                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 8,
                        y: mousePosition.y - 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />

                {/* Floating particles */}
                <div className="pulse-upload-element absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="pulse-upload-element absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="pulse-upload-element absolute bottom-1/3 left-1/5 w-4 h-4 bg-pink-400 rounded-full"></div>
            </div>

            {/* Header Section */}
            <section ref={headerRef} className="relative pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8"
                        >
                            <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Instructor Dashboard
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                Upload New
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Lecture
                            </span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                        >
                            Share your knowledge with millions of learners worldwide. Create engaging content that transforms careers.
                        </motion.p>

                        {/* Stats */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                    className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                                >
                                    <stat.icon className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section ref={formRef} className="relative pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
                    >
                        {/* Progress Bar */}
                        {isUploading && (
                            <div className="relative">
                                <div className="h-2 bg-gray-200">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${uploadProgress}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-medium text-white">
                                        {uploadProgress}% Complete
                                    </span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <BookOpen className="w-4 h-4 inline mr-2" />
                                            Course ID
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="courseId"
                                                placeholder="Enter course identifier"
                                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                                                value={formData.courseId}
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                <CheckCircle className="w-5 h-5 text-green-500 opacity-0" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <FileText className="w-4 h-4 inline mr-2" />
                                            Lecture Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Enter an engaging lecture title"
                                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <Video className="w-4 h-4 inline mr-2" />
                                            Video Source
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="url"
                                                name="videoUrl"
                                                placeholder="https://youtube.com/watch?v=... or cloud storage URL"
                                                className="w-full px-4 py-4 pl-12 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                                                value={formData.videoUrl}
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                                {formData.videoUrl.includes('youtube') ? 
                                                    <Youtube className="w-5 h-5 text-red-500" /> : 
                                                    <Cloud className="w-5 h-5 text-blue-500" />
                                                }
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="grid grid-cols-2 gap-4"
                                    >
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <Clock className="w-4 h-4 inline mr-2" />
                                                Duration
                                            </label>
                                            <input
                                                type="text"
                                                name="duration"
                                                placeholder="e.g., 45 minutes"
                                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                                                value={formData.duration}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <Star className="w-4 h-4 inline mr-2" />
                                                Difficulty
                                            </label>
                                            <select
                                                name="difficulty"
                                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                                                value={formData.difficulty}
                                                onChange={handleChange}
                                            >
                                                {difficultyOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <FileText className="w-4 h-4 inline mr-2" />
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            placeholder="Describe what students will learn in this lecture..."
                                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 min-h-[120px] resize-none"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows="5"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <Upload className="w-4 h-4 inline mr-2" />
                                            Thumbnail Upload
                                        </label>
                                        <motion.div
                                            className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                                                dragActive 
                                                    ? 'border-blue-500 bg-blue-50' 
                                                    : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                                            }`}
                                            onDragEnter={handleDrag}
                                            onDragLeave={handleDrag}
                                            onDragOver={handleDrag}
                                            onDrop={handleDrop}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleFile(e.target.files[0])}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-sm font-medium text-gray-700 mb-2">
                                                Drop thumbnail here or click to browse
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Supports JPG, PNG (Max 5MB)
                                            </p>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Tags (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            name="tags"
                                            placeholder="javascript, web development, frontend"
                                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                                            value={formData.tags}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <motion.button
                                    type="submit"
                                    disabled={isUploading}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isUploading ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            <span>Uploading...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Rocket className="w-5 h-5" />
                                            <span>Upload Lecture</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                        </>
                                    )}
                                </motion.button>

                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <Eye className="w-5 h-5" />
                                    <span>Preview</span>
                                </motion.button>
                            </motion.div>

                            {/* Success Message */}
                            {uploadProgress === 100 && !isUploading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-8 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <div>
                                        <p className="font-semibold text-green-800">Lecture uploaded successfully!</p>
                                        <p className="text-sm text-green-600">Your content is now live and available to students.</p>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default InstructorUploadLecture;