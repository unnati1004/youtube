import React from "react";
import Comment from "./Comment";

export const CommentList = ({ data }) => {
  return data.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className=" pl-5 border border-l-black ml-5">
        <CommentList data={comment.replies}/>
      </div>
    </div>
  ));
};
