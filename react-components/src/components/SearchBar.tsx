import React from 'react';
import './SearchBar.css';

function SearchBar(): JSX.Element {
  return (
    <div>
      <input type="text" placeholder="Search" className="search-input" />
      <button type="button" className="search-btn">
        <span>&#128269;</span>
      </button>
    </div>
  );
}

export default SearchBar;
