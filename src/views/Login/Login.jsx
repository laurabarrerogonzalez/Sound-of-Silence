import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';



const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isForgotPasswordModalVisible, setIsForgotPasswordModalVisible] = useState(false);
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const [isPasswordResetConfirmed, setIsPasswordResetConfirmed] = useState(false);

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalVisible(true);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalVisible(false);
    setIsPasswordResetConfirmed(false);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    openForgotPasswordModal();
    setIsPasswordResetConfirmed(true);
  };

  const loginDataInitialState = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginDataInitialState);

  const errorMessagesLoginDataInitialState = {
    email: "",
    password: "",
  };
  const [errorMessagesLogin, setErrorMessagesLogin] = useState(
    errorMessagesLoginDataInitialState
  );

  const createAccountDataInitialState = {
    Name_user: "",
    email: "",
    password: "",
  };

  const [createAccountData, setCreateAccountData] = useState(
    createAccountDataInitialState
  );

  const errorMessagesInitialState = {
    Name_user: "",
    email: "",
    password: "",
  };
  const [errorMessages, setErrorMessages] = useState(errorMessagesInitialState);

  const navigate = useNavigate();

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };


  const handleLoginSubmit = async () => {
    const { email, password } = loginData;

    const newErrorMessages = {
      email: !email ? "Email is required" : "",
      password: !password ? "Password is required" : "",
    };

    if (!email || !password) {
      setErrorMessagesLogin(newErrorMessages);
      return;
    }

    try {
      const url = "https://localhost:7134/Users/Login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setErrorMessagesLogin(true);
        const responseData = await response.json();
        const userRole = responseData.role;
        if (userRole === 1) {
          navigate('/admin');
        } else if (userRole === 2) {
          navigate('/subscribe');

        } else {
          Swal.fire("Error", "Usuario no autorizado", "error");
        }
      } else {
        setErrorMessagesLogin("Credenciales incorrectas");
        Swal.fire("Error", "Usuario no existente", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Ha ocurrido un error en el servidor", "error");
    } finally {
      // Limpia los campos después del inicio de sesión y restablece los mensajes de error
      setLoginData({
        email: "",
        password: "",
      });
      setErrorMessagesLogin({
        email: "",
        password: "",
      });

      // Establece isLoginFormSubmitted en false para habilitar el botón de inicio de sesión
      setIsLoginFormSubmitted(false);
    }
  };

  const handleCreateAccountSubmit = async () => {
    const { Name_user, email, password } = createAccountData;
    const newErrorMessages = {
      Name_user: !Name_user ? "Name is required" : "",
      email: !email ? "Email is required" : "",
      password: !password ? "Password is required" : "",
    };
    if (!Name_user || !email || !password) {
      setErrorMessages(newErrorMessages);
      return;
    }
    try {
      const url = "https://localhost:7134/Users/Post";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name_user, email, password }),
      });
      if (response.ok) {
        Swal.fire("Cuenta creada exitosamente", "", "success");
      } else if (response.status === 400) {
        const errorMessage = await response.text();
        Swal.fire("Error", errorMessage, "error");
      } else {
        Swal.fire("Error", "No se pudo crear la cuenta", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Ha ocurrido un error en el servidor", "error");
    }
    // Limpia los campos después del inicio de sesión y restablece los mensajes de error
    setCreateAccountData({
      Name_user: "",
      email: "",
      password: "",
    });
    setErrorMessages({
      Name_user: "",
      email: "",
      password: "",
    });
  };


  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleCreateAccountInputChange = (e) => {
    const { name, value } = e.target;
    setCreateAccountData({
      ...createAccountData,
      [name]: value,
    });
  };

  return (
    <div id="ContainerLogin">
      <div className="container-form">
        <video autoPlay loop muted className="video-background">
          <source
            src="https://res.cloudinary.com/dit2zhtwz/video/upload/v1695463586/The_sea_bugriz.mp4"
            type="video/mp4"
          />
        </video>
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dqc0wvttr/image/upload//e_improve,e_sharpen/v1695634508/Captura_de_pantalla_2023-09-23_215716_nqz4vb-removebg-preview_lwpq0u.png"
            alt="Logo"
            className="logoLogin"
          />
        </div>
        <div className="welcome-back">
          {isLoginFormVisible ? (
            <>
              <form className="formulario">
                <h2 className="create-account">Login</h2>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                />
                <span className="error-message">{errorMessagesLogin.email}</span>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                />
                <span className="error-message">{errorMessagesLogin.password}</span>
                {isLoginFormSubmitted ? (
                  <input type="button" value="Login" className="custom-color" />
                ) : (
                  <input
                    type="button"
                    value="Login"
                    className="custom-color"
                    onClick={handleLoginSubmit}
                  />
                )}
                <div className='password-reseet'>
                <a href="#" onClick={handleForgotPassword}>I do not remember my password
</a>
                </div>
              </form>
              <div className={`message ${isLoginFormVisible ? "" : "hide"}`}>
                <div className="welcome-text">
                  <h2>Welcome to Sound of Silence</h2>
                  <p>If you don't have an account, please register here</p>
                  <button className="custoom-signup-button" onClick={toggleLoginForm}>
                    Sign up
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={`message white-text bold-text ${isLoginFormVisible ? "hide" : ""}`}
              >
                <div className="welcome-text">
                  <h2>Welcome to Sound of Silence</h2>
                  <p>If you already have an account, please login here</p>
                  <button className="custoom-color" onClick={toggleLoginForm}>
                    Login
                  </button>
                </div>
              </div>
              <form className="formularioo">
                <h2 className="create-account">Create an account</h2>
                <p className="cuenta-gratis">Create an account is free</p>
                <input
                  type="text"
                  placeholder="Name"
                  name="Name_user"
                  value={createAccountData.Name_user}
                  onChange={handleCreateAccountInputChange}
                />
                <span className="error-message">{errorMessages.Name_user}</span>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={createAccountData.email}
                  onChange={handleCreateAccountInputChange}
                />
                <span className="error-message">{errorMessages.email}</span>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={createAccountData.password}
                  onChange={handleCreateAccountInputChange}
                />
                <span className="error-message">{errorMessages.password}</span>
                {isLoginFormSubmitted ? (
                  <input
                    type="button"
                    value="Sign up"
                    className="customm-signup-button"
                  />
                ) : (
                  <input
                    type="button"
                    value="Sign up"
                    className="custom-signup-button"
                    onClick={handleCreateAccountSubmit}
                  />
                )}
              </form>
            </>
          )}
        </div>
      </div>

      {isForgotPasswordModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeForgotPasswordModal}>
              &times;
            </span>
            {/* Contenido del modal de recuperación de contraseña */}
            <h2 className='modal-h2'>Forgot Password</h2>
            <p>Please enter your email to reset your password.</p>
            <input className='modal-input' type="email" placeholder="Email" />
            <button className='modal-button'>Reset Password</button>
          </div>
        </div>
      )}
      {isPasswordResetConfirmed && (
        <div className="confirmation-message">
          <p>Password reset email has been sent to your email address.</p>
        </div>
      )}

    </div>
  );
};

export default Login;