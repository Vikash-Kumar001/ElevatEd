import React, { useState, useContext } from 'react';
import Buttons from '../components/Buttons';
import { AuthContext } from '../context/AuthContext';

const RegisterForm = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        register(formData);
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border rounded"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <Buttons type="submit" className="w-full">Register</Buttons>
            </form>
        </div>
    );
};

export default RegisterForm;
