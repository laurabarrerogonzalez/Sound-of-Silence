import React from "react";
import '../Admin/Admin.css';
import Card from "../../Componets/Header/CardFiles";
import Header from "../../Componets/Header/Header.jsx"
import Footer from "../../Componets/Footer/Footer.jsx"
import AdminPagination from "../../Componets/Pagination/Adminpagination.jsx";

const Admin = () => {
    return (
        <>
            <Header />
            <h1>Hola, ¿cómo estás?</h1>
            <Card />
            <AdminPagination />
            <Footer />
        </>
    );
};

export default Admin;

