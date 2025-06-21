import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import Cards from './Cards';

const CourseCard = ({ course }) => {
    return (
        <Cards>
            <img
                src={course.image}
                alt={course.title}
                className="rounded h-48 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 mb-4">Instructor: {course.instructor}</p>
            <Link to={`/course/${course.id}`}>
                <Buttons className="w-full">View Details</Buttons>
            </Link>
        </Cards>
    );
};

export default CourseCard;
