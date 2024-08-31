import React from "react";
import Comment from "./Comment";
import { CommentList } from "./CommentList";

const CommentContainer = () => {
  const commentData = [
    {
      name: "Akshay Saini",
      text: "Loreum ipsum color alt amet, constructor adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Loreum ipsum color alt amet, constructor adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Loreum ipsum color alt amet, constructor adip",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Loreum ipsum color alt amet, constructor adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Loreum ipsum color alt amet, constructor adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Loreum ipsum color alt amet, constructor adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Loreum ipsum color alt amet, constructor adip",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl">Comments:</h1>
      <CommentList data={commentData} />
    </div>
  );
};

export default CommentContainer;
