import React from "react";
import "./pagination.css"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;


