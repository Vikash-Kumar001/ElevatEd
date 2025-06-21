import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';

const ExploreCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Replace this with real API call
        setCourses([
            {
                id: 1,
                title: 'Full Stack Web Development',
                description: 'Learn MERN stack from scratch.',
                instructor: 'John Doe',
                image: '/assets/web-dev.jpg'
            },
            {
                id: 2,
                title: 'Python for Data Science',
                description: 'Data analysis with Pandas and NumPy.',
                instructor: 'Jane Smith',
                image: '/assets/data-science.jpg'
            },
            {
                id: 3,
                title: 'UI/UX Design Fundamentals',
                description: 'Design beautiful and user-friendly interfaces.',
                instructor: 'Alex Lee',
                image: '/assets/ui-ux.jpg'
            }
        ]);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Explore Courses</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                    <div key={course.id} className="bg-white rounded shadow p-4">
                        <img src={course.image} alt={course.title} className="rounded h-48 w-full object-cover mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                        <p className="text-sm text-gray-500 mb-4">Instructor: {course.instructor}</p>
                        <Link to={`/course/${course.id}`}>
                            <Buttons className="w-full">View Details</Buttons>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCourses;