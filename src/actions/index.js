import { SET_RECENT_POSTS } from "./types";
import axios from "axios";

export function FetchRecentPosts() {
  return function (dispatch) {
    axios.get("https://api.dailysmarty.com/posts").then((response) => {
      console.log("response from data", response.data);
      dispatch({ type: SET_RECENT_POSTS, payload: response.data.posts });
    });
  };
}
