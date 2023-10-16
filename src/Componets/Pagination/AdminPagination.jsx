import React, { useState } from 'react';
import '../Pagination/Pagination.css';

const cardsPerPage = 6; // Cambia esto según tus necesidades

function AdminPagination({ currentPage, pageCount, onPageChange }) {
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="previous"
        onClick={handlePreviousPage}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button
        className="next"
        onClick={handleNextPage}
        disabled={currentPage + 1 >= pageCount}
      >
        Next
      </button>
    </div>
  );
}

export default AdminPagination;



