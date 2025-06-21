import React from 'react'

const AdminManageUsers = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            { id: 1, title: 'React Basics', instructor: 'Alice' },
            { id: 2, title: 'Advanced Node.js', instructor: 'Bob' }
        ]);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">All Courses</h1>
            <ul className="divide-y divide-gray-200">
                {courses.map(course => (
                    <li key={course.id} className="py-3 flex justify-between">
                        <span>{course.title}</span>
                        <span className="text-sm text-gray-500">{course.instructor}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminManageUsers
