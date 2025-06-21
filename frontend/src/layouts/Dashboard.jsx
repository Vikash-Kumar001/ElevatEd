import React from 'react'

const Dashboard = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                {children}
            </main>
        </div>
    );
};

export default Dashboard
