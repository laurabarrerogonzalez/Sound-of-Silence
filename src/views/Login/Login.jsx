import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const navigate = useNavigate(); // Inicializa la función de navegación

  const handleLoginClick = () => {
    setIsLoginFormSubmitted(true);
    // Redirige al usuario a la página de inicio
    navigate('/home');
  };

  const handleSignUp = () => {
    // Verificar si los campos están vacíos
    const { name, email, password } = userData;
    const newErrorMessages = {
      name: !name ? 'Name is required' : '',
      email: !email ? 'Email is required' : '',
      password: !password ? 'Password is required' : '',
    };

    // Si algún campo está vacío, no procedemos con el registro
    if (!name || !email || !password) {
      setErrorMessages(newErrorMessages);
      return;
    }

    // Crear un nuevo usuario con los datos ingresados
    const newUser = {
      // Id_user : '',
      Name_user: userData.name,
      Email: userData.email,
      Password: userData.password,
      // Id_rol: ''

    };

    // Simular el envío de datos a la "API" falsa (en este caso, al archivo register.json)
    fetch('https://localhost:7134/Users/Post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Usuario registrado:', data);

        // Mostrar SweetAlert cuando la cuenta se crea exitosamente
        Swal.fire('Cuenta creada exitosamente', '', 'success');
      })
      .catch((error) => {
        console.error('Error al registrar el usuario:', error);
      });

    // Limpiar los campos después de registrar al usuario y restablecer los mensajes de error
    setUserData({
      name: '',
      email: '',
      password: '',
    });
    setErrorMessages({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="container-form">
      <video autoPlay loop muted className="video-background">
        <source src="https://res.cloudinary.com/dit2zhtwz/video/upload/v1695463586/The_sea_bugriz.mp4" type="video/mp4" />
      </video>
      <div className="welcome-back">
        {isLoginFormVisible ? (
          <>
            <form className="formulario">
              <h2 className="create-account">Login</h2>
              <input
                type="text"
                placeholder="Name"
              />
              <input
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              {isLoginFormSubmitted ? (
                <input type="button" value="Login" className="custom-color" />
              ) : (
                <input
                  type="button"
                  value="Login"
                  className="custom-color"
                  onClick={handleLoginClick}
                />
              )}
            </form>
            <div className={`message ${isLoginFormVisible ? '' : 'hide'}`}>
              <div className="welcome-text">
                <h2>Welcome to Sound of Silence</h2>
                <p>If you already have an account please login here</p>
              </div>
              <button className="custom-signup-button" onClick={toggleLoginForm}>
                Sign up
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={`message white-text bold-text ${isLoginFormVisible ? 'hide' : ''}`}>
              <div className="welcome-text">
                <h2>Welcome to Sound of Silence</h2>
                <p>If you don't have an account please register here</p>
              </div>
              <button className="custom-color" onClick={toggleLoginForm}>
                Login
              </button>
            </div>
            <form className="formulario white-background">
              <h2 className="create-account">Create an account</h2>
              <p className="cuenta-gratis">Create an account is free</p>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
              <span className="error-message">{errorMessages.name}</span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
              <span className="error-message">{errorMessages.email}</span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
              <span className="error-message">{errorMessages.password}</span>
              <input
                type="button"
                value="Sign up"
                className="custom-signup-button"
                onClick={handleSignUp}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
