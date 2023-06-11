import React from "react";
import { IComments } from "../../../types/type-comments";
import { Card } from "react-bootstrap";

type Props = {
  comment: IComments;
};

const CommentItem = ({ comment }: Props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentItem;
