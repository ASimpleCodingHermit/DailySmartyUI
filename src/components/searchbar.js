import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class SearchBar extends Component {
  handleFormSubmit = function ({ query }) {
    console.log("Trying the handle submit action", query);
  };
  renderInput(field) {
    return <input type="text" placeholder="Search" {...field.input} />;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="Search-Bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field name="query" component={this.renderInput} />
      </form>
    );
  }
}

SearchBar = reduxForm({ form: "SearchBar" })(SearchBar);
export default SearchBar;
