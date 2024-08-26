import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex">
      <img alt="user" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" />
      <div className="px-3">
        <p className="font">Name</p>       
        <p>Comment</p>
      </div>
    </div>
  );
};

export default Comment;
