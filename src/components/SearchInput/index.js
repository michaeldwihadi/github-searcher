import React from "react";
import "./index.css";

const SearchInput = ({ handleChange, query, handleValidation }) => {
  handleValidation(query);
  return (
    <>
      <input
        type="text"
        name="searchInput"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        className="search-input"
      />
    </>
  );
};

export default SearchInput;
