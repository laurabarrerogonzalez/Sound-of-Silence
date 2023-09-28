import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    Name_user: '',
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    Name_user: '',
    email: '',
    password: '',
  });
  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoginFormSubmitted(true);
    const { Name_user, email, password } = userData;
    const newErrorMessages = {
      Name_user: !Name_user ? 'Name is required' : '',
      email: !email ? 'Email is required' : '',
      password: !password ? 'Password is required' : '',
    };

    if (!Name_user || !email || !password) {
      setErrorMessages(newErrorMessages);
      return;
    }

    try {
      const response = await fetch('https://localhost:7134/Users/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // La autenticación fue exitosa, obtén el rol del usuario desde la respuesta JSON
        const responseData = await response.json();
        const userRole = responseData.role; // Asegúrate de que el servidor envíe el rol en la respuesta JSON

        if (userRole === 1) {
          navigate('/admin');
        } else if (userRole === 2) {
          navigate('/subscribe');
        } else {
          Swal.fire('Error', 'Usuario no autorizado', 'error');
        }
      } else {
        Swal.fire('Error', 'Credenciales incorrectas', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error', 'Ha ocurrido un error en el servidor', 'error');
    }
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