import API from './api';

export const processPayment = (paymentData) => API.post('/payment/checkout', paymentData);
