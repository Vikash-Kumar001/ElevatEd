import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public Pages
import Home from '../pages/Home';
import ExploreCourses from '../pages/ExploreCourses';
import CourseDetail from '../pages/CourseDetail';

// Auth Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';

// Student Dashboard Pages
import StudentDashboard from '../pages/StudentDashboard';
import StudentMyCourses from '../pages/StudentMyCourses';
import StudentCertificate from '../pages/StudentCertificate';

// Instructor Dashboard Pages
import InstructorDashboard from '../pages/InstructorDashboard';
import InstructorMyCourses from '../pages/InstructorMyCourses';
import InstructorCreate from '../pages/InstructorCreateCourse';
import InstructorUploadLecture from '../pages/InstructorUploadLecture';

// Admin Dashboard Pages
import AdminDashboard from '../pages/AdminDashboard';
import AdminManageUsers from '../pages/AdminManageUsers';
import AdminManageCourses from '../pages/AdminManageCourses';

// Other Pages
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';

// Route Protection
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreCourses />} />
            <Route path="/course/:id" element={<CourseDetail />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Checkout */}
            <Route
                path="/checkout"
                element={
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                }
            />

            {/* Student Routes */}
            <Route
                path="/student/dashboard"
                element={
                    <ProtectedRoute>
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student/my-courses"
                element={
                    <ProtectedRoute>
                        <StudentMyCourses />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student/certificate"
                element={
                    <ProtectedRoute>
                        <StudentCertificate />
                    </ProtectedRoute>
                }
            />

            {/* Instructor Routes */}
            <Route
                path="/instructor/dashboard"
                element={
                    <ProtectedRoute>
                        <InstructorDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/instructor/my-courses"
                element={
                    <ProtectedRoute>
                        <InstructorMyCourses />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/instructor/create-course"
                element={
                    <ProtectedRoute>
                        <InstructorCreate />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/instructor/upload/:courseId"
                element={
                    <ProtectedRoute>
                        <InstructorUploadLecture />
                    </ProtectedRoute>
                }
            />

            {/* Admin Routes */}
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/manage-users"
                element={
                    <ProtectedRoute>
                        <AdminManageUsers />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/manage-courses"
                element={
                    <ProtectedRoute>
                        <AdminManageCourses />
                    </ProtectedRoute>
                }
            />

            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
