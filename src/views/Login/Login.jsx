import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    Name_user: '', // Agregado para el nombre de usuario
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    Name_user: '', // Agregado para el nombre de usuario
    email: '',
    password: '',
  });

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const navigate = useNavigate(); // Inicializa la función de navegación

  const handleSubmit = () => {
    setIsLoginFormSubmitted(true);

    // Determinar la URL a la que se enviarán los datos según el formulario actual
    const url = isLoginFormVisible
      ? 'https://localhost:7134/Users/Login'
      : 'https://localhost:7134/Users/Post'; // URL adaptada para ambos formularios

    // Verificar si los campos están vacíos
    const { Name_user, email, password } = userData;
    const newErrorMessages = {
      Name_user: !Name_user ? 'Name is required' : '', // Cambiado a 'Name_user'
      email: !email ? 'Email is required' : '',
      password: !password ? 'Password is required' : '',
    };

    // Si algún campo está vacío, no procedemos con el envío de datos
    if (!Name_user || !email || !password) {
      setErrorMessages(newErrorMessages);
      return;
    }

    const requestData = {
      Name_user: userData.Name_user, // Cambiado a 'Name_user'
      Email: userData.email,
      Password: userData.password,
    };

    // Simular el envío de datos al servidor
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // Mostrar SweetAlert cuando la acción se completa exitosamente
        if (isLoginFormVisible) {
          Swal.fire('Inicio de sesión exitoso', '', 'success');
        } else {
          Swal.fire('Cuenta creada exitosamente', '', 'success');
        }

        // Redirigir al usuario a la página de inicio o a donde desees
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire('Error', 'Ha ocurrido un error en el servidor', 'error');
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
      <div className="logo-container">
        <img src="https://res.cloudinary.com/dqc0wvttr/image/upload//e_improve,e_sharpen/v1695634508/Captura_de_pantalla_2023-09-23_215716_nqz4vb-removebg-preview_lwpq0u.png" alt="Logo" className="logo" />
      </div>

      <div className="welcome-back">
        {isLoginFormVisible ? (
          <>
            <form className="formulario">
              <h2 className="create-account">Login</h2>
              <input
                type="text"
                placeholder="Name"
                name="Name_user" // Cambiado a 'Name_user'
                value={userData.Name_user} // Cambiado a 'Name_user'
                onChange={handleInputChange}
              />
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
              {isLoginFormSubmitted ? (
                <input type="button" value="Login" className="custom-color" />
              ) : (
                <input
                  type="button"
                  value="Login"
                  className="custom-color"
                  onClick={handleSubmit}
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
                name="Name_user" // Cambiado a 'Name_user'
                value={userData.Name_user} // Cambiado a 'Name_user'
                onChange={handleInputChange}
              />
              <span className="error-message">{errorMessages.Name_user}</span> {/* Cambiado a 'Name_user' */}
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
                onClick={handleSubmit}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

