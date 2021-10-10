import React from 'react';

interface IPros extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<IPros> = ({ ...props }) => {
  return <input {...props} />;
};

export default Input;
