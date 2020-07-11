import React, { Component } from "react";
import Logo from "./logo.js";
import SearchBar from "./searchbar.js";
class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log("this worked");
  }
  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}

export default Results;
