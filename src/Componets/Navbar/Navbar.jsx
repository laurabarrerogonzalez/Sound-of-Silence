// import React, { useState, useEffect } from 'react';
// import "../Navbar/Navbar.css";
// import { Link, useNavigate, useLocation } from 'react-router-dom'; 
// import Swal from 'sweetalert2';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState(null);

//   // Establecer el enlace activo en función de la ubicación actual.
//   useEffect(() => {
//     if (location.pathname === '/home') {
//       setActiveLink('home');
//     } else if (location.pathname === '/favorites') {
//       setActiveLink('favorites');
//     } else if (location.pathname === '/relax') {
//       setActiveLink('relax');
//     } else {
//       setActiveLink(null);
//     }
//   }, [location.pathname]);

//   const handleLogout = () => {
//     Swal.fire({
//       title: 'Are you sure you want to log out?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, log out',
//       cancelButtonText: 'Cancel',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate('/login', { replace: true }); 
//       }
//     });
//   };

//   return (
//     <div className="navbar">
//       <div className="nav_logo">
//         <img
//           src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1696868827/Captura_de_pantalla_2023-09-19_175013-removebg-preview-removebg-preview_jtyh40.png"
//           alt="Logo de tu empresa"
//         />
//       </div>
//       <div className={`nav_items ${isOpen && "open"}`}>
//         <Link to="/home" className={activeLink === 'home' ? 'active' : ''}>Home</Link>
//         <Link to="/favorites" className={activeLink === 'favorites' ? 'active' : ''}>Favorites</Link>
//         <Link to="/relax" className={activeLink === 'relax' ? 'active' : ''}>Relaxation techniques</Link>
       
//         <button onClick={handleLogout} className='Logout'>Log out</button>
//       </div>
//       <div
//         className={`nav_toggle ${isOpen && "open"}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import "../Navbar/Navbar.css";
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home'); // Establecer inicialmente en 'home'

  // Establecer el enlace activo en función de la ubicación actual.
  useEffect(() => {
    if (location.pathname === '/home') {
      setActiveLink('home');
    } else if (location.pathname === '/favorites') {
      setActiveLink('favorites');
    } else if (location.pathname === '/relax') {
      setActiveLink('relax');
    }
  }, [location.pathname]);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', { replace: true }); 
      }
    });
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img
          src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1696868827/Captura_de_pantalla_2023-09-19_175013-removebg-preview-removebg-preview_jtyh40.png"
          alt="Logo de tu empresa"
        />
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/home" className={activeLink === 'home' ? 'active' : ''}>Home</Link>
        <Link to="/favorites" className={activeLink === 'favorites' ? 'active' : ''}>Favorites</Link>
        <Link to="/relax" className={activeLink === 'relax' ? 'active' : ''}>Relaxation techniques</Link>
       
        <button onClick={handleLogout} className='Logout'>Log out</button>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
