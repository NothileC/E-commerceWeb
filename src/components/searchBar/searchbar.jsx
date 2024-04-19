import React from 'react';
import './searchbar.css';

const SearchBar = () => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor="searchQueryInput">
        Search Item
      </label>
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          className="searchInput"
        />
        <button
          id="searchQuerySubmit"
          type="submit"
          name="searchQuerySubmit"
          className="searchButton"
        >

        </button>
      </div>
    </div>
  );
};

export default SearchBar;
