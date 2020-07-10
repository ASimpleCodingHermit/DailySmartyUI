import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
class SearchBar extends Component {
  handleFormSubmit = function ({ query }) {
    console.log("Trying the handle submit action", query);
    this.props.history.push("/results");
  };
  renderInput(field) {
    return <input type="text" placeholder="Search" {...field.input} />;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="search-bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field name="query" component={this.renderInput} />
      </form>
    );
  }
}

SearchBar = reduxForm({ form: "SearchBar" })(SearchBar);
SearchBar = withRouter(SearchBar);
export default SearchBar;
