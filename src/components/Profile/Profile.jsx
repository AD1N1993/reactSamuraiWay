import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://bipbap.ru/wp-content/uploads/2017/04/000000843.jpg"
        alt="bg-image"
      />
      <div className={s.ava}>
        <img
          src="https://klike.net/uploads/posts/2019-01/1547368009_19.jpg"
          alt="avatar"
        />
      </div>
      <div className="descr">descripiton</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
