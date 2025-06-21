import React, { createContext, useContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState('info');

    const showNotification = (msg, msgType = 'info') => {
        setMessage(msg);
        setType(msgType);
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <NotificationContext.Provider value={{ message, type, showNotification }}>
            {children}
            {message && (
                <div className={`fixed top-4 right-4 px-4 py-2 rounded shadow bg-${type === 'error' ? 'red' : 'green'}-500 text-white`}>
                    {message}
                </div>
            )}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
