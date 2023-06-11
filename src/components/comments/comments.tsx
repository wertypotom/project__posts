import React from "react";
import { IComments } from "../../types/type-comments";
import CommentItem from "./comment-item/comment-item";
import { Card } from "react-bootstrap";

type Props = {
  comments: IComments[];
};

const Comments = ({ comments }: Props) => {
  return (
    <div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
