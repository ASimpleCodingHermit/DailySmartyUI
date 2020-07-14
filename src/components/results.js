import React, { Component } from "react";
import Logo from "./logo.js";
import SearchBar from "./searchbar.js";
import { connect } from "react-redux";
import * as actions from "../actions";
import ResultsPosts from "./resultsPosts.js";
class Results extends Component {
  handleSearchBarSubmit(query) {
    this.props.FetchPostsWithQuery(query);
  }
  render() {
    return (
      <div className="results">
        <Logo size={55} />
        <SearchBar
          page="results"
          onSubmit={(query) => this.handleSearchBarSubmit(query)}
        />
        <ResultsPosts />
      </div>
    );
  }
}
export default connect(null, actions)(Results);
