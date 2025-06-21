import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
