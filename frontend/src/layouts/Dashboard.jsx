import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ children }) => {
    return (
        <div className="flex min-h-screen pt-16">
            <Sidebar />
            <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                {children}
            </main>
        </div>
    );
};

export default Dashboard;