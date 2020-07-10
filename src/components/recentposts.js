import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Post from "./post";
class RecentPosts extends Component {
  componentDidMount() {
    this.props.FetchRecentPosts();
  }

  renderPosts = function () {
    const posts = this.props.recentPosts.map((post, index) => {
      return index < 3 ? <Post {...post} key={index} /> : null;
    });
    return posts;
  };
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
          <ul className="recent-posts__posts">{this.renderPosts()}</ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { recentPosts: state.posts.recentPosts };
}
export default connect(mapStateToProps, actions)(RecentPosts);
