// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './Login.css';

// // const Login = () => {
// //   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
// //   const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);

// //   const toggleLoginForm = () => {
// //     setIsLoginFormVisible(!isLoginFormVisible);
// //   };

// //   const handleLoginClick = () => {
// //     setIsLoginFormSubmitted(true);
// //   };

// //   return (
// //     <div className="container-form">
// //       <video autoPlay loop muted className="video-background">
// //         <source src="https://res.cloudinary.com/dit2zhtwz/video/upload/v1695463586/The_sea_bugriz.mp4" type="video/mp4" />
// //       </video>
// //       <div className="welcome-back">
// //         {isLoginFormVisible ? (
// //           <>
// //             <form className="formulario">
// //               <h2 className="create-account">Login</h2>
// //               <input type="text" placeholder="Name" />
// //               <input type="email" placeholder="Email" />
// //               <input type="password" placeholder="Password" />
// //               {isLoginFormSubmitted ? (
// //                 <Link to="/home">
// //                   <input type="button" value="Login" className="custom-color" />
// //                 </Link>
// //               ) : (
// //                 <input
// //                   type="button"
// //                   value="Login"
// //                   className="custom-color"
// //                   onClick={handleLoginClick}
// //                 />
// //               )}
// //             </form>
// //             <div className={`message ${isLoginFormVisible ? '' : 'hide'}`}>
// //               <div className="welcome-text">
// //                 <h2>Welcome to Sound of Silence</h2>
// //                 <p>If you already have an account please login here</p>
// //               </div>
// //               <button className="sign-up-btn" onClick={toggleLoginForm}>
// //                 Sign up
// //               </button>
// //             </div>
// //           </>
// //         ) : (
// //           <>
// //             <div className={`message white-text bold-text ${isLoginFormVisible ? 'hide' : ''}`}>
// //               <div className="welcome-text">
// //                 <h2>Welcome to Sound of Silence</h2>
// //                 <p>If you don't have an account please register here</p>
// //               </div>
// //               <button className="sign-up-btn custom-color larger-button" onClick={toggleLoginForm}>
// //                 Login
// //               </button>
// //             </div>
// //             <form className="formulario white-background">
// //               <h2 className="create-account">Create an account</h2>
// //               <p className="cuenta-gratis">Create an account is free</p>
// //               <input type="text" placeholder="Name" />
// //               <input type="email" placeholder="Email" />
// //               <input type="password" placeholder="Password" />
// //               <input type="button" value="Sign up" className="custom-signup-button" />
// //             </form>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;





// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
//   const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const toggleLoginForm = () => {
//     setIsLoginFormVisible(!isLoginFormVisible);
//   };

//   const handleLoginClick = () => {
//     setIsLoginFormSubmitted(true);
//   };

//   const handleSignUp = () => {
//     // Crear un nuevo usuario con los datos ingresados
//     const newUser = {
//       name: userData.name,
//       email: userData.email,
//       password: userData.password,
//     };

//     // Enviar la solicitud POST al servidor para guardar los datos en el archivo
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
//       })
//       .catch((error) => {
//         console.error('Error al registrar el usuario:', error);
//       });

//     // Limpiar los campos después de registrar al usuario
//     setUserData({
//       name: '',
//       email: '',
//       password: '',
//     });

//     // Mostrar el formulario de inicio de sesión después del registro
//     setIsLoginFormVisible(true);
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
//       <div className="welcome-back">
//         {isLoginFormVisible ? (
//           <>
//             <form className="formulario">
//               <h2 className="create-account">Login</h2>
//               <input type="text" placeholder="Name" />
//               <input type="email" placeholder="Email" />
//               <input type="password" placeholder="Password" />
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
//               <button className="sign-up-btn" onClick={toggleLoginForm}>
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
//               <button className="sign-up-btn custom-color larger-button" onClick={toggleLoginForm}>
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
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={userData.password}
//                 onChange={handleInputChange}
//               />
//               <input type="button" value="Sign up" className="custom-signup-button" onClick={handleSignUp} />
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import './Login.css';

const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const handleLoginClick = () => {
    setIsLoginFormSubmitted(true);
  };

  const handleSignUp = () => {
    // Crear un nuevo usuario con los datos ingresados
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    // Simular el envío de datos a la "API" falsa (en este caso, al archivo register.json)
    fetch('http://localhost:3000/users', {
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

    // Limpiar los campos después de registrar al usuario
    setUserData({
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
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
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
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
              <input type="button" value="Sign up" className="custom-signup-button" onClick={handleSignUp} />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
