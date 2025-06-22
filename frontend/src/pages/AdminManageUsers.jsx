import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
    Users, Search, Filter, Download, UserPlus, MoreVertical, 
    Edit3, Trash2, Shield, Crown, User, Mail, Calendar,
    Phone, MapPin, Star, TrendingUp, Activity, Eye,
    CheckCircle, XCircle, Clock, AlertTriangle, Zap,
    BookOpen, Award, Globe, Settings, RefreshCw
} from 'lucide-react';

const AdminManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const headerRef = useRef(null);
    const statsRef = useRef(null);
    const tableRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true });
    const isStatsInView = useInView(statsRef, { once: true });
    const isTableInView = useInView(tableRef, { once: true });

    useEffect(() => {
        // Simulate loading and data fetching
        setIsLoading(true);
        setTimeout(() => {
            setUsers([
                {
                    id: 1,
                    name: 'Sarah Johnson',
                    email: 'sarah.johnson@email.com',
                    role: 'instructor',
                    status: 'active',
                    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=60&h=60&fit=crop&crop=face',
                    joinDate: '2024-01-15',
                    coursesCount: 12,
                    studentsCount: 2847,
                    rating: 4.9,
                    location: 'San Francisco, CA',
                    phone: '+1 (555) 123-4567',
                    lastLogin: '2 hours ago'
                },
                {
                    id: 2,
                    name: 'Michael Chen',
                    email: 'michael.chen@email.com',
                    role: 'student',
                    status: 'active',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
                    joinDate: '2024-02-20',
                    coursesEnrolled: 8,
                    coursesCompleted: 5,
                    rating: 4.7,
                    location: 'New York, NY',
                    phone: '+1 (555) 987-6543',
                    lastLogin: '1 day ago'
                },
                {
                    id: 3,
                    name: 'Emily Davis',
                    email: 'emily.davis@email.com',
                    role: 'admin',
                    status: 'active',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
                    joinDate: '2023-11-10',
                    lastLogin: '30 minutes ago',
                    location: 'Los Angeles, CA',
                    phone: '+1 (555) 456-7890',
                    permissions: ['users', 'courses', 'analytics']
                },
                {
                    id: 4,
                    name: 'David Wilson',
                    email: 'david.wilson@email.com',
                    role: 'instructor',
                    status: 'pending',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
                    joinDate: '2024-03-05',
                    coursesCount: 3,
                    studentsCount: 124,
                    rating: 4.5,
                    location: 'Chicago, IL',
                    phone: '+1 (555) 234-5678',
                    lastLogin: '1 week ago'
                },
                {
                    id: 5,
                    name: 'Lisa Rodriguez',
                    email: 'lisa.rodriguez@email.com',
                    role: 'student',
                    status: 'inactive',
                    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=60&h=60&fit=crop&crop=face',
                    joinDate: '2024-01-30',
                    coursesEnrolled: 15,
                    coursesCompleted: 12,
                    rating: 4.8,
                    location: 'Miami, FL',
                    phone: '+1 (555) 345-6789',
                    lastLogin: '2 months ago'
                },
                {
                    id: 6,
                    name: 'James Brown',
                    email: 'james.brown@email.com',
                    role: 'instructor',
                    status: 'active',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
                    joinDate: '2023-12-08',
                    coursesCount: 7,
                    studentsCount: 1592,
                    rating: 4.6,
                    location: 'Seattle, WA',
                    phone: '+1 (555) 567-8901',
                    lastLogin: '4 hours ago'
                }
            ]);
            setIsLoading(false);
        }, 1500);

        // Anime.js animations
        if (window.anime) {
            window.anime({
                targets: '.floating-bg',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.1, 0.3],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1200)
            });
        }
    }, []);

    const stats = [
        {
            title: 'Total Users',
            value: '12,847',
            change: '+12.5%',
            icon: Users,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50'
        },
        {
            title: 'Active Instructors',
            value: '1,234',
            change: '+8.2%',
            icon: Crown,
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-50 to-pink-50'
        },
        {
            title: 'Students Enrolled',
            value: '10,890',
            change: '+15.3%',
            icon: BookOpen,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-50 to-emerald-50'
        },
        {
            title: 'Pending Approvals',
            value: '23',
            change: '-5.1%',
            icon: Clock,
            color: 'from-orange-500 to-red-500',
            bgColor: 'from-orange-50 to-red-50'
        }
    ];

    const getRoleIcon = (role) => {
        switch (role) {
            case 'admin': return Crown;
            case 'instructor': return BookOpen;
            case 'student': return User;
            default: return User;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'inactive': return 'bg-gray-100 text-gray-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'suspended': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'active': return CheckCircle;
            case 'inactive': return XCircle;
            case 'pending': return Clock;
            case 'suspended': return AlertTriangle;
            default: return XCircle;
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const handleSelectUser = (userId) => {
        setSelectedUsers(prev => 
            prev.includes(userId) 
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const handleSelectAll = () => {
        setSelectedUsers(
            selectedUsers.length === filteredUsers.length 
                ? [] 
                : filteredUsers.map(user => user.id)
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-bg absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-bg absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: -30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
                                User Management
                            </h1>
                            <p className="text-lg text-gray-600">
                                Manage and monitor all platform users in one centralized dashboard
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <Download className="w-5 h-5 mr-2 text-gray-600" />
                                Export Data
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <UserPlus className="w-5 h-5 mr-2" />
                                Add New User
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    ref={statsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`relative bg-gradient-to-br ${stat.bgColor} p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                        >
                            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${stat.color} opacity-10 rounded-full blur-xl`}></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                                        stat.change.startsWith('+') 
                                            ? 'bg-green-100 text-green-600' 
                                            : 'bg-red-100 text-red-600'
                                    }`}>
                                        {stat.change}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                <p className="text-gray-600 font-medium">{stat.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-6 mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="flex flex-col sm:flex-row gap-4 flex-1">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            
                            <div className="flex gap-3">
                                <select
                                    value={filterRole}
                                    onChange={(e) => setFilterRole(e.target.value)}
                                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="all">All Roles</option>
                                    <option value="admin">Admin</option>
                                    <option value="instructor">Instructor</option>
                                    <option value="student">Student</option>
                                </select>
                                
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="pending">Pending</option>
                                    <option value="suspended">Suspended</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowFilters(!showFilters)}
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200"
                            >
                                <Filter className="w-5 h-5 text-gray-600" />
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200"
                            >
                                <RefreshCw className="w-5 h-5 text-gray-600" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Users Table */}
                <motion.div
                    ref={tableRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg overflow-hidden"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center h-64">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
                            />
                        </div>
                    ) : (
                        <>
                            {/* Table Header */}
                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedUsers.length === filteredUsers.length}
                                                onChange={handleSelectAll}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">
                                                Select All ({filteredUsers.length})
                                            </span>
                                        </label>
                                    </div>
                                    
                                    <AnimatePresence>
                                        {selectedUsers.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="text-sm text-gray-600">
                                                    {selectedUsers.length} selected
                                                </span>
                                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Table Content */}
                            <div className="divide-y divide-gray-100">
                                {filteredUsers.map((user, index) => {
                                    const RoleIcon = getRoleIcon(user.role);
                                    const StatusIcon = getStatusIcon(user.status);
                                    
                                    return (
                                        <motion.div
                                            key={user.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.02)' }}
                                            className="px-6 py-4 hover:bg-blue-50/50 transition-all duration-200"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4 flex-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedUsers.includes(user.id)}
                                                        onChange={() => handleSelectUser(user.id)}
                                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    
                                                    <div className="flex items-center space-x-4 flex-1">
                                                        <div className="relative">
                                                            <img
                                                                src={user.avatar}
                                                                alt={user.name}
                                                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                                            />
                                                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                                                                user.status === 'active' ? 'bg-green-500' : 
                                                                user.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'
                                                            }`}></div>
                                                        </div>
                                                        
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center space-x-2 mb-1">
                                                                <h3 className="font-semibold text-gray-900 truncate">
                                                                    {user.name}
                                                                </h3>
                                                                <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                                                                    <StatusIcon className="w-3 h-3 mr-1" />
                                                                    {user.status}
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-gray-600 truncate">{user.email}</p>
                                                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                                                                <div className="flex items-center">
                                                                    <RoleIcon className="w-3 h-3 mr-1" />
                                                                    {user.role}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <MapPin className="w-3 h-3 mr-1" />
                                                                    {user.location}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Activity className="w-3 h-3 mr-1" />
                                                                    {user.lastLogin}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center space-x-6">
                                                    {user.role === 'instructor' && (
                                                        <div className="text-center">
                                                            <p className="text-sm font-semibold text-gray-900">{user.coursesCount}</p>
                                                            <p className="text-xs text-gray-500">Courses</p>
                                                        </div>
                                                    )}
                                                    
                                                    {user.rating && (
                                                        <div className="flex items-center space-x-1">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span className="text-sm font-medium text-gray-700">{user.rating}</span>
                                                        </div>
                                                    )}
                                                    
                                                    <div className="flex items-center space-x-2">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </motion.button>
                                                        
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                        >
                                                            <Edit3 className="w-4 h-4" />
                                                        </motion.button>
                                                        
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                        >
                                                            <MoreVertical className="w-4 h-4" />
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </motion.div>

                {/* Pagination */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center justify-between mt-8"
                >
                    <p className="text-sm text-gray-600">
                        Showing {filteredUsers.length} of {users.length} users
                    </p>
                    
                    <div className="flex items-center space-x-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200"
                        >
                            Previous
                        </motion.button>
                        
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3].map((page) => (
                                <motion.button
                                    key={page}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-10 h-10 rounded-xl transition-all duration-200 ${
                                        page === 1 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                            : 'bg-white/80 border border-gray-200 hover:bg-white hover:shadow-md'
                                    }`}
                                >
                                    {page}
                                </motion.button>
                            ))}
                        </div>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200"
                        >
                            Next
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminManageUsers;