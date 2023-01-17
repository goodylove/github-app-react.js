import React from "react";

const User = ({ user }) => {
  const { login, avatar_url, bio, following, followers } = user;
  return (
    <div className="user">
      <img src={avatar_url} alt="" />
      <span>{login}</span>
      <span>{bio}</span>
      <div>
        <span>{followers}</span>
        <span>{following}</span>
      </div>
    </div>
  );
};

export default User;
