import React, { Component } from 'react';
import './SearchBox.style.css';

const SearchBox = ({ handleInputData }) => (
    <form >
        <input
            placeholder="Enter Keyword to Search"
            className="search"
            type="text"
            // value={this.state.searchTerm}
            onChange={handleInputData}
        />
    </form>
)
export default SearchBox;