import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          disabled={currentPage === pageNumber}
        >
          {pageNumber}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;