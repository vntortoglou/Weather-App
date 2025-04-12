import React from 'react';

const Button = ({ label, onClick, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
