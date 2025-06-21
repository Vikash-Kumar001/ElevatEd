import React, { useState, useContext } from 'react';
import Buttons from '../components/Buttons';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold text-center mb-6">Login to EduMarket</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Buttons type="submit" className="w-full">Login</Buttons>
            </form>
        </div>
    );
};

export default LoginForm;
