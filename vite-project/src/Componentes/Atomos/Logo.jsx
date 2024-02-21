// components/Atomos/Logo.js
import React from 'react';
import logoImage from '../../assets/img/product.png'; // Importa la imagen principal del logo
import logoIcon from '../../assets/img/recti.png'; // Importa la imagen adicional del logo
// Componente que renderiza el Logo de Atomos
import './Logo.css'; // Importa el archivo CSS del logo



const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo-main" />
      <img src={logoIcon} alt="Icono" className="logo-icon" />
    </div>
  );
};

export default Logo;
