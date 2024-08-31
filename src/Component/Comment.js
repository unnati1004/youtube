import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg">
      <img className="w-12 h-12" alt="user" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" />
      <div className="px-3">
        <p className="font">{name}</p>       
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
