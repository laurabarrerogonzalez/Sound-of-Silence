import React, { useState } from 'react';
import "../../Pagination/Pagination.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

const itemsPerPage = 1; // Cambia esto según tus necesidades
const adminData = [/* Tus datos de administradores aquí */]; // Asegúrate de tener un array de datos de administradores

function AdminPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = adminData.slice(startIndex, endIndex);

  return (
    <div>
      {itemsToShow.map((admin) => (
        <div key={admin.id} className="admin-item">
          <p>{admin.name}</p>
          {/* Otros detalles del administrador */}
        </div>
      ))}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= adminData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AdminPagination;


