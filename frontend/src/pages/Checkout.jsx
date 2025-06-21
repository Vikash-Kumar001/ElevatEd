import React, { useState } from 'react';
import Buttons from '../components/Buttons';

const Checkout = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment processed! (Mock implementation)');
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                <input
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
                    className="w-full border p-2 rounded"
                    value={paymentInfo.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    className="w-full border p-2 rounded"
                    value={paymentInfo.cardNumber}
                    onChange={handleChange}
                    required
                />
                <div className="flex gap-4">
                    <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        className="w-1/2 border p-2 rounded"
                        value={paymentInfo.expiry}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="cvv"
                        placeholder="CVV"
                        className="w-1/2 border p-2 rounded"
                        value={paymentInfo.cvv}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Buttons type="submit">Pay Now</Buttons>
            </form>
        </div>
    );
};

export default Checkout;
