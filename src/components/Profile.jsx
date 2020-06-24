import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <img
        src="https://bipbap.ru/wp-content/uploads/2017/04/000000843.jpg"
        alt="bg-image"
      />
      <div className="ava">
        <img
          src="https://klike.net/uploads/posts/2019-01/1547368009_19.jpg"
          alt="avatar"
        />
      </div>
      <div className="descr">descripiton</div>
      <div className="my-posts">
        <h2>My posts</h2>
        <div className="new-posts">New Posts</div>
        <div className="post1">post1</div>
        <div className="post2">post2</div>
      </div>
    </div>
  );
};

export default Profile;
