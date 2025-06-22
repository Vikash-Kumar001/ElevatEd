import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    Users, Search, Filter, MoreVertical, Edit3, Trash2, 
    Eye, UserPlus, BookOpen, Award, Star, Calendar,
    TrendingUp, Clock, CheckCircle, AlertCircle, 
    Zap, Crown, GraduationCap, Shield, Settings,
    Download, Upload, RefreshCw, Sparkles
} from 'lucide-react';

const AdminManageCourses = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const headerRef = useRef(null);
    const tableRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const isTableInView = useInView(tableRef, { once: true });

    useEffect(() => {
        // Anime.js floating animation for background elements
        if (window.anime) {
            window.anime({
                targets: '.floating-element',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.1, 0.3],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1200)
            });

            window.anime({
                targets: '.pulse-element',
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
        // Simulate loading
        setTimeout(() => {
            setUsers([
                { 
                    id: 1, 
                    name: 'Alice Johnson', 
                    email: 'alice.johnson@email.com',
                    role: 'student',
                    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=150&h=150&fit=crop&crop=face',
                    status: 'active',
                    coursesEnrolled: 12,
                    lastActive: '2 hours ago',
                    joinDate: '2023-01-15',
                    rating: 4.8
                },
                { 
                    id: 2, 
                    name: 'Bob Smith', 
                    email: 'bob.smith@email.com',
                    role: 'instructor',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                    status: 'active',
                    coursesCreated: 8,
                    lastActive: '1 day ago',
                    joinDate: '2022-08-20',
                    rating: 4.9
                },
                { 
                    id: 3, 
                    name: 'Charlie Brown', 
                    email: 'charlie.brown@email.com',
                    role: 'admin',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                    status: 'active',
                    lastActive: 'Online',
                    joinDate: '2021-03-10',
                    permissions: 'Full Access'
                },
                { 
                    id: 4, 
                    name: 'Diana Prince', 
                    email: 'diana.prince@email.com',
                    role: 'student',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
                    status: 'inactive',
                    coursesEnrolled: 3,
                    lastActive: '1 week ago',
                    joinDate: '2023-06-12',
                    rating: 4.5
                },
                { 
                    id: 5, 
                    name: 'Ethan Hunt', 
                    email: 'ethan.hunt@email.com',
                    role: 'instructor',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
                    status: 'active',
                    coursesCreated: 15,
                    lastActive: '3 hours ago',
                    joinDate: '2022-02-28',
                    rating: 4.7
                }
            ]);
            setIsLoading(false);
        }, 1500);
    }, []);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        return matchesSearch && matchesRole;
    });

    const handleSelectUser = (userId) => {
        setSelectedUsers(prev => 
            prev.includes(userId) 
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const getRoleIcon = (role) => {
        switch (role) {
            case 'admin': return Crown;
            case 'instructor': return GraduationCap;
            case 'student': return BookOpen;
            default: return Users;
        }
    };

    const getRoleColor = (role) => {
        switch (role) {
            case 'admin': return 'from-purple-500 to-pink-500';
            case 'instructor': return 'from-blue-500 to-cyan-500';
            case 'student': return 'from-green-500 to-emerald-500';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getStatusColor = (status) => {
        return status === 'active' ? 'from-green-400 to-emerald-400' : 'from-gray-400 to-gray-500';
    };

    const stats = [
        { label: 'Total Users', value: users.length, icon: Users, gradient: 'from-blue-500 to-cyan-500' },
        { label: 'Active Students', value: users.filter(u => u.role === 'student' && u.status === 'active').length, icon: BookOpen, gradient: 'from-green-500 to-emerald-500' },
        { label: 'Instructors', value: users.filter(u => u.role === 'instructor').length, icon: GraduationCap, gradient: 'from-purple-500 to-pink-500' },
        { label: 'Admins', value: users.filter(u => u.role === 'admin').length, icon: Shield, gradient: 'from-orange-500 to-red-500' }
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                        <RefreshCw className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-700">Loading Users...</h3>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="floating-element absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
                <div className="pulse-element absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="pulse-element absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <motion.div 
                    ref={headerRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-lg mb-4"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Admin Dashboard
                                </span>
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
                                User Management
                            </h1>
                            <p className="text-lg text-gray-600">Manage all users, roles, and permissions across the platform</p>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                            >
                                <UserPlus className="w-5 h-5" />
                                <span>Add User</span>
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                            >
                                <Download className="w-5 h-5" />
                                <span>Export</span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Search and Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search users by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                        
                        {/* Role Filter */}
                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                                className="pl-12 pr-8 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer min-w-[150px]"
                            >
                                <option value="all">All Roles</option>
                                <option value="student">Students</option>
                                <option value="instructor">Instructors</option>
                                <option value="admin">Admins</option>
                            </select>
                        </div>
                        
                        {/* Bulk Actions */}
                        {selectedUsers.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center space-x-2"
                            >
                                <span className="text-sm text-gray-600 px-3 py-2 bg-blue-50 rounded-lg">
                                    {selectedUsers.length} selected
                                </span>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
                                    Delete
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Users Table */}
                <motion.div 
                    ref={tableRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isTableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedUsers(filteredUsers.map(u => u.id));
                                                } else {
                                                    setSelectedUsers([]);
                                                }
                                            }}
                                        />
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">User</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 hidden md:table-cell">Activity</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 hidden lg:table-cell">Stats</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredUsers.map((user, index) => {
                                    const RoleIcon = getRoleIcon(user.role);
                                    return (
                                        <motion.tr
                                            key={user.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                                            className="hover:bg-blue-50/50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedUsers.includes(user.id)}
                                                    onChange={() => handleSelectUser(user.id)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="relative"
                                                    >
                                                        <img
                                                            src={user.avatar}
                                                            alt={user.name}
                                                            className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-md"
                                                        />
                                                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                                                    </motion.div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{user.name}</p>
                                                        <p className="text-sm text-gray-500">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className={`w-8 h-8 bg-gradient-to-r ${getRoleColor(user.role)} rounded-lg flex items-center justify-center`}>
                                                        <RoleIcon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="font-medium text-gray-700 capitalize">{user.role}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                        user.status === 'active' 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-gray-100 text-gray-800'
                                                    }`}
                                                >
                                                    <div className={`w-2 h-2 rounded-full mr-2 ${
                                                        user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                                                    }`}></div>
                                                    {user.status}
                                                </motion.span>
                                            </td>
                                            <td className="px-6 py-4 hidden md:table-cell">
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{user.lastActive}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 hidden lg:table-cell">
                                                <div className="space-y-1">
                                                    {user.role === 'student' && (
                                                        <div className="flex items-center space-x-2 text-sm">
                                                            <BookOpen className="w-4 h-4 text-blue-500" />
                                                            <span className="text-gray-600">{user.coursesEnrolled} courses</span>
                                                        </div>
                                                    )}
                                                    {user.role === 'instructor' && (
                                                        <div className="flex items-center space-x-2 text-sm">
                                                            <Award className="w-4 h-4 text-purple-500" />
                                                            <span className="text-gray-600">{user.coursesCreated} created</span>
                                                        </div>
                                                    )}
                                                    {user.rating && (
                                                        <div className="flex items-center space-x-1 text-sm">
                                                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                            <span className="text-gray-600">{user.rating}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                                                    >
                                                        <Edit3 className="w-4 h-4" />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                                    >
                                                        <MoreVertical className="w-4 h-4" />
                                                    </motion.button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {filteredUsers.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">No users found</h3>
                            <p className="text-gray-500">Try adjusting your search criteria</p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Pagination */}
                {filteredUsers.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 flex items-center justify-between"
                    >
                        <p className="text-sm text-gray-600">
                            Showing {filteredUsers.length} of {users.length} users
                        </p>
                        <div className="flex space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 disabled:opacity-50"
                                disabled
                            >
                                Previous
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                            >
                                1
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                            >
                                Next
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AdminManageCourses;