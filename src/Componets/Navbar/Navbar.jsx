import React, { useState } from 'react';
import "../Navbar/Navbar.css";
import { Link, useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <a href="#">Contact</a>
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

