import React, { Component } from 'react';
import './SearchBox.style.css';


class SearchBox extends Component {

    state = { searchTerm: '' };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
        this.props.handleInputData(this.state.searchTerm);
    }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log(this.state.searchTerm);
    //     this.props.handleInputData(this.state.searchTerm);
    // }
    render() {
        // himel
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Enter Keyword to Search"
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