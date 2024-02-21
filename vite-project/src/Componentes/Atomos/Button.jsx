// components/Atomos/Button.js
import React from 'react';
import './Button.css'; // Importamos los estilos

const Button = ({ type, onClick, children }) => {
  return (
    <div className="button-container">
      <button type={type} onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
