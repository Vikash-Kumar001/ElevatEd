import React, { useState } from 'react';
import Buttons from '../components/Buttons';

const InstructorCreateCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Course submitted:', formData);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Create a New Course</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" placeholder="Course Title" className="w-full border p-2 rounded" value={formData.title} onChange={handleChange} required />
                <textarea name="description" placeholder="Course Description" className="w-full border p-2 rounded" rows="4" value={formData.description} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" className="w-full border p-2 rounded" value={formData.category} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" className="w-full border p-2 rounded" value={formData.image} onChange={handleChange} required />
                <Buttons type="submit">Publish Course</Buttons>
            </form>
        </div>
    );
};

export default InstructorCreateCourse;
