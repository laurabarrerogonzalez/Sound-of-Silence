// import React from 'react';
// import { createRoot } from 'react-dom';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './views/Login/Login.jsx';
// import Subscribe from './views/Login/Subscribe/Subscribe.jsx';


// const root = document.getElementById('root');
// const reactRoot = createRoot(root);

// reactRoot.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/subscribe" element={<Subscribe />} />
//       <Route path="/*" element={<Navigate to="/" />} />
//     </Routes>
//   </BrowserRouter>
// );


import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './views/Login/Login.jsx';
import Subscribe from './views/Login/Subscribe/Subscribe.jsx';
import Admin from './views/Admin/Admin.jsx';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
