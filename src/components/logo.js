import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <Link to={"/"}>
        <div className="logo-main">
          <img style={size} src="/assets/ds_circle_logo.png" />
        </div>
      </Link>
    );
  }
}

export default Logo;
