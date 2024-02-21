// components/Atomos/GoogleLoginButton.js
import React from 'react';
import googleLogo from '../../assets/img/Google.jpg';
import './GoogleLoginButton.css'; // Importa los estilos CSS

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button className="google-login-button" onClick={onClick}>
      <img src={googleLogo} alt="Google Logo" style={{ width: '24px' }} /> {/* Ajusta el tamaño de la imagen aquí */}
      Registrar con Google
    </button>
  );
};

export default GoogleLoginButton;
