import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './views/Login/Login.jsx';
import Subscribe from './views/Subscribe/Subscribe.jsx';
import Admin from './views/Admin/Admin.jsx';
import Home from './Componets/Home/Home.jsx';
import Favorites from './Componets/Favorites/Favorites.jsx';
import Relax from './Componets/Relax/Relax.jsx';



const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/relax" element={<Relax/>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
