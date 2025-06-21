import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
                <h2 className="text-2xl font-bold mb-6 text-center">Create a New Account</h2>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
