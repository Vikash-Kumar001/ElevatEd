import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaUserShield } from 'react-icons/fa';

const Sidebar = ({ role }) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'text-indigo-600 font-semibold' : 'text-gray-700';

    const studentLinks = [
        { to: '/student/dashboard', label: 'Dashboard' },
        { to: '/student/my-courses', label: 'My Courses' },
        { to: '/student/certificate', label: 'Certificate' },
    ];

    const instructorLinks = [
        { to: '/instructor/dashboard', label: 'Dashboard' },
        { to: '/instructor/my-courses', label: 'My Courses' },
        { to: '/instructor/create-course', label: 'Create Course' },
    ];

    const adminLinks = [
        { to: '/admin/dashboard', label: 'Admin Home' },
        { to: '/admin/manage-users', label: 'Manage Users' },
        { to: '/admin/manage-courses', label: 'Manage Courses' },
    ];

    const getIcon = (role) => {
        switch (role) {
            case 'student': return <FaUserGraduate className="text-lg mr-2" />;
            case 'instructor': return <FaChalkboardTeacher className="text-lg mr-2" />;
            case 'admin': return <FaUserShield className="text-lg mr-2" />;
            default: return null;
        }
    };

    const links =
        role === 'student' ? studentLinks :
            role === 'instructor' ? instructorLinks :
                role === 'admin' ? adminLinks : [];

    return (
        <aside className="w-full md:w-64 bg-white shadow h-screen p-4 fixed top-0 left-0 z-40">
            <div className="flex items-center gap-2 mb-6 text-xl font-bold text-indigo-600">
                {getIcon(role)} EduMarket
            </div>
            <nav className="flex flex-col gap-4">
                {links.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`block hover:text-indigo-600 ${isActive(to)}`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;