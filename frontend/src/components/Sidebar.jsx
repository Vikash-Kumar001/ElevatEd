import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    GraduationCap, BookOpen, Award, BarChart3, Users, Settings,
    ChevronRight, Menu, X, Home, Plus, Eye, Shield, User,
    Sparkles, Brain, Target, TrendingUp, FileText, Bell,
    Search, Moon, Sun, Zap, Globe, Heart, Star
} from 'lucide-react';

const Sidebar = ({ role, isOpen = true, onToggle, theme = 'light', currentPath = '/' }) => {
    const sidebarRef = useRef(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Anime.js animations for floating elements
        if (window.anime && sidebarRef.current) {
            window.anime({
                targets: '.floating-accent',
                translateY: [-10, 10],
                translateX: [-5, 5],
                rotate: [0, 360],
                scale: [0.8, 1.2],
                opacity: [0.3, 0.7],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(800)
            });

            window.anime({
                targets: '.pulse-dot',
                scale: [1, 1.3],
                opacity: [0.5, 1],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(300)
            });
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sidebarRef.current) {
                const rect = sidebarRef.current.getBoundingClientRect();
                setMousePosition({ 
                    x: e.clientX - rect.left, 
                    y: e.clientY - rect.top 
                });
            }
        };

        if (sidebarRef.current) {
            sidebarRef.current.addEventListener('mousemove', handleMouseMove);
            return () => {
                if (sidebarRef.current) {
                    sidebarRef.current.removeEventListener('mousemove', handleMouseMove);
                }
            };
        }
    }, []);

    const isActive = (path) => currentPath === path;

    const studentLinks = [
        { 
            to: '/student/dashboard', 
            label: 'Dashboard', 
            icon: Home, 
            gradient: 'from-blue-500 to-cyan-500',
            description: 'Overview & Analytics'
        },
        { 
            to: '/student/my-courses', 
            label: 'My Courses', 
            icon: BookOpen, 
            gradient: 'from-purple-500 to-pink-500',
            description: 'Enrolled Courses'
        },
        { 
            to: '/student/browse', 
            label: 'Browse Courses', 
            icon: Search, 
            gradient: 'from-green-500 to-emerald-500',
            description: 'Discover New Skills'
        },
        { 
            to: '/student/certificate', 
            label: 'Certificates', 
            icon: Award, 
            gradient: 'from-orange-500 to-red-500',
            description: 'Your Achievements'
        },
        { 
            to: '/student/progress', 
            label: 'Progress', 
            icon: TrendingUp, 
            gradient: 'from-violet-500 to-purple-500',
            description: 'Learning Analytics'
        },
    ];

    const instructorLinks = [
        { 
            to: '/instructor/dashboard', 
            label: 'Dashboard', 
            icon: BarChart3, 
            gradient: 'from-blue-500 to-cyan-500',
            description: 'Teaching Overview'
        },
        { 
            to: '/instructor/my-courses', 
            label: 'My Courses', 
            icon: BookOpen, 
            gradient: 'from-purple-500 to-pink-500',
            description: 'Course Management'
        },
        { 
            to: '/instructor/create-course', 
            label: 'Create Course', 
            icon: Plus, 
            gradient: 'from-green-500 to-emerald-500',
            description: 'New Course Content'
        },
        { 
            to: '/instructor/students', 
            label: 'Students', 
            icon: Users, 
            gradient: 'from-orange-500 to-red-500',
            description: 'Student Management'
        },
        { 
            to: '/instructor/analytics', 
            label: 'Analytics', 
            icon: Target, 
            gradient: 'from-violet-500 to-purple-500',
            description: 'Performance Insights'
        },
    ];

    const adminLinks = [
        { 
            to: '/admin/dashboard', 
            label: 'Admin Dashboard', 
            icon: Shield, 
            gradient: 'from-blue-500 to-cyan-500',
            description: 'System Overview'
        },
        { 
            to: '/admin/manage-users', 
            label: 'Manage Users', 
            icon: Users, 
            gradient: 'from-purple-500 to-pink-500',
            description: 'User Administration'
        },
        { 
            to: '/admin/manage-courses', 
            label: 'Manage Courses', 
            icon: BookOpen, 
            gradient: 'from-green-500 to-emerald-500',
            description: 'Course Oversight'
        },
        { 
            to: '/admin/reports', 
            label: 'Reports', 
            icon: FileText, 
            gradient: 'from-orange-500 to-red-500',
            description: 'System Reports'
        },
        { 
            to: '/admin/settings', 
            label: 'Settings', 
            icon: Settings, 
            gradient: 'from-violet-500 to-purple-500',
            description: 'System Configuration'
        },
    ];

    const getRoleInfo = (role) => {
        switch (role) {
            case 'student': 
                return { 
                    icon: GraduationCap, 
                    label: 'Student Portal',
                    gradient: 'from-blue-600 to-purple-600',
                    bgGradient: 'from-blue-50 to-purple-50'
                };
            case 'instructor': 
                return { 
                    icon: Brain, 
                    label: 'Instructor Hub',
                    gradient: 'from-purple-600 to-pink-600',
                    bgGradient: 'from-purple-50 to-pink-50'
                };
            case 'admin': 
                return { 
                    icon: Shield, 
                    label: 'Admin Panel',
                    gradient: 'from-red-600 to-orange-600',
                    bgGradient: 'from-red-50 to-orange-50'
                };
            default: 
                return { 
                    icon: User, 
                    label: 'EduMaster',
                    gradient: 'from-gray-600 to-gray-800',
                    bgGradient: 'from-gray-50 to-gray-100'
                };
        }
    };

    const links = role === 'student' ? studentLinks :
                 role === 'instructor' ? instructorLinks :
                 role === 'admin' ? adminLinks : [];

    const roleInfo = getRoleInfo(role);
    const RoleIcon = roleInfo.icon;

    const sidebarVariants = {
        open: { 
            width: isCollapsed ? '80px' : '320px',
            transition: { 
                duration: 0.3, 
                ease: "easeInOut" 
            }
        },
        closed: { 
            width: '0px',
            transition: { 
                duration: 0.3, 
                ease: "easeInOut" 
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -20 
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.02,
            x: 4,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={onToggle}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                ref={sidebarRef}
                variants={sidebarVariants}
                animate={isOpen ? "open" : "closed"}
                className={`fixed top-0 left-0 h-full bg-gradient-to-br ${roleInfo.bgGradient} backdrop-blur-xl border-r border-white/20 shadow-2xl z-50 overflow-hidden`}
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
                }}
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-accent absolute top-10 left-4 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
                    <div className="floating-accent absolute bottom-20 right-4 w-24 h-24 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-xl"></div>
                    <div className="pulse-dot absolute top-1/3 right-6 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="pulse-dot absolute bottom-1/3 left-6 w-1 h-1 bg-purple-400 rounded-full"></div>
                </div>

                {/* Dynamic cursor follower */}
                <motion.div
                    className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full pointer-events-none z-10"
                    animate={{
                        x: mousePosition.x - 8,
                        y: mousePosition.y - 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />

                <div className="relative z-20 h-full flex flex-col">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-6 border-b border-white/10"
                    >
                        <div className="flex items-center justify-between">
                            <motion.div 
                                className="flex items-center gap-3"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${roleInfo.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                    <RoleIcon className="w-6 h-6 text-white" />
                                </div>
                                <AnimatePresence>
                                    {!isCollapsed && (
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: 'auto' }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                                EduMaster
                                            </h1>
                                            <p className="text-sm text-gray-500 capitalize">
                                                {roleInfo.label}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Toggle Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 hidden md:block"
                            >
                                <motion.div
                                    animate={{ rotate: isCollapsed ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight className="w-4 h-4 text-gray-600" />
                                </motion.div>
                            </motion.button>

                            {/* Mobile Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onToggle}
                                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 md:hidden"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {links.map((link, index) => {
                            const LinkIcon = link.icon;
                            const active = isActive(link.to);
                            
                            return (
                                <motion.div
                                    key={link.to}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    onHoverStart={() => setHoveredItem(link.to)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                >
                                    <a
                                        href={link.to}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Handle navigation here - replace with your router logic
                                            console.log('Navigate to:', link.to);
                                        }}
                                        className={`
                                            group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300
                                            ${active 
                                                ? `bg-gradient-to-r ${link.gradient} text-white shadow-lg` 
                                                : 'hover:bg-white/10 text-gray-700'
                                            }
                                        `}
                                    >
                                        {/* Active indicator */}
                                        {active && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                                                initial={false}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            />
                                        )}

                                        {/* Icon */}
                                        <motion.div
                                            className={`
                                                w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                                                ${active 
                                                    ? 'bg-white/20' 
                                                    : `bg-gradient-to-r ${link.gradient} shadow-md`
                                                }
                                            `}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <LinkIcon className={`w-5 h-5 ${active ? 'text-white' : 'text-white'}`} />
                                        </motion.div>

                                        {/* Label and Description */}
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.div
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: 'auto' }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex-1 min-w-0"
                                                >
                                                    <p className={`font-semibold ${active ? 'text-white' : 'text-gray-900'}`}>
                                                        {link.label}
                                                    </p>
                                                    <p className={`text-sm ${active ? 'text-white/80' : 'text-gray-500'}`}>
                                                        {link.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Hover indicator */}
                                        <AnimatePresence>
                                            {hoveredItem === link.to && !active && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    className="absolute right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </a>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="p-6 border-t border-white/10"
                            >
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">Pro Features</p>
                                        <p className="text-xs text-gray-500">Unlock advanced tools</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;