import React, { useState } from 'react';
import Buttons from '../components/Buttons';

const InstructorUploadLecture = () => {
    const [formData, setFormData] = useState({
        courseId: '',
        title: '',
        videoUrl: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Lecture uploaded:', formData);
        // integrate with backend upload logic here
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Upload New Lecture</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="courseId"
                    placeholder="Course ID"
                    className="w-full border p-2 rounded"
                    value={formData.courseId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Lecture Title"
                    className="w-full border p-2 rounded"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="videoUrl"
                    placeholder="Video URL (YouTube or Cloud)"
                    className="w-full border p-2 rounded"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Lecture Description"
                    className="w-full border p-2 rounded"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <Buttons type="submit">Upload Lecture</Buttons>
            </form>
        </div>
    );
};

export default InstructorUploadLecture;