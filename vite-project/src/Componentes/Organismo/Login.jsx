// components/Organismos/Login.js
import React from 'react';
import Logo from '../Atomos/Logo'; // Importa el componente de 
import LoginForm from '../Moleculas/LoginForm';


import './Login.css'; // Importamos los estilos

const Login = () => {
  const handleLogin = (credentials) => {
    // Aquí podrías manejar la autenticación
    console.log('Credentials:', credentials);
  };

  return (
    <div>
      <div className="white-bar">
        {/* Agrega la imagen dentro de la franja blanca */}
        <img src="../src/assets/img/Tiktok.png" alt="Imagen" />
        <img src="../src/assets/img/insta.png" alt="Imagen1" />
        <img src="../src/assets/img/facev.png" alt="Imagen2" />


      </div>
      <div className="login-container">
<Logo />
        <h1>AIR MAX</h1>
        <div>
          </div>

        <h2>Iniciar Secion</h2>
        <LoginForm onLogin={handleLogin} />

      </div>
    </div>
  );
};

export default Login;

