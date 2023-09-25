import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
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
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="button" value="Login" className="custom-color" />
            </form>
            <div className={`message ${isLoginFormVisible ? '' : 'hide'}`}>
              <div className="welcome-text">
                <h2>Welcome to Sound of Silence</h2>
                <p>If you already have an account please login here</p>
              </div>
              <button className="sign-up-btn" onClick={toggleLoginForm}>
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
              <button className="sign-up-btn custom-color larger-button" onClick={toggleLoginForm}>
                Login
              </button>
            </div>
            <form className="formulario white-background">
              <h2 className="create-account">Create an account</h2>
              <p className="cuenta-gratis">Create an account is free</p>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="button" value="Sign up" className="custom-signup-button" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;