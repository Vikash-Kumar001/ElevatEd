import React from 'react';

export const Spinner = () => (
    <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
);

export const SkeletonCard = () => (
    <div className="animate-pulse bg-gray-100 p-4 rounded shadow">
        <div className="h-48 bg-gray-300 mb-4 rounded"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded w-1/2"></div>
        <div className="h-8 bg-gray-300 rounded w-full"></div>
    </div>
);
