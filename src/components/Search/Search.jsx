import React from 'react';
import './Search.css';

const Search = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type your keyword here.."
                className="search-input"
            />
        </div>
    );
};

export default Search;
