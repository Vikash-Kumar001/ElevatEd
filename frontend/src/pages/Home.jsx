import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
    Play, Users, Award, BookOpen, Star, ArrowRight, CheckCircle, Globe,
    Zap, Target, TrendingUp, Shield, Clock, Sparkles, Brain, Rocket,
    GraduationCap, Code, Palette, Camera, BarChart3, Heart
} from 'lucide-react';
import Buttons from '../components/Buttons';

const Home = () => {
    const heroRef = useRef(null);
    const statsRef = useRef(null);
    const featuresRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
    const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && heroRef.current) {
            window.anime({
                targets: '.floating-element',
                translateY: [-30, 30],
                rotate: [0, 360],
                opacity: [0.2, 0.6],
                duration: 6000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(800)
            });

            window.anime({
                targets: '.pulse-element',
                scale: [1, 1.1],
                opacity: [0.5, 0.8],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(400)
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
        { number: "50K+", label: "Active Students", icon: Users, gradient: "from-blue-500 to-cyan-500" },
        { number: "1,200+", label: "Expert Instructors", icon: GraduationCap, gradient: "from-purple-500 to-pink-500" },
        { number: "5,000+", label: "Courses Available", icon: BookOpen, gradient: "from-green-500 to-emerald-500" },
        { number: "98%", label: "Satisfaction Rate", icon: Star, gradient: "from-orange-500 to-red-500" }
    ];

    const features = [
        {
            icon: Brain,
            title: "AI-Powered Learning",
            description: "Personalized learning paths adapted to your pace and style using advanced AI algorithms.",
            gradient: "from-violet-500 to-purple-600",
            bgGradient: "from-violet-50 to-purple-50"
        },
        {
            icon: Globe,
            title: "Global Community",
            description: "Connect with learners and experts worldwide in our vibrant learning ecosystem.",
            gradient: "from-blue-500 to-cyan-600",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            icon: Award,
            title: "Industry Certifications",
            description: "Earn recognized certificates that boost your career prospects and professional credibility.",
            gradient: "from-amber-500 to-orange-600",
            bgGradient: "from-amber-50 to-orange-50"
        },
        {
            icon: Zap,
            title: "Interactive Learning",
            description: "Engage with immersive content, real-time feedback, and hands-on projects.",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            icon: Shield,
            title: "Lifetime Access",
            description: "Once enrolled, access your courses anytime, anywhere, with lifetime updates.",
            gradient: "from-red-500 to-pink-600",
            bgGradient: "from-red-50 to-pink-50"
        },
        {
            icon: Target,
            title: "Skill-Based Tracks",
            description: "Follow structured learning paths designed to master specific skills and technologies.",
            gradient: "from-indigo-500 to-blue-600",
            bgGradient: "from-indigo-50 to-blue-50"
        }
    ];

    const categories = [
        { name: "Web Development", icon: Code, count: "1,200+ courses", color: "from-blue-500 to-cyan-500" },
        { name: "Design & UX", icon: Palette, count: "800+ courses", color: "from-purple-500 to-pink-500" },
        { name: "Photography", icon: Camera, count: "650+ courses", color: "from-green-500 to-emerald-500" },
        { name: "Business", icon: BarChart3, count: "950+ courses", color: "from-orange-500 to-red-500" },
        { name: "Data Science", icon: Brain, count: "750+ courses", color: "from-violet-500 to-purple-500" },
        { name: "Marketing", icon: TrendingUp, count: "600+ courses", color: "from-pink-500 to-rose-500" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Full Stack Developer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=150&h=150&fit=crop&crop=face",
            content: "ElavatEd transformed my career. The courses are comprehensive and the instructors are world-class.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "UX Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            content: "The AI-powered learning recommendations helped me discover skills I didn't even know I needed.",
            rating: 5
        },
        {
            name: "Emily Davis",
            role: "Data Scientist",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            content: "Outstanding platform with practical, hands-on projects that directly apply to real-world scenarios.",
            rating: 5
        }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
                <div className="floating-element absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-40 right-1/3 w-56 h-56 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
                
                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 12,
                        y: mousePosition.y - 12,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8"
                        >
                            <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                #1 Learning Platform Worldwide
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                Learn Without
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Limits
                            </span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                        >
                            Unlock your potential with our AI-powered learning platform. Join millions of learners 
                            and transform your career with industry-leading courses.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <Link to="/explore">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                >
                                    <span>Explore Courses</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                </motion.button>
                            </Link>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center space-x-3 px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900">Watch Demo</p>
                                    <p className="text-sm text-gray-500">See how it works</p>
                                </div>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="pulse-element absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="pulse-element absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full"></div>
                        <div className="pulse-element absolute bottom-1/3 left-1/3 w-5 h-5 bg-pink-400 rounded-full"></div>
                        <div className="pulse-element absolute bottom-1/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-4 shadow-lg`}
                                >
                                    <stat.icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <motion.h3 
                                    initial={{ scale: 0 }}
                                    animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                                >
                                    {stat.number}
                                </motion.h3>
                                <p className="text-blue-100 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                            Why Choose ElevatEd?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the future of learning with cutting-edge features designed for modern learners
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                <div className={`relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                                        >
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
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

            {/* Categories Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                            Popular Categories
                        </h2>
                        <p className="text-xl text-gray-600">
                            Discover courses across various domains and skill levels
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                                    <p className="text-sm text-gray-500">{category.count}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                            What Our Students Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands of satisfied learners who transformed their careers
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
                            <Rocket className="w-5 h-5 text-white mr-2" />
                            <span className="text-white font-medium">Start Your Teaching Journey</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Become an Instructor
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Share your expertise with millions of learners worldwide. Create engaging courses and build a sustainable income stream.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/instructor/create-course">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                >
                                    <span>Start Teaching</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </div>

                        <div className="flex items-center justify-center space-x-8 mt-12 text-white/80">
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5" />
                                <span>Trusted by 50K+ instructors</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>Easy course creation</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;