import React from 'react';

const Buttons = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
};

export default Buttons;