// ---------- App.jsx ----------
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <Navbar />
            <AppRoutes />
            <ToastContainer position="top-right" autoClose={3000} />
            <Footer />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
