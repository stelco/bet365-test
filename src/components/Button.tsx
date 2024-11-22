import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: string; // Add icon prop
  buttonColor?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, icon, buttonColor }) => {
  const handleClick = () => {
    console.log('Button clicked');
    onClick();
  };

  return (
    <button
        type="button"
        className="button text"
        style={buttonColor ? { backgroundColor: buttonColor } : {}}
        onClick={handleClick}
    >
      {icon && <img src={icon} alt="button icon" className="__icon" />} {/* Render icon if provided */}
      {children}
    </button>
  );
};

export default Button;