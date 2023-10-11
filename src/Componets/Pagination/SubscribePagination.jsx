import React, { useState } from 'react';
import "../../Pagination/Pagination.css";

const subscribersPerPage = 6; // Cambia esto según tus necesidades
const subscribers = [/* Tus datos de suscriptores aquí */]; // Asegúrate de tener un array de suscriptores

function SubscribePagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * subscribersPerPage;
  const endIndex = startIndex + subscribersPerPage;
  const subscribersToShow = subscribers.slice(startIndex, endIndex);

  return (
    <div>
      {subscribersToShow.map((subscriber) => (
        <div key={subscriber.id} className="subscriber-card">
          <p>{subscriber.name}</p>
          {/* Otros detalles del suscriptor */}
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
          disabled={endIndex >= subscribers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SubscribePagination;


