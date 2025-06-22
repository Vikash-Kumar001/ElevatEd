import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
    Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
    SkipBack, SkipForward, Settings, Download, Share2,
    BookOpen, Clock, Users, Star, ChevronLeft, ChevronRight,
    Bookmark, Eye, ThumbsUp, MessageCircle, MoreVertical,
    Zap, Target, Award, Sparkles, PlayCircle, PauseCircle,
    RotateCcw, RotateCw, Monitor, Smartphone, Tablet
} from 'lucide-react';

const LecturePlayer = ({ 
    videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    title = "Advanced React Development Masterclass",
    instructor = "Dr. Sarah Johnson",
    duration = "1:24:30",
    enrolledStudents = "12,847",
    rating = 4.8,
    description = "Master the fundamentals with this comprehensive lecture covering advanced concepts and practical applications.",
    chapters = [
        { id: 1, title: "Introduction to Concepts", duration: "08:45", timestamp: "00:00" },
        { id: 2, title: "Core Principles", duration: "15:30", timestamp: "08:45" },
        { id: 3, title: "Practical Applications", duration: "22:15", timestamp: "24:15" },
        { id: 4, title: "Advanced Techniques", duration: "18:20", timestamp: "46:30" },
        { id: 5, title: "Case Studies", duration: "19:40", timestamp: "1:04:50" }
    ]
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(23);
    const [volume, setVolume] = useState(75);
    const [showControls, setShowControls] = useState(true);
    const [selectedChapter, setSelectedChapter] = useState(0);
    const [showChapters, setShowChapters] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [deviceView, setDeviceView] = useState('desktop');

    const playerRef = useRef(null);
    const progressRef = useRef(null);
    const controlsRef = useRef(null);
    const chaptersRef = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(playerRef, { margin: "-100px" });

    // Auto-hide controls
    useEffect(() => {
        if (showControls) {
            const timer = setTimeout(() => {
                if (isPlaying) setShowControls(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showControls, isPlaying]);

    // Responsive device detection
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) setDeviceView('mobile');
            else if (width < 1024) setDeviceView('tablet');
            else setDeviceView('desktop');
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Simulate progress update
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentTime(prev => prev + 1);
                setProgress(prev => prev < 100 ? prev + 0.01 : prev);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        setShowControls(true);
    };

    const handleProgressClick = (e) => {
        const rect = progressRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newProgress = (clickX / rect.width) * 100;
        setProgress(newProgress);
        setCurrentTime((newProgress / 100) * 5070); // 84:30 in seconds
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20"
                    animate={{
                        y: [-20, 20],
                        x: [-10, 10],
                        opacity: [0.3, 0.8],
                        scale: [0.8, 1.2]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-30"
                    animate={{
                        y: [-30, 30],
                        x: [-15, 15],
                        opacity: [0.2, 0.6],
                        scale: [0.6, 1.4]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-25"
                    animate={{
                        y: [-15, 15],
                        x: [-8, 8],
                        opacity: [0.25, 0.75],
                        scale: [0.9, 1.1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-20"
                    animate={{
                        y: [-25, 25],
                        x: [-12, 12],
                        opacity: [0.2, 0.7],
                        scale: [0.7, 1.3]
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </div>

            <motion.div
                ref={playerRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50"
            >
                {/* Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 p-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border-b border-slate-600/30"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                                >
                                    <PlayCircle className="w-5 h-5 text-white" />
                                </motion.div>
                                <h1 className="text-xl lg:text-2xl font-bold text-white truncate">{title}</h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                                <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {enrolledStudents} students
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    {rating}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`p-2 rounded-xl transition-all duration-200 ${
                                    isBookmarked 
                                        ? 'bg-yellow-500 text-white' 
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                            >
                                <Bookmark className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl transition-all duration-200"
                            >
                                <Share2 className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl transition-all duration-200"
                            >
                                <Download className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col xl:flex-row">
                    {/* Video Player */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="relative group"
                            onMouseEnter={() => setShowControls(true)}
                            onMouseLeave={() => !isPlaying && setShowControls(false)}
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video bg-black rounded-none overflow-hidden">
                                {/* Shimmer Loading Effect */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 opacity-20"
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%']
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: '200% 100%'
                                    }}
                                />
                                
                                <iframe
                                    src={videoUrl}
                                    title={title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />

                                {/* Overlay Controls */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: showControls ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center"
                                >
                                    {/* Center Play Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={togglePlay}
                                        animate={{
                                            scale: [1, 1.1],
                                            opacity: [0.7, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
                                    >
                                        {isPlaying ? (
                                            <PauseCircle className="w-10 h-10 text-white" />
                                        ) : (
                                            <PlayCircle className="w-10 h-10 text-white ml-1" />
                                        )}
                                    </motion.button>
                                </motion.div>

                                {/* Bottom Controls */}
                                <motion.div
                                    ref={controlsRef}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: showControls ? 0 : 20, opacity: showControls ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                                >
                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div
                                            ref={progressRef}
                                            onClick={handleProgressClick}
                                            className="w-full h-2 bg-white/20 rounded-full cursor-pointer group hover:h-3 transition-all duration-200"
                                        >
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                                                style={{ width: `${progress}%` }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Control Buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={togglePlay}
                                                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                                            >
                                                {isPlaying ? (
                                                    <Pause className="w-5 h-5 text-white" />
                                                ) : (
                                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                                )}
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                                            >
                                                <SkipBack className="w-4 h-4 text-white" />
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                                            >
                                                <SkipForward className="w-4 h-4 text-white" />
                                            </motion.button>

                                            <div className="flex items-center gap-2 ml-2">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => setIsMuted(!isMuted)}
                                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                                                >
                                                    {isMuted ? (
                                                        <VolumeX className="w-4 h-4 text-white" />
                                                    ) : (
                                                        <Volume2 className="w-4 h-4 text-white" />
                                                    )}
                                                </motion.button>

                                                <div className="w-20 h-1 bg-white/20 rounded-full">
                                                    <div 
                                                        className="h-full bg-white rounded-full" 
                                                        style={{ width: `${isMuted ? 0 : volume}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <span className="text-white text-sm ml-2">
                                                {formatTime(currentTime)} / {duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {/* Playback Speed */}
                                            <div className="relative">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => setShowSettings(!showSettings)}
                                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                                                >
                                                    <Settings className="w-4 h-4 text-white" />
                                                </motion.button>

                                                {showSettings && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="absolute bottom-full right-0 mb-2 bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-xl p-3 min-w-[120px]"
                                                    >
                                                        <div className="text-white text-sm font-medium mb-2">Playback Speed</div>
                                                        {speedOptions.map((speed) => (
                                                            <motion.button
                                                                key={speed}
                                                                whileHover={{ scale: 1.05 }}
                                                                onClick={() => {
                                                                    setPlaybackSpeed(speed);
                                                                    setShowSettings(false);
                                                                }}
                                                                className={`w-full text-left px-2 py-1 rounded text-sm transition-all duration-200 ${
                                                                    playbackSpeed === speed
                                                                        ? 'bg-blue-500 text-white'
                                                                        : 'text-slate-300 hover:bg-slate-700'
                                                                }`}
                                                            >
                                                                {speed}x
                                                            </motion.button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setIsFullscreen(!isFullscreen)}
                                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                                            >
                                                {isFullscreen ? (
                                                    <Minimize className="w-4 h-4 text-white" />
                                                ) : (
                                                    <Maximize className="w-4 h-4 text-white" />
                                                )}
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Instructor Info */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border-t border-slate-600/30"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            {instructor.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">{instructor}</h3>
                                        <p className="text-slate-400 text-sm">Course Instructor</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-200"
                                    >
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="hidden sm:inline">Like</span>
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-all duration-200"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span className="hidden sm:inline">Discuss</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar - Chapters */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="xl:w-96 bg-gradient-to-b from-slate-800/50 to-slate-700/50 backdrop-blur-xl border-l border-slate-600/30"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-semibold flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Course Content
                                </h3>
                                <span className="text-slate-400 text-sm">{chapters.length} chapters</span>
                            </div>

                            <div className="space-y-2">
                                {chapters.map((chapter, index) => (
                                    <motion.div
                                        key={chapter.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedChapter(index)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                            selectedChapter === index
                                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                                                : 'bg-slate-700/30 hover:bg-slate-600/40 border border-transparent'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                                                    selectedChapter === index
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-slate-600 text-slate-300'
                                                }`}>
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium text-sm">{chapter.title}</h4>
                                                    <p className="text-slate-400 text-xs">{chapter.timestamp}</p>
                                                </div>
                                            </div>
                                            <span className="text-slate-400 text-xs">{chapter.duration}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Device View Toggle */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-6 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
                            >
                                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                                    <Eye className="w-4 h-4" />
                                    Preview Mode
                                </h4>
                                <div className="flex gap-2">
                                    {[
                                        { icon: Monitor, label: 'Desktop', value: 'desktop' },
                                        { icon: Tablet, label: 'Tablet', value: 'tablet' },
                                        { icon: Smartphone, label: 'Mobile', value: 'mobile' }
                                    ].map((device) => (
                                        <motion.button
                                            key={device.value}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setDeviceView(device.value)}
                                            className={`flex-1 p-2 rounded-lg transition-all duration-200 ${
                                                deviceView === device.value
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                                            }`}
                                        >
                                            <device.icon className="w-4 h-4 mx-auto" />
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Progress Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-green-400" />
                                    <span className="text-green-400 font-medium text-sm">Progress</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 h-2 bg-green-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-green-600 font-semibold text-sm">{progress.toFixed(1)}%</span>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
                            >
                                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    About this Lecture
                                </h4>
                                <p className="text-slate-300 text-sm">{description}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LecturePlayer;