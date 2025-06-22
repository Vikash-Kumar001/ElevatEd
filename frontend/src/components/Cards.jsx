import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
    children, 
    className = '', 
    variant = 'default',
    hoverable = true,
    animated = true,
    gradient = false,
    glassmorphism = false,
    shadow = 'md',
    rounded = 'xl',
    padding = 6,
    border = true,
    onClick,
    ...props 
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Base styles
    const baseStyles = "transition-all duration-300 relative overflow-hidden";
    
    // Variant styles
    const variantStyles = {
        default: "bg-white",
        primary: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50",
        secondary: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50",
        success: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50",
        warning: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50",
        danger: "bg-gradient-to-br from-red-50 to-pink-50 border-red-200/50",
        dark: "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-700",
        transparent: "bg-transparent border-gray-200/30"
    };

    // Glassmorphism styles
    const glassmorphismStyles = glassmorphism 
        ? "bg-white/10 backdrop-blur-md border-white/20" 
        : "";

    // Gradient overlay styles
    const gradientStyles = gradient 
        ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" 
        : "";

    // Shadow styles
    const shadowStyles = {
        none: "",
        sm: "shadow-sm hover:shadow-md",
        md: "shadow-md hover:shadow-lg",
        lg: "shadow-lg hover:shadow-xl",
        xl: "shadow-xl hover:shadow-2xl",
        glow: "shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
    };

    // Rounded styles
    const roundedStyles = {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        '2xl': "rounded-2xl",
        '3xl': "rounded-3xl",
        full: "rounded-full"
    };

    // Padding styles
    const paddingStyles = {
        0: "p-0",
        2: "p-2",
        4: "p-4",
        6: "p-6",
        8: "p-8",
        10: "p-10",
        12: "p-12"
    };

    // Border styles
    const borderStyles = border 
        ? glassmorphism 
            ? "border border-white/20" 
            : "border border-gray-200/50"
        : "";

    // Hover styles
    const hoverStyles = hoverable 
        ? "hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
        : "";

    // Animation variants
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.95 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -4,
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    // Combine all styles
    const cardClasses = [
        baseStyles,
        glassmorphism ? glassmorphismStyles : variantStyles[variant],
        gradientStyles,
        shadowStyles[shadow],
        roundedStyles[rounded],
        paddingStyles[padding],
        borderStyles,
        hoverStyles,
        className
    ].filter(Boolean).join(' ');

    const CardComponent = animated ? motion.div : 'div';

    const animationProps = animated ? {
        variants: cardVariants,
        initial: "hidden",
        animate: "visible",
        whileHover: hoverable ? "hover" : undefined,
        onHoverStart: () => setIsHovered(true),
        onHoverEnd: () => setIsHovered(false)
    } : {};

    return (
        <CardComponent
            className={cardClasses}
            onClick={onClick}
            {...animationProps}
            {...props}
        >
            {/* Animated background gradient on hover */}
            {hoverable && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Shimmer effect */}
            {hoverable && (
                <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                        translateX: isHovered ? "200%" : "-100%"
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Decorative elements */}
            {gradient && (
                <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/10 to-orange-400/10 rounded-full blur-xl transform -translate-x-12 translate-y-12" />
                </>
            )}
        </CardComponent>
    );
};

// Card Header Component
const CardHeader = ({ children, className = '', separator = false }) => {
    return (
        <div className={`mb-4 ${separator ? 'pb-4 border-b border-gray-200/50' : ''} ${className}`}>
            {children}
        </div>
    );
};

// Card Title Component
const CardTitle = ({ children, className = '', size = 'lg' }) => {
    const sizeStyles = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl'
    };

    return (
        <h3 className={`font-bold text-gray-900 ${sizeStyles[size]} ${className}`}>
            {children}
        </h3>
    );
};

// Card Content Component
const CardContent = ({ children, className = '' }) => {
    return (
        <div className={`text-gray-600 leading-relaxed ${className}`}>
            {children}
        </div>
    );
};

// Card Footer Component
const CardFooter = ({ children, className = '', separator = false }) => {
    return (
        <div className={`mt-6 ${separator ? 'pt-4 border-t border-gray-200/50' : ''} ${className}`}>
            {children}
        </div>
    );
};

// Export all components
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;

// Example Usage Component for demonstration
export const CardExamples = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Enhanced Card Components
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Default Card */}
                    <Card>
                        <Card.Header>
                            <Card.Title>Default Card</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            This is a default card with hover effects and smooth animations.
                        </Card.Content>
                    </Card>

                    {/* Primary Variant */}
                    <Card variant="primary" shadow="lg">
                        <Card.Header separator>
                            <Card.Title>Primary Card</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            A primary themed card with enhanced shadows and borders.
                        </Card.Content>
                    </Card>

                    {/* Glassmorphism Card */}
                    <Card glassmorphism shadow="glow" gradient>
                        <Card.Header>
                            <Card.Title className="text-white">Glassmorphism</Card.Title>
                        </Card.Header>
                        <Card.Content className="text-white/80">
                            Modern glassmorphism effect with backdrop blur and gradient overlays.
                        </Card.Content>
                    </Card>

                    {/* Success Variant */}
                    <Card variant="success" rounded="2xl" padding={8}>
                        <Card.Header>
                            <Card.Title>Success Card</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            Perfect for success messages and positive feedback.
                        </Card.Content>
                        <Card.Footer separator>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                Action
                            </button>
                        </Card.Footer>
                    </Card>

                    {/* Dark Variant */}
                    <Card variant="dark" shadow="xl">
                        <Card.Header separator>
                            <Card.Title className="text-white">Dark Theme</Card.Title>
                        </Card.Header>
                        <Card.Content className="text-gray-300">
                            Dark themed card for modern interfaces and dark mode support.
                        </Card.Content>
                    </Card>

                    {/* Interactive Card */}
                    <Card 
                        variant="secondary" 
                        gradient 
                        onClick={() => alert('Card clicked!')}
                        className="cursor-pointer"
                    >
                        <Card.Header>
                            <Card.Title>Interactive Card</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            Click me! This card has interactive hover effects and click handlers.
                        </Card.Content>
                    </Card>
                </div>

                {/* Feature Showcase */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                        Advanced Features
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Large Feature Card */}
                        <Card 
                            variant="primary" 
                            glassmorphism 
                            gradient 
                            shadow="glow" 
                            rounded="3xl" 
                            padding={10}
                        >
                            <Card.Header>
                                <Card.Title size="xl" className="text-white">
                                    Premium Features
                                </Card.Title>
                            </Card.Header>
                            <Card.Content className="text-white/90 space-y-4">
                                <p>✨ Glassmorphism effects with backdrop blur</p>
                                <p>🎨 Multiple variants and customization options</p>
                                <p>⚡ Smooth animations and micro-interactions</p>
                                <p>📱 Fully responsive design</p>
                                <p>🎯 Accessibility-focused implementation</p>
                            </Card.Content>
                            <Card.Footer separator>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
                                >
                                    Explore More
                                </motion.button>
                            </Card.Footer>
                        </Card>

                        {/* Stats Card */}
                        <Card variant="transparent" border={false} padding={0}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Components', value: '50+', color: 'blue' },
                                    { label: 'Variants', value: '8', color: 'purple' },
                                    { label: 'Animations', value: '∞', color: 'pink' },
                                    { label: 'Responsive', value: '100%', color: 'green' }
                                ].map((stat, index) => (
                                    <Card 
                                        key={stat.label}
                                        variant="default" 
                                        shadow="md" 
                                        padding={6}
                                        className="text-center"
                                    >
                                        <div className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            {stat.label}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};