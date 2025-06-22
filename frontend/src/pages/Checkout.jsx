import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    CreditCard, Lock, Shield, CheckCircle, Star, ArrowLeft, 
    Sparkles, Trophy, Clock, Users, Award, Zap
} from 'lucide-react';
import Buttons from '../components/Buttons';

const Checkout = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        country: '',
        zipCode: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const formRef = useRef(null);
    const summaryRef = useRef(null);
    const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
    const isSummaryInView = useInView(summaryRef, { once: true, margin: "-100px" });

    // Mock course data
    const courseData = {
        title: "Complete Web Development Bootcamp",
        instructor: "Sarah Johnson",
        originalPrice: 199.99,
        discountPrice: 49.99,
        discount: 75,
        rating: 4.8,
        students: "120,000+",
        duration: "40 hours",
        lessons: 280,
        features: [
            "Lifetime Access",
            "Certificate of Completion", 
            "30-Day Money Back Guarantee",
            "Mobile & Desktop Access",
            "Community Support"
        ]
    };

    useEffect(() => {
        // Anime.js floating animation
        if (window.anime && formRef.current) {
            window.anime({
                targets: '.floating-checkout-element',
                translateY: [-20, 20],
                rotate: [0, 180],
                opacity: [0.1, 0.3],
                duration: 8000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: window.anime.stagger(1200)
            });

            window.anime({
                targets: '.pulse-checkout-element',
                scale: [1, 1.15],
                opacity: [0.4, 0.7],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad',
                delay: window.anime.stagger(600)
            });
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Format card number with spaces
        if (name === 'cardNumber') {
            const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
            if (formattedValue.replace(/\s/g, '').length <= 16) {
                setPaymentInfo({ ...paymentInfo, [name]: formattedValue });
            }
        }
        // Format expiry date
        else if (name === 'expiry') {
            const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
            if (formattedValue.length <= 5) {
                setPaymentInfo({ ...paymentInfo, [name]: formattedValue });
            }
        }
        else {
            setPaymentInfo({ ...paymentInfo, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsProcessing(false);
        setCurrentStep(3);
        
        // Success animation
        if (window.anime) {
            window.anime({
                targets: '.success-icon',
                scale: [0, 1.2, 1],
                rotate: [0, 360],
                duration: 1000,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    const formFields = [
        { name: 'email', type: 'email', placeholder: 'Email Address', icon: '📧' },
        { name: 'name', type: 'text', placeholder: 'Full Name', icon: '👤' },
        { name: 'cardNumber', type: 'text', placeholder: 'Card Number', icon: '💳' },
        { name: 'expiry', type: 'text', placeholder: 'MM/YY', icon: '📅', width: 'half' },
        { name: 'cvv', type: 'password', placeholder: 'CVV', icon: '🔒', width: 'half' },
        { name: 'country', type: 'text', placeholder: 'Country', icon: '🌍' },
        { name: 'zipCode', type: 'text', placeholder: 'ZIP Code', icon: '📍' }
    ];

    if (currentStep === 3) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl w-full text-center"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="success-icon inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8"
                        >
                            <CheckCircle className="w-12 h-12 text-white" />
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
                        >
                            Payment Successful!
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-xl text-gray-600 mb-8"
                        >
                            Welcome to {courseData.title}! Check your email for course access details.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Learning
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
                            >
                                Download Receipt
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-checkout-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
                <div className="floating-checkout-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-xl"></div>
                <div className="floating-checkout-element absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-2xl"></div>
                
                {/* Dynamic cursor follower */}
                <motion.div
                    className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur-sm pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x - 8,
                        y: mousePosition.y - 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                />
            </div>

            {/* Progress Bar */}
            <div className="relative z-10 pt-8 pb-4">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex items-center justify-center mb-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Course</span>
                        </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 mb-12">
                        {[1, 2].map((step) => (
                            <div key={step} className="flex items-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: step * 0.1 }}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                                        currentStep >= step 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                                            : 'bg-gray-200 text-gray-500'
                                    }`}
                                >
                                    {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                                </motion.div>
                                {step < 2 && (
                                    <div className={`w-16 h-1 mx-2 rounded ${
                                        currentStep > step ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Course Summary */}
                    <motion.div
                        ref={summaryRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isSummaryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 sticky top-8">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm font-medium text-green-700">
                                    {courseData.discount}% OFF - Limited Time
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{courseData.title}</h2>
                            
                            <div className="flex items-center mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b776?w=50&h=50&fit=crop&crop=face"
                                    alt={courseData.instructor}
                                    className="w-12 h-12 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{courseData.instructor}</p>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                        <span className="text-sm text-gray-600">{courseData.rating} ({courseData.students} students)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-3 bg-blue-50 rounded-xl">
                                    <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                    <p className="text-sm font-medium text-gray-900">{courseData.duration}</p>
                                </div>
                                <div className="text-center p-3 bg-purple-50 rounded-xl">
                                    <Award className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                                    <p className="text-sm font-medium text-gray-900">{courseData.lessons} Lessons</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-xl">
                                    <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                    <p className="text-sm font-medium text-gray-900">{courseData.students}</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                {courseData.features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isSummaryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="flex items-center"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-600">Original Price:</span>
                                    <span className="text-gray-500 line-through">${courseData.originalPrice}</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-semibold text-gray-900">Your Price:</span>
                                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        ${courseData.discountPrice}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 text-center">
                                    30-day money-back guarantee
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Payment Form */}
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                            <div className="flex items-center mb-8">
                                <div className="flex items-center space-x-2">
                                    <Lock className="w-6 h-6 text-green-500" />
                                    <span className="text-lg font-semibold text-gray-900">Secure Checkout</span>
                                </div>
                                <div className="ml-auto flex items-center space-x-2 text-sm text-gray-500">
                                    <Shield className="w-4 h-4" />
                                    <span>SSL Protected</span>
                                </div>
                            </div>

                            <motion.form
                                variants={stepVariants}
                                initial="hidden"
                                animate="visible"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {formFields.map((field, index) => (
                                    <motion.div
                                        key={field.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className={field.width === 'half' ? 'flex-1' : 'w-full'}
                                    >
                                        {field.name === 'expiry' && field.width === 'half' ? (
                                            <div className="flex space-x-4">
                                                <motion.div className="relative flex-1">
                                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                                        📅
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="expiry"
                                                        placeholder="MM/YY"
                                                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg font-medium"
                                                        value={paymentInfo.expiry}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </motion.div>
                                                <motion.div className="relative flex-1">
                                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                                        🔒
                                                    </span>
                                                    <input
                                                        type="password"
                                                        name="cvv"
                                                        placeholder="CVV"
                                                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg font-medium"
                                                        value={paymentInfo.cvv}
                                                        onChange={handleChange}
                                                        maxLength={4}
                                                        required
                                                    />
                                                </motion.div>
                                            </div>
                                        ) : field.width !== 'half' && (
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                                    {field.icon}
                                                </span>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    placeholder={field.placeholder}
                                                    className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg font-medium placeholder-gray-400"
                                                    value={paymentInfo[field.name]}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-2xl"
                                >
                                    <Shield className="w-5 h-5 text-blue-600" />
                                    <p className="text-sm text-blue-800">
                                        Your payment information is encrypted and secure. We never store your card details.
                                    </p>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isProcessing}
                                    whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                                    whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                                    className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                                        isProcessing
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                                    } text-white`}
                                >
                                    {isProcessing ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            <span>Processing Payment...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-2">
                                            <CreditCard className="w-6 h-6" />
                                            <span>Complete Purchase - ${courseData.discountPrice}</span>
                                        </div>
                                    )}
                                </motion.button>

                                <div className="flex items-center justify-center space-x-6 pt-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8 opacity-60" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 opacity-60" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-8 opacity-60" />
                                </div>
                            </motion.form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="pulse-checkout-element absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="pulse-checkout-element absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="pulse-checkout-element absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="pulse-checkout-element absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full"></div>
            </div>
        </div>
    );
};

export default Checkout;