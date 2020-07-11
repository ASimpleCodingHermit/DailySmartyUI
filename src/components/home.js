import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentposts";

export default class App extends Component {
  handleFormSubmit = function ({ query }) {
    console.log("Trying the handle submit action", query);
    this.props.history.push("/results");
  };
  render() {
    return (
      <div className="home">
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleFormSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
