import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Buttons from '../components/Buttons';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Replace with real API call
        const mockData = {
            id: courseId,
            title: 'Full Stack Web Development',
            description: 'This course covers HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React.',
            instructor: 'John Doe',
            content: ['HTML & CSS', 'JavaScript Basics', 'React', 'Node.js & Express', 'MongoDB'],
            image: '/assets/web-dev.jpg'
        };
        setCourse(mockData);
    }, [courseId]);

    if (!course) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8">
                <img src={course.image} alt={course.title} className="w-full md:w-1/2 h-64 object-cover rounded" />
                <div>
                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>
                    <h3 className="font-semibold text-lg mb-2">What you'll learn:</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
                        {course.content.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <Buttons>Enroll Now</Buttons>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
