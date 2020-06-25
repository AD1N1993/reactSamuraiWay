import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h2 className={s.title}>My posts</h2>
      <textarea name="area" cols="30" rows="5">
        {" "}
      </textarea>
      <button>Send</button>
      <button>Delete</button>
      <Post message="It's first post" likes="10" />
      <Post message="It's second post" likes="3" />
    </div>
  );
};

export default MyPosts;
