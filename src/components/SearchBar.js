import React from "react";

const SearchBar = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba ba--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
