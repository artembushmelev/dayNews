import React from "react";
import styles from "./styles.module.css";

export const Pagination = ({ totalPage, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} className={styles.arrow} disabled={currentPage <= 1}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              className={index + 1 === currentPage ? styles.pageNumberActive : styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button onClick={handleNextPage} className={styles.arrow} disabled={currentPage >= totalPage}>
        {">"}
      </button>
    </div>
  );
};
