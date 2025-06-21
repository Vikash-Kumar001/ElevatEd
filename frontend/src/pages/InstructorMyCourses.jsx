import React, { useEffect, useState } from 'react';
import CourseCard from '../components/Cards';

const InstructorMyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            {
                id: 101,
                title: 'Node.js API Development',
                description: 'Build REST APIs with Node and Express.',
                instructor: 'You',
                image: '/assets/node-api.jpg'
            },
            {
                id: 102,
                title: 'UI Design Essentials',
                description: 'Master design tools and principles.',
                instructor: 'You',
                image: '/assets/ui-design.jpg'
            }
        ]);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">My Created Courses</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default InstructorMyCourses;
