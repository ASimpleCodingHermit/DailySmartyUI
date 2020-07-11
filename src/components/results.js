import React, { Component } from "react";
import Logo from "./logo.js";
import SearchBar from "./searchbar.js";
import { connect } from "react-redux";
import * as actions from "../actions";
class Results extends Component {
  handleSearchBarSubmit(query) {
    this.props.FetchPostsWithQuery(query);
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
export default connect(null, actions)(Results);
