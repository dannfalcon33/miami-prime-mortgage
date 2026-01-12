import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-none font-semibold transition-all duration-300 tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-950 border border-blue-900",
    secondary: "bg-white text-blue-900 hover:bg-gray-100 border border-white",
    outline: "bg-transparent text-white border border-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};