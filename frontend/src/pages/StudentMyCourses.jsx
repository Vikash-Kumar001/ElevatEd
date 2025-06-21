import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';

const StudentMyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            {
                id: 1,
                title: 'JavaScript for Beginners',
                description: 'A complete guide to start JavaScript.',
                instructor: 'Alice Johnson',
                image: '/assets/js-course.jpg'
            },
            {
                id: 2,
                title: 'React Mastery',
                description: 'Become a React pro with this comprehensive course.',
                instructor: 'Bob Smith',
                image: '/assets/react-course.jpg'
            }
        ]);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default StudentMyCourses;