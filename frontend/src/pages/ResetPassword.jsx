import React, { useState } from 'react';
import Buttons from '../components/Buttons';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('If this email is registered, a reset link has been sent.');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Your Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <Buttons type="submit">Send Reset Link</Buttons>
                    {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;