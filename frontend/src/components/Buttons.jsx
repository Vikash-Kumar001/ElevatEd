import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Loader2, ArrowRight, ChevronRight, Plus, Check, X, 
    Download, Upload, Play, Pause, Heart, Share2, 
    Sparkles, Zap, Star, Shield, Rocket, Globe
} from 'lucide-react';

const Buttons = ({ 
    children, 
    onClick, 
    className = '', 
    type = 'button', 
    disabled = false,
    variant = 'primary',
    size = 'md',
    loading = false,
    icon = null,
    iconPosition = 'left',
    fullWidth = false,
    rounded = 'lg',
    shadow = true,
    glowing = false,
    animated = true,
    ripple = true,
    gradient = false,
    outline = false,
    ghost = false,
    floating = false,
    pulse = false
}) => {
    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [ripples, setRipples] = useState([]);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        // Anime.js floating animation for floating buttons
        if (window.anime && floating && buttonRef.current && !disabled) {
            window.anime({
                targets: buttonRef.current,
                translateY: [-2, 2],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine'
            });
        }

        // Cleanup ripples
        const timer = setTimeout(() => {
            setRipples([]);
        }, 600);

        return () => clearTimeout(timer);
    }, [floating, disabled, ripples]);

    // Variant styles
    const variants = {
        primary: {
            base: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent',
            hover: 'hover:from-blue-700 hover:to-purple-700 hover:shadow-lg',
            active: 'active:from-blue-800 active:to-purple-800',
            disabled: 'disabled:from-gray-400 disabled:to-gray-500'
        },
        secondary: {
            base: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border-gray-300',
            hover: 'hover:from-gray-200 hover:to-gray-300 hover:shadow-md',
            active: 'active:from-gray-300 active:to-gray-400',
            disabled: 'disabled:from-gray-100 disabled:to-gray-200 disabled:text-gray-400'
        },
        success: {
            base: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-transparent',
            hover: 'hover:from-green-600 hover:to-emerald-700 hover:shadow-lg',
            active: 'active:from-green-700 active:to-emerald-800',
            disabled: 'disabled:from-gray-400 disabled:to-gray-500'
        },
        danger: {
            base: 'bg-gradient-to-r from-red-500 to-pink-600 text-white border-transparent',
            hover: 'hover:from-red-600 hover:to-pink-700 hover:shadow-lg',
            active: 'active:from-red-700 active:to-pink-800',
            disabled: 'disabled:from-gray-400 disabled:to-gray-500'
        },
        warning: {
            base: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-transparent',
            hover: 'hover:from-amber-600 hover:to-orange-700 hover:shadow-lg',
            active: 'active:from-amber-700 active:to-orange-800',
            disabled: 'disabled:from-gray-400 disabled:to-gray-500'
        },
        info: {
            base: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent',
            hover: 'hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg',
            active: 'active:from-cyan-700 active:to-blue-800',
            disabled: 'disabled:from-gray-400 disabled:to-gray-500'
        },
        dark: {
            base: 'bg-gradient-to-r from-gray-800 to-black text-white border-transparent',
            hover: 'hover:from-gray-900 hover:to-gray-800 hover:shadow-lg',
            active: 'active:from-black active:to-gray-900',
            disabled: 'disabled:from-gray-400 disabled:to-gray-500'
        },
        light: {
            base: 'bg-gradient-to-r from-white to-gray-50 text-gray-900 border-gray-300',
            hover: 'hover:from-gray-50 hover:to-gray-100 hover:shadow-md',
            active: 'active:from-gray-100 active:to-gray-200',
            disabled: 'disabled:from-gray-100 disabled:to-gray-200 disabled:text-gray-400'
        }
    };

    // Size configurations
    const sizes = {
        xs: 'px-3 py-1.5 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
        xl: 'px-10 py-5 text-lg',
        '2xl': 'px-12 py-6 text-xl'
    };

    // Rounded configurations
    const roundedOptions = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full'
    };

    // Handle ripple effect
    const handleRipple = (event) => {
        if (!ripple || disabled) return;

        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newRipple = {
            x,
            y,
            id: Date.now()
        };

        setRipples(prev => [...prev, newRipple]);
        setClickCount(prev => prev + 1);
    };

    // Button click handler
    const handleClick = (event) => {
        handleRipple(event);
        if (onClick && !disabled && !loading) {
            onClick(event);
        }
    };

    // Build className
    let buttonClasses = [
        'relative inline-flex items-center justify-center font-semibold transition-all duration-300 transform',
        'focus:outline-none focus:ring-4 focus:ring-opacity-20',
        'disabled:cursor-not-allowed disabled:transform-none',
        'overflow-hidden'
    ];

    // Apply variant styles
    const variantStyle = variants[variant] || variants.primary;
    if (outline) {
        buttonClasses.push('bg-transparent border-2');
        buttonClasses.push(variantStyle.base.replace('bg-gradient-to-r', 'border-gradient-to-r').replace('text-white', 'text-current'));
    } else if (ghost) {
        buttonClasses.push('bg-transparent border-0 hover:bg-opacity-10');
    } else if (gradient) {
        buttonClasses.push(variantStyle.base);
    } else {
        buttonClasses.push(variantStyle.base.replace('bg-gradient-to-r', 'bg'));
    }

    buttonClasses.push(variantStyle.hover);
    buttonClasses.push(variantStyle.active);
    buttonClasses.push(variantStyle.disabled);

    // Apply size
    buttonClasses.push(sizes[size]);

    // Apply rounded
    buttonClasses.push(roundedOptions[rounded]);

    // Apply full width
    if (fullWidth) {
        buttonClasses.push('w-full');
    }

    // Apply shadow
    if (shadow && !ghost) {
        buttonClasses.push('shadow-lg hover:shadow-xl');
    }

    // Apply glowing effect
    if (glowing && !disabled) {
        buttonClasses.push('animate-pulse');
    }

    // Apply animated effects
    if (animated && !disabled) {
        buttonClasses.push('hover:scale-105 active:scale-95');
    }

    // Apply pulse animation
    if (pulse) {
        buttonClasses.push('animate-pulse');
    }

    // Focus ring colors based on variant
    const focusRingColors = {
        primary: 'focus:ring-blue-500',
        secondary: 'focus:ring-gray-500',
        success: 'focus:ring-green-500',
        danger: 'focus:ring-red-500',
        warning: 'focus:ring-amber-500',
        info: 'focus:ring-cyan-500',
        dark: 'focus:ring-gray-700',
        light: 'focus:ring-gray-300'
    };

    buttonClasses.push(focusRingColors[variant] || focusRingColors.primary);

    // Combine all classes
    const finalClassName = `${buttonClasses.join(' ')} ${className}`;

    // Animation variants for Framer Motion
    const buttonVariants = {
        rest: { 
            scale: 1,
            rotate: 0,
            transition: { duration: 0.2 }
        },
        hover: { 
            scale: animated ? 1.05 : 1,
            rotate: floating ? [0, 1, 0] : 0,
            transition: { duration: 0.2 }
        },
        tap: { 
            scale: animated ? 0.95 : 1,
            transition: { duration: 0.1 }
        }
    };

    const iconVariants = {
        rest: { x: 0, rotate: 0 },
        hover: { 
            x: iconPosition === 'right' ? 2 : iconPosition === 'left' ? -2 : 0,
            rotate: icon === ArrowRight || icon === ChevronRight ? 5 : 0,
            transition: { duration: 0.2 }
        }
    };

    // Render icon
    const renderIcon = (position) => {
        if (!icon || iconPosition !== position) return null;
        
        const IconComponent = icon;
        const iconSize = {
            xs: 'w-3 h-3',
            sm: 'w-4 h-4',
            md: 'w-4 h-4',
            lg: 'w-5 h-5',
            xl: 'w-6 h-6',
            '2xl': 'w-7 h-7'
        };

        return (
            <motion.span
                variants={iconVariants}
                className={`${iconSize[size]} ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}
            >
                <IconComponent className="w-full h-full" />
            </motion.span>
        );
    };

    return (
        <motion.button
            ref={buttonRef}
            type={type}
            onClick={handleClick}
            disabled={disabled || loading}
            className={finalClassName}
            variants={buttonVariants}
            initial="rest"
            whileHover={!disabled ? "hover" : "rest"}
            whileTap={!disabled ? "tap" : "rest"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Ripple Effects */}
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute bg-white bg-opacity-30 rounded-full pointer-events-none"
                    style={{
                        left: ripple.x - 10,
                        top: ripple.y - 10,
                        width: 20,
                        height: 20,
                    }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            ))}

            {/* Glowing Background Effect */}
            {glowing && !disabled && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 animate-pulse" />
            )}

            {/* Loading State */}
            {loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit"
                >
                    <Loader2 className={`animate-spin ${sizes[size].includes('text-xs') ? 'w-3 h-3' : 
                        sizes[size].includes('text-sm') ? 'w-4 h-4' : 
                        sizes[size].includes('text-base') ? 'w-5 h-5' : 
                        sizes[size].includes('text-lg') ? 'w-6 h-6' : 'w-7 h-7'}`} />
                </motion.div>
            )}

            {/* Button Content */}
            <span className={`flex items-center justify-center ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
                {renderIcon('left')}
                <span className="relative z-10">{children}</span>
                {renderIcon('right')}
            </span>

            {/* Hover Glow Effect */}
            {isHovered && !disabled && !ghost && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-inherit"
                />
            )}

            {/* Click Counter for fun */}
            {clickCount > 0 && animated && (
                <motion.div
                    initial={{ scale: 0, y: -10, opacity: 1 }}
                    animate={{ scale: 1, y: -30, opacity: 0 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-bold pointer-events-none"
                >
                    +{clickCount}
                </motion.div>
            )}
        </motion.button>
    );
};

// Export individual button components for convenience
export const PrimaryButton = (props) => <Buttons {...props} variant="primary" />;
export const SecondaryButton = (props) => <Buttons {...props} variant="secondary" />;
export const SuccessButton = (props) => <Buttons {...props} variant="success" />;
export const DangerButton = (props) => <Buttons {...props} variant="danger" />;
export const WarningButton = (props) => <Buttons {...props} variant="warning" />;
export const InfoButton = (props) => <Buttons {...props} variant="info" />;
export const OutlineButton = (props) => <Buttons {...props} outline />;
export const GhostButton = (props) => <Buttons {...props} ghost />;
export const FloatingButton = (props) => <Buttons {...props} floating rounded="full" shadow />;
export const GradientButton = (props) => <Buttons {...props} gradient />;
export const GlowingButton = (props) => <Buttons {...props} glowing />;

export default Buttons;