
// // import React, { useState, useEffect } from 'react'; 
// // import Footer from "../../Componets/Footer/Footer.jsx";
// // import './Subscribe.css'
// // import '../Admin/Admin.css'
// // import Navbar from "../../Componets/Navbar/Navbar.jsx";


// // const Subscribe = () => {


// //   return (
// // <>
// // <Navbar />

// //   <h1>Holaaaaaaa</h1>

// // <Footer />
// // </>
// //   );
// //           }
// // export default Subscribe;





// // import React, { useState } from 'react';
// // import Navbar from "../../Componets/Navbar/Navbar";
// // import Footer from "../../Componets/Footer/Footer.jsx";
// // import Home from "../../Home/Home";
// // import './Subscribe.css';

// // const Subscribe = () => {
// //   const [isNavbarOpen, setIsNavbarOpen] = useState(true);

// //   const handleNavbarToggle = () => {
// //     setIsNavbarOpen(!isNavbarOpen);
// //   };

// //   return (
// //     <>
// //       <Navbar isOpen={isNavbarOpen} selected="home" />
// //       <div className={`content ${isNavbarOpen ? 'content-open' : ''}`}>
// //         {isNavbarOpen && <Home />} {/* Mostrar Home solo cuando el Navbar esté abierto */}
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Subscribe;



// import React, { useState } from 'react';
// import Navbar from "../../Componets/Navbar/Navbar";
// import Footer from "../../Componets/Footer/Footer.jsx";
// import Home from "../../Home/Home";

// import './Subscribe.css';
// import Favorites from '../../Componets/Favorites/Favorites';

// const Subscribe = () => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(true);
//   const [selectedPage, setSelectedPage] = useState("home");

//   const handleNavbarToggle = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   const navigateTo = (page) => {
//     setSelectedPage(page);
//   };

//   return (
//     <div className="subscribe-container">
//       <Navbar isOpen={isNavbarOpen} selected={selectedPage} onToggle={handleNavbarToggle} onNavigate={navigateTo} />
//       <div className={`content ${isNavbarOpen ? 'content-open' : ''}`}>
//         {selectedPage === 'home' && <Home />}
//         {selectedPage === 'favorites' && <Favorites />}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Subscribe;






import React, { useState } from 'react';
import Home from '../../Home/Home';



const Subscribe = () => {

  return (
    <>
        <Home />
    </>
  );
}

export default Subscribe;
