import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
    Award, Download, Calendar, CheckCircle, Star, Trophy, 
    Shield, Crown, Sparkles, ArrowDown, Filter, Search,
    Medal, GraduationCap, BookOpen, Clock, Eye, Share2
} from 'lucide-react';

const StudentCertificate = () => {
    const [certificates, setCertificates] = useState([]);
    const [filteredCertificates, setFilteredCertificates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const heroRef = useRef(null);
    const certificatesRef = useRef(null);
    const statsRef = useRef(null);
    
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
    const isCertificatesInView = useInView(certificatesRef, { once: true, margin: "-50px" });

    useEffect(() => {
        setCertificates([
            {
                id: 1,
                course: 'JavaScript for Beginners',
                instructor: 'John Smith',
                date: '2025-06-15',
                completionTime: '4 weeks',
                score: 95,
                level: 'Beginner',
                category: 'Programming',
                skills: ['JavaScript', 'DOM Manipulation', 'ES6+'],
                downloadUrl: '/certificates/js-beginners.pdf',
                verified: true,
                badge: 'Excellence'
            },
            {
                id: 2,
                course: 'React Mastery',
                instructor: 'Sarah Johnson',
                date: '2025-06-19',
                completionTime: '6 weeks',
                score: 98,
                level: 'Advanced',
                category: 'Frontend',
                skills: ['React', 'Redux', 'Hooks', 'Context API'],
                downloadUrl: '/certificates/react-mastery.pdf',
                verified: true,
                badge: 'Master'
            },
            {
                id: 3,
                course: 'Python Data Science',
                instructor: 'Michael Chen',
                date: '2025-05-28',
                completionTime: '8 weeks',
                score: 92,
                level: 'Intermediate',
                category: 'Data Science',
                skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
                downloadUrl: '/certificates/python-ds.pdf',
                verified: true,
                badge: 'Professional'
            },
            {
                id: 4,
                course: 'UI/UX Design Fundamentals',
                instructor: 'Emily Davis',
                date: '2025-05-10',
                completionTime: '5 weeks',
                score: 89,
                level: 'Beginner',
                category: 'Design',
                skills: ['Figma', 'User Research', 'Prototyping'],
                downloadUrl: '/certificates/ux-design.pdf',
                verified: true,
                badge: 'Creative'
            }
        ]);
    }, []);

    useEffect(() => {
        let filtered = certificates;
        
        if (selectedFilter !== 'all') {
            filtered = filtered.filter(cert => cert.category.toLowerCase() === selectedFilter);
        }
        
        if (searchTerm) {
            filtered = filtered.filter(cert => 
                cert.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        
        setFilteredCertificates(filtered);
    }, [certificates, searchTerm, selectedFilter]);

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && heroRef.current) {
            window.anime({
                targets: '.floating-cert',
                translateY: [-20, 20],
                rotate: [0, 360],
                opacity: [0.3, 0.7],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1000)
            });

            window.anime({
                targets: '.pulse-badge',
                scale: [1, 1.2],
                opacity: [0.6, 1],
                duration: 2500,
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

    const getBadgeColor = (badge) => {
        const colors = {
            'Excellence': 'from-yellow-400 to-orange-500',
            'Master': 'from-purple-500 to-pink-600',
            'Professional': 'from-blue-500 to-cyan-600',
            'Creative': 'from-green-500 to-emerald-600'
        };
        return colors[badge] || 'from-gray-400 to-gray-600';
    };

    const getBadgeIcon = (badge) => {
        const icons = {
            'Excellence': Trophy,
            'Master': Crown,
            'Professional': Shield,
            'Creative': Star
        };
        return icons[badge] || Award;
    };

    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'text-green-600 bg-green-50',
            'Intermediate': 'text-blue-600 bg-blue-50',
            'Advanced': 'text-purple-600 bg-purple-50'
        };
        return colors[level] || 'text-gray-600 bg-gray-50';
    };

    const stats = [
        { 
            number: certificates.length, 
            label: "Certificates Earned", 
            icon: Award, 
            gradient: "from-blue-500 to-cyan-500" 
        },
        { 
            number: Math.round(certificates.reduce((acc, cert) => acc + cert.score, 0) / certificates.length), 
            label: "Average Score", 
            icon: Star, 
            gradient: "from-yellow-500 to-orange-500" 
        },
        { 
            number: certificates.filter(cert => cert.verified).length, 
            label: "Verified Certificates", 
            icon: Shield, 
            gradient: "from-green-500 to-emerald-500" 
        },
        { 
            number: new Set(certificates.map(cert => cert.category)).size, 
            label: "Skill Categories", 
            icon: BookOpen, 
            gradient: "from-purple-500 to-pink-500" 
        }
    ];

    const filterOptions = [
        { value: 'all', label: 'All Certificates' },
        { value: 'programming', label: 'Programming' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'data science', label: 'Data Science' },
        { value: 'design', label: 'Design' }
    ];

    return (
        <div className="bg-white overflow-hidden min-h-screen">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-cert absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-cert absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-cert absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                <div className="floating-cert absolute bottom-40 right-1/3 w-56 h-56 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
                
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
            <section ref={heroRef} className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
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
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8"
                        >
                            <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Your Learning Achievements
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                My
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Certificates
                            </span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Showcase your learning journey and professional achievements with verified certificates
                        </motion.p>
                    </motion.div>

                    {/* Floating Badge Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="pulse-badge absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="pulse-badge absolute top-1/3 right-1/4 w-4 h-4 bg-purple-400 rounded-full"></div>
                        <div className="pulse-badge absolute bottom-1/3 left-1/3 w-5 h-5 bg-pink-400 rounded-full"></div>
                        <div className="pulse-badge absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-400 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                                >
                                    {typeof stat.number === 'number' && stat.label.includes('Score') ? `${stat.number}%` : stat.number}
                                </motion.h3>
                                <p className="text-blue-100 font-medium text-sm md:text-base">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col lg:flex-row gap-6 items-center justify-between"
                    >
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search certificates..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        {/* Filter Dropdown */}
                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                                value={selectedFilter}
                                onChange={(e) => setSelectedFilter(e.target.value)}
                                className="pl-12 pr-8 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                            >
                                {filterOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certificates Grid */}
            <section ref={certificatesRef} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCertificates.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No certificates found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredCertificates.map((certificate, index) => {
                                const BadgeIcon = getBadgeIcon(certificate.badge);
                                return (
                                    <motion.div
                                        key={certificate.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={isCertificatesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                        className="group relative"
                                    >
                                        <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                            {/* Background Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            
                                            {/* Floating Decoration */}
                                            <motion.div 
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
                                            ></motion.div>

                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-3 mb-2">
                                                            <motion.div
                                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                                transition={{ duration: 0.5 }}
                                                                className={`w-12 h-12 bg-gradient-to-r ${getBadgeColor(certificate.badge)} rounded-2xl flex items-center justify-center shadow-lg`}
                                                            >
                                                                <BadgeIcon className="w-6 h-6 text-white" />
                                                            </motion.div>
                                                            <div>
                                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(certificate.level)}`}>
                                                                    {certificate.level}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                            {certificate.course}
                                                        </h3>
                                                        <p className="text-gray-600 mb-4">
                                                            Instructor: <span className="font-medium">{certificate.instructor}</span>
                                                        </p>
                                                    </div>
                                                    
                                                    {certificate.verified && (
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                                            className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                                                        >
                                                            <CheckCircle className="w-3 h-3" />
                                                            <span>Verified</span>
                                                        </motion.div>
                                                    )}
                                                </div>

                                                {/* Score and Details */}
                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl">
                                                        <div className="flex items-center space-x-2 mb-1">
                                                            <Star className="w-4 h-4 text-yellow-500" />
                                                            <span className="text-sm font-medium text-gray-600">Score</span>
                                                        </div>
                                                        <p className="text-2xl font-bold text-gray-900">{certificate.score}%</p>
                                                    </div>
                                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl">
                                                        <div className="flex items-center space-x-2 mb-1">
                                                            <Clock className="w-4 h-4 text-purple-500" />
                                                            <span className="text-sm font-medium text-gray-600">Duration</span>
                                                        </div>
                                                        <p className="text-sm font-bold text-gray-900">{certificate.completionTime}</p>
                                                    </div>
                                                </div>

                                                {/* Skills Tags */}
                                                <div className="mb-6">
                                                    <p className="text-sm font-medium text-gray-600 mb-3">Skills Mastered:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {certificate.skills.map((skill, skillIndex) => (
                                                            <motion.span
                                                                key={skill}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                                                                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200"
                                                            >
                                                                {skill}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>Completed {certificate.date}</span>
                                                    </div>
                                                    
                                                    <div className="flex items-center space-x-3">
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                            <span className="text-sm font-medium">Preview</span>
                                                        </motion.button>
                                                        
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
                                                        >
                                                            <Share2 className="w-4 h-4" />
                                                            <span className="text-sm font-medium">Share</span>
                                                        </motion.button>
                                                        
                                                        <motion.a
                                                            href={certificate.downloadUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="group flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                                        >
                                                            <Download className="w-4 h-4 group-hover:animate-bounce" />
                                                            <span>Download</span>
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Achievement Summary Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-8">
                            <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Keep Learning & Growing
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                            Your Learning Journey Continues
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Every certificate represents hours of dedication and new skills mastered. 
                            Keep building your expertise and unlocking new opportunities.
                        </p>
                        
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <BookOpen className="w-5 h-5" />
                            <span>Explore More Courses</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StudentCertificate;