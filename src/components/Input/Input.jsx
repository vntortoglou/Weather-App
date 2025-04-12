import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, className, name, id, required = false }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
      name={name}
      id={id}
      required={required}
    />
  );
};

export default Input;
