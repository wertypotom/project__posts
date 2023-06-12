import React, { useState } from "react";
import { IPost } from "../../../types/type-posts";
import { Image, ListGroup, Row, Col, Button, Collapse } from "react-bootstrap";
import UserAvatar from "./../../../assets/user-avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { fetchCommentsRequest } from "../../../redux/actions/comments-actions/comments-actions";
import Comments from "../../comments/comments";
import Loader from "../../../UI/loader/Loader";
import "./post-item.css";

type Props = {
  post: IPost;
};

const PostItem = ({ post }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { areCommentsLoading } = useAppSelector((store) => store.posts);
  const navigate = useNavigate();

  const handleRenderPostComments = () => {
    if (!isOpen) {
      dispatch(fetchCommentsRequest({ id: post.id }));
    }

    setIsOpen(!isOpen);
  };

  const handleNavigateToPost = () => {
    navigate(`/${post.userId}`);
  };

  return (
    <ListGroup.Item>
      <Row className="gx-3 d-flex align-items-center justify-content-between">
        <Col xs={2} className="d-flex align-items-center">
          <Image
            src={UserAvatar}
            alt="User Avatar"
            roundedCircle
            className="item-image"
            onClick={handleNavigateToPost}
          />
        </Col>
        <Col xs={8} className="d-flex flex-column align-items-center">
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Col>
        <Col xs={2} className="d-flex justify-content-end">
          <Button
            variant={!isOpen ? "success" : "danger"}
            onClick={handleRenderPostComments}
          >
            {!isOpen ? "Show Comments" : "Hide Comments"}
          </Button>
        </Col>

        <Collapse in={isOpen}>
          <div>
            {areCommentsLoading ? (
              <Loader />
            ) : (
              <Comments comments={post.comments} />
            )}
          </div>
        </Collapse>
      </Row>
    </ListGroup.Item>
  );
};

export default PostItem;
