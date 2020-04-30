import React, { Component } from 'react';
import './SearchBox.style.css';


class SearchBox extends Component {

    state = { searchTerm: '' };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.searchTerm);
        this.props.handleInputData(this.state.searchTerm);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder = "Enter Keyword"
                    className="search"
                    type="text"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default SearchBox;