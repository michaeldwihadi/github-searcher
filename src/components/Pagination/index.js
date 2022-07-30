import React from "react";
import "./index.css";

const Pagination = ({ page, setPage, total, limit }) => {
  const goToFirstPage = () => setPage(1);

  const goToLastPage = () => setPage(getLastPage());

  const incrementPage = () => page < getLastPage() && setPage(page + 1);

  const decrementPage = () => page > 1 && setPage(page - 1);

  const atFirstPage = () => page === 1;

  const atLastPage = () => page === getLastPage();

  const getLastPage = () => Math.ceil(total / limit);

  return (
    <div className="paginationContainer">
      <button
        className="paginationFirstPageButton"
        onClick={() => goToFirstPage()}
        disabled={atFirstPage()}
      >
        <p>First Page</p>
      </button>
      <button
        className="paginationButton"
        onClick={() => decrementPage()}
        disabled={atFirstPage()}
      >
        <p>Previous</p>
      </button>
      <label className="paginationLabel">{page}</label>
      <button
        className="paginationButton"
        onClick={incrementPage}
        disabled={atLastPage()}
      >
        <p>Next</p>
      </button>
      <button
        className="paginationLastPageButton"
        onClick={goToLastPage}
        disabled={atLastPage()}
      >
        <p>Last Page</p>
      </button>
    </div>
  );
};

export default Pagination;
