// components/Atomos/FacebookLoginButton.js
import React from 'react';
import facebookLogo from '../../assets/img/facev.png';
import './FacebookLoginButton.css'; // Importa los estilos CSS

// import { useAuth } from "../contexts/AuthContext";
const FacebookLoginButton = ({ onClick }) => {
  return (
    <button className="facebook-login-button" onClick={onClick}>
      <img src={facebookLogo} alt="Facebook Logo" style={{ width: '24px' }} /> {/* Ajusta el tamaño de la imagen aquí */}
      Registrar con Facebook
    </button>
  );
};

export default FacebookLoginButton;
