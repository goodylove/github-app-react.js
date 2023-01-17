import React from "react";
import "./User.css";

const User = ({ user }) => {
  const { login, avatar_url, bio, following, followers } = user;
  return (
    <div className="user">
      <img src={avatar_url} alt="" />
      <span>{login}</span>
      <span>{bio}</span>
      <div>
        <span> followers{followers}</span>
        <span> following{following}</span>
      </div>
    </div>
  );
};

export default User;
