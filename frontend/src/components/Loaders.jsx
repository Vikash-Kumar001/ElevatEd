import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Sparkles, Brain, Rocket, GraduationCap, Trophy, 
    Lightbulb, Zap, Star, BookOpen, Globe 
} from 'lucide-react';

// Enhanced Spinner Component
export const Spinner = ({ size = 'md', color = 'indigo' }) => {
    const sizeClasses = {
        sm: 'h-6 w-6',
        md: 'h-10 w-10',
        lg: 'h-16 w-16',
        xl: 'h-24 w-24'
    };

    const colorClasses = {
        indigo: 'border-indigo-500',
        blue: 'border-blue-500',
        purple: 'border-purple-500',
        pink: 'border-pink-500',
        gradient: 'border-transparent'
    };

    return (
        <div className="flex justify-center items-center h-40">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
            >
                {color === 'gradient' ? (
                    <div className={`${sizeClasses[size]} relative`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin"></div>
                        <div className={`${sizeClasses[size]} bg-white rounded-full absolute inset-1`}></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        />
                    </div>
                ) : (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className={`animate-spin rounded-full ${sizeClasses[size]} border-t-2 border-b-2 ${colorClasses[color]} relative`}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
                    </motion.div>
                )}
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                            animate={{
                                x: [0, Math.cos(i * 60) * 30, 0],
                                y: [0, Math.sin(i * 60) * 30, 0],
                                scale: [0, 1, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

// Enhanced Skeleton Card Component
export const SkeletonCard = ({ variant = 'course' }) => {
    const pulseRef = useRef(null);

    useEffect(() => {
        if (window.anime && pulseRef.current) {
            window.anime({
                targets: pulseRef.current.querySelectorAll('.skeleton-shimmer'),
                translateX: [-100, 100],
                opacity: [0, 0.6, 0],
                duration: 1500,
                easing: 'easeInOutQuad',
                loop: true,
                delay: window.anime.stagger(200)
            });
        }
    }, []);

    const courseVariant = (
        <motion.div
            ref={pulseRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image skeleton */}
            <div className="relative h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-6 rounded-2xl overflow-hidden">
                <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl opacity-30"
                />
            </div>

            {/* Content skeletons */}
            <div className="space-y-4">
                {/* Title */}
                <div className="relative h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl overflow-hidden">
                    <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                </div>
                
                {/* Subtitle */}
                <div className="relative h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4 overflow-hidden">
                    <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                </div>
                
                {/* Rating skeleton */}
                <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                            className="w-4 h-4 bg-gray-300 rounded-full"
                        />
                    ))}
                    <div className="relative h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-16 overflow-hidden">
                        <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                    </div>
                </div>

                {/* Price skeleton */}
                <div className="flex items-center justify-between">
                    <div className="relative h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl w-24 overflow-hidden">
                        <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                    </div>
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-16 overflow-hidden">
                        <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
        </motion.div>
    );

    const listVariant = (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-md border border-gray-100"
        >
            <div className="relative w-16 h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl overflow-hidden">
                <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
            </div>
            <div className="flex-1 space-y-2">
                <div className="relative h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg overflow-hidden">
                    <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                </div>
                <div className="relative h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-2/3 overflow-hidden">
                    <div className="skeleton-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"></div>
                </div>
            </div>
        </motion.div>
    );

    return variant === 'course' ? courseVariant : listVariant;
};

// Full Page Loader Component
export const PageLoader = ({ 
    message = "Loading amazing content...", 
    progress = null,
    showProgress = false 
}) => {
    const [loadingText, setLoadingText] = useState('');
    const [currentIcon, setCurrentIcon] = useState(0);
    const loaderRef = useRef(null);
    
    const icons = [Brain, Rocket, GraduationCap, Trophy, Lightbulb, Zap, Star, BookOpen, Globe];
    const loadingMessages = [
        "Preparing your learning journey...",
        "Loading interactive content...",
        "Setting up your personalized experience...",
        "Almost ready to explore...",
        "Finalizing course materials..."
    ];

    useEffect(() => {
        // Animate loading text typing effect
        let currentIndex = 0;
        const typeText = () => {
            if (currentIndex < message.length) {
                setLoadingText(message.substring(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeText, 50);
            }
        };
        typeText();

        // Cycle through icons
        const iconInterval = setInterval(() => {
            setCurrentIcon(prev => (prev + 1) % icons.length);
        }, 1000);

        // Anime.js animations
        if (window.anime && loaderRef.current) {
            // Floating particles animation
            window.anime({
                targets: '.floating-particle',
                translateY: [-20, 20],
                translateX: [-10, 10],
                rotate: [0, 360],
                scale: [0.8, 1.2],
                opacity: [0.3, 0.8],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(400)
            });

            // Loading bar animation
            window.anime({
                targets: '.loading-bar-fill',
                width: ['0%', '100%'],
                duration: 2000,
                easing: 'easeInOutQuad',
                loop: true,
                direction: 'alternate'
            });
        }

        return () => {
            clearInterval(iconInterval);
        };
    }, [message]);

    const CurrentIcon = icons[currentIcon];

    return (
        <motion.div
            ref={loaderRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360] 
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0] 
                    }}
                    transition={{ 
                        duration: 15, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-200/20 via-pink-200/20 to-blue-200/20 rounded-full blur-3xl"
                />

                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="floating-particle absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Main loader content */}
            <div className="relative z-10 text-center max-w-lg mx-auto px-6">
                {/* Logo/Icon area */}
                <motion.div
                    key={currentIcon}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                            <CurrentIcon className="w-12 h-12 text-white" />
                        </div>
                        
                        {/* Orbiting elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <Sparkles className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 text-yellow-400" />
                            <Star className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 text-blue-400" />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
                            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Loading text */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4"
                >
                    EduMaster
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-gray-600 mb-8 min-h-[1.5rem]"
                >
                    {loadingText}
                </motion.p>

                {/* Enhanced spinner */}
                <div className="mb-8">
                    <Spinner size="lg" color="gradient" />
                </div>

                {/* Progress bar */}
                {showProgress && (
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="w-full max-w-md mx-auto"
                    >
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Loading</span>
                            <span>{progress ? `${progress}%` : ''}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: progress ? `${progress}%` : '100%' }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full loading-bar-fill"
                            />
                        </div>
                    </motion.div>
                )}

                {/* Loading dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center space-x-2 mt-6"
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

// Loading Grid Component
export const LoadingGrid = ({ count = 6, variant = 'course' }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(count)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <SkeletonCard variant={variant} />
                </motion.div>
            ))}
        </div>
    );
};

// Loading List Component
export const LoadingList = ({ count = 5 }) => {
    return (
        <div className="space-y-4">
            {[...Array(count)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <SkeletonCard variant="list" />
                </motion.div>
            ))}
        </div>
    );
};

export default {
    Spinner,
    SkeletonCard,
    PageLoader,
    LoadingGrid,
    LoadingList
};