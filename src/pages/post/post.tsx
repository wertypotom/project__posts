import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserPostsRequest } from "../../redux/actions/user-actions/user-actions";
import Loader from "../../UI/loader/Loader";
import { Card, Button } from "react-bootstrap";
import "./post.css";

type Props = {};

type URLParams = {
  id: string;
};

const Post = (props: Props) => {
  const { id } = useParams<URLParams>();
  const { posts } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    dispatch(fetchUserPostsRequest({ userId: +id }));
  }, [dispatch, id]);

  if (!id) return <h2>Id is Invalid !</h2>;

  if (!posts.length) {
    return <Loader />;
  }

  const handleMoveBack = () => navigate(-1);

  return (
    <div>
      {posts
        .filter((post) => post.userId === +id)
        .map((post) => (
          <Card key={post.id} className="m-3">
            <Card.Body>
              <Card.Title>
                {post.id} - {post.title}
              </Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      <Button variant="primary" onClick={handleMoveBack} className="m-3">
        Back
      </Button>
    </div>
  );
};

export default Post;
