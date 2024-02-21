// components/Moleculas/LoginForm.js
import React, { useState } from 'react';
import Button from '../Atomos/Button';
import FacebookLoginButton from '../Atomos/FacebookLoginButton'; // Importa el componente FacebookLoginButton
import GoogleLoginButton from '../Atomos/GoogleLoginButton'; // Importa el componente GoogleLoginButton

import Input from '../Atomos/Input';

import './LoginForm.css'; // Importamos los estilos

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Estado para el cuadro de verificación

  const handleLogin = () => {
    // Aquí podrías agregar la lógica de autenticación
    onLogin({ username, password });
  };

  // Función manejadora para el inicio de sesión con Google
  const handleGoogle = () => {
    // Aquí podrías implementar la lógica para iniciar sesión con Google
  };

  // Función manejadora para el inicio de sesión con Facebook
  const handleFacebook = () => {
    // Aquí podrías implementar la lógica para iniciar sesión con Facebook
  };

  return (
    <div className="login-form-container">
      <div className="login-buttons-container"> {/* Contenedor adicional para los botones */}
        <GoogleLoginButton onClick={handleGoogle} /> {/* Utiliza el componente GoogleLoginButton */}
        <FacebookLoginButton onClick={handleFacebook} /> {/* Utiliza el componente FacebookLoginButton */}
      </div>
      <Input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="additional-options">
        <p><a href="#">¿Olvidaste la contraseña?</a></p> {/* Enlace para olvidar la contraseña */}
        <label>
          <input type="checkbox" checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} />
          Acepto los términos y condiciones
        </label>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default LoginForm;
