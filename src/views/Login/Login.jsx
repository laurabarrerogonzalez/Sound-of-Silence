// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
//   const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [errorMessages, setErrorMessages] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const toggleLoginForm = () => {
//     setIsLoginFormVisible(!isLoginFormVisible);
//   };

//   const navigate = useNavigate(); // Inicializa la función de navegación

//   const handleLoginClick = () => {
//     setIsLoginFormSubmitted(true);
//     // Redirige al usuario a la página de inicio
//     navigate('/home');
//   };


//   const handleSignUp = () => {
//     // Verificar si los campos están vacíos
//     const { name, email, password } = userData;
//     const newErrorMessages = {
//       name: !name ? 'Name is required' : '',
//       email: !email ? 'Email is required' : '',
//       password: !password ? 'Password is required' : '',
//     };

//     // Si algún campo está vacío, no procedemos con el registro
//     if (!name || !email || !password) {
//       setErrorMessages(newErrorMessages);
//       return;
//     }

//     // Crear un nuevo usuario con los datos ingresados
//     const newUser = {
//       // Id_user : '',
//       Name_user: userData.name,
//       Email: userData.email,
//       Password: userData.password,
//       // Id_rol: ''

//     };

//     // Simular el envío de datos a la "API" falsa (en este caso, al archivo register.json)
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Usuario registrado:', data);

//         // Mostrar SweetAlert cuando la cuenta se crea exitosamente
//         Swal.fire('Cuenta creada exitosamente', '', 'success');
//       })
//       .catch((error) => {
//         console.error('Error al registrar el usuario:', error);
//       });

//     // Limpiar los campos después de registrar al usuario y restablecer los mensajes de error
//     setUserData({
//       name: '',
//       email: '',
//       password: '',
//     });
//     setErrorMessages({
//       name: '',
//       email: '',
//       password: '',
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="container-form">
//       <video autoPlay loop muted className="video-background">
//         <source src="https://res.cloudinary.com/dit2zhtwz/video/upload/v1695463586/The_sea_bugriz.mp4" type="video/mp4" />
//       </video>
//       <div className="logo-container">
//         <img src="https://res.cloudinary.com/dqc0wvttr/image/upload//e_improve,e_sharpen/v1695634508/Captura_de_pantalla_2023-09-23_215716_nqz4vb-removebg-preview_lwpq0u.png" alt="Logo" className="logo" />
//       </div>

//       <div className="welcome-back">
//         {isLoginFormVisible ? (
//           <>
//             <form className="formulario">
//               <h2 className="create-account">Login</h2>
//               <input
//                 type="email"
//                 placeholder="Email"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//               />
//               {isLoginFormSubmitted ? (
//                 <input type="button" value="Login" className="custom-color" />
//               ) : (
//                 <input
//                   type="button"
//                   value="Login"
//                   className="custom-color"
//                   onClick={handleLoginClick}
//                 />
//               )}
//             </form>
//             <div className={`message ${isLoginFormVisible ? '' : 'hide'}`}>
//               <div className="welcome-text">
//                 <h2>Welcome to Sound of Silence</h2>
//                 <p>If you already have an account please login here</p>
//               </div>
//               <button className="custom-signup-button" onClick={toggleLoginForm}>
//                 Sign up
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className={`message white-text bold-text ${isLoginFormVisible ? 'hide' : ''}`}>
//               <div className="welcome-text">
//                 <h2>Welcome to Sound of Silence</h2>
//                 <p>If you don't have an account please register here</p>
//               </div>
//               <button className="custom-color" onClick={toggleLoginForm}>
//                 Login
//               </button>
//             </div>
//             <form className="formulario white-background">
//               <h2 className="create-account">Create an account</h2>
//               <p className="cuenta-gratis">Create an account is free</p>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={userData.name}
//                 onChange={handleInputChange}
//               />
//               <span className="error-message">{errorMessages.name}</span>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleInputChange}
//               />
//               <span className="error-message">{errorMessages.email}</span>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={userData.password}
//                 onChange={handleInputChange}
//               />
//               <span className="error-message">{errorMessages.password}</span>
//               <input
//                 type="button"
//                 value="Sign up"
//                 className="custom-signup-button"
//                 onClick={handleSignUp}
//               />
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const [loginError, setLoginError] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     const { email, password } = loginData;

//     // Validar que se haya ingresado un correo electrónico y contraseña
//     if (!email || !password) {
//       setLoginError({
//         email: !email ? 'Email is required' : '',
//         password: !password ? 'Password is required' : '',
//       });
//       return;
//     }

//     // Leer el archivo register.json y verificar si el usuario existe
//     fetch('register.json') // Asumiendo que el archivo register.json está en la misma ubicación que este archivo
//       .then((response) => response.json())
//       .then((data) => {
//         const userExists = data.users.some((user) => user.email === email && user.password === password);

//         if (userExists) {
//           // Usuario válido, redirige al usuario a la página de inicio
//           navigate('/home');
//         } else {
//           // Usuario no encontrado, muestra un mensaje de error
//           Swal.fire('El usuario no existe', '', 'error');
//         }
//       })
//       .catch((error) => {
//         console.error('Error al verificar el usuario:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="container-form">
//       {/* Resto del código HTML que tenías en el return */}
//       {/* ... */}
//       <form className="formulario">
//         <h2 className="create-account">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={loginData.email}
//           onChange={handleInputChange}
//         />
//         <span className="error-message">{loginError.email}</span>
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={loginData.password}
//           onChange={handleInputChange}
//         />
//         <span className="error-message">{loginError.password}</span>
//         <input
//           type="button"
//           value="Login"
//           className="custom-color"
//           onClick={handleLoginClick}
//         />
//       </form>
//       {/* Resto del código HTML que tenías en el return */}
//       {/* ... */}
//     </div>
//   );
// };

// export default Login;

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

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState({
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

  const handleLogin = () => {
    const { email, password } = loginData;

    // Validar que se haya ingresado un correo electrónico y contraseña
    if (!email || !password) {
      setLoginError({
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
      });
      return;
    }

    // Leer el archivo register.json y verificar si el usuario existe
    fetch('register.json') // Asumiendo que el archivo register.json está en la misma ubicación que este archivo
      .then((response) => response.json())
      .then((data) => {
        const userExists = data.users.some((user) => user.email === email && user.password === password);

        if (userExists) {
          // Usuario válido, redirige al usuario a la página de inicio
          navigate('/home');
        } else {
          // Usuario no encontrado, muestra un mensaje de error
          Swal.fire('El usuario no existe', '', 'error');
        }
      })
      .catch((error) => {
        console.error('Error al verificar el usuario:', error);
      });
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
      Name_user: userData.name,
      Email: userData.email,
      Password: userData.password,
    };

    // Simular el envío de datos a la "API" falsa (en este caso, al archivo register.json)
    // fetch('http://localhost:3000/users', {
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
      <div className="logo-container">
        <img src="https://res.cloudinary.com/dqc0wvttr/image/upload//e_improve,e_sharpen/v1695634508/Captura_de_pantalla_2023-09-23_215716_nqz4vb-removebg-preview_lwpq0u.png" alt="Logo" className="logo" />
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
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <span className="error-message">{loginError.email}</span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <span className="error-message">{loginError.password}</span>
              {isLoginFormSubmitted ? (
                <input type="button" value="Login" className="custom-color" />
              ) : (
                <input
                  type="button"
                  value="Login"
                  className="custom-color"
                  onClick={handleLogin}
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
