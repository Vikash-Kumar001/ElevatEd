import React from 'react'

const AdminManageCourses = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers([
            { id: 1, name: 'Alice', role: 'student' },
            { id: 2, name: 'Bob', role: 'instructor' },
            { id: 3, name: 'Charlie', role: 'admin' },
        ]);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">All Users</h1>
            <ul className="divide-y divide-gray-200">
                {users.map(user => (
                    <li key={user.id} className="py-3 flex justify-between">
                        <span>{user.name}</span>
                        <span className="text-sm text-gray-500">{user.role}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminManageCourses
