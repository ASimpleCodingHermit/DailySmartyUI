import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
class RecentPosts extends Component {
  componentDidMount() {
    this.props.FetchRecentPosts();
  }
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
          <ul className="recent-posts__posts">
            <li>Recent Post 01</li>
            <li>Recent Post 02</li>
            <li>Recent Post 03</li>
            <li>Recent Post 04</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);
