import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div className='Searchbar'>
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Searchbar;
