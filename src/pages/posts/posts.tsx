import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchPostsRequest } from "../../redux/actions/posts-actions/posts-actions";
import Loader from "../../UI/loader/Loader";
import { ListGroup, Pagination } from "react-bootstrap";
import PostItem from "../../components/posts/post-item/post-item";
import "./posts.css";
import Input from "../../UI/input/input";
import Select from "../../UI/select/select";
import { FetchPostsRequestPayload, IPost } from "../../types/type-posts";
import { getPagesArray } from "../../utils/count-pages";

type Props = {};

const Posts = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [fetchPostsParams, setFetchPostsParams] =
    useState<FetchPostsRequestPayload>({ limit: 10, page: 1 });
  const dispatch = useAppDispatch();
  const { posts, arePostsLoading, pagesCount } = useAppSelector(
    (store) => store.posts
  );

  console.log("posts", posts);

  const paginationPages = getPagesArray(pagesCount)?.map((item) => (
    <Pagination.Item
      onClick={() => changePostsPage(item)}
      key={item}
      active={item === fetchPostsParams.page}
    >
      {item}
    </Pagination.Item>
  ));

  useEffect(() => {
    dispatch(fetchPostsRequest(fetchPostsParams));
  }, [dispatch, fetchPostsParams]);

  const changePostsPage = (item: number) =>
    setFetchPostsParams({ ...fetchPostsParams, page: item });

  const handleClearSearch = () => setSearchValue("");

  const handlePostFilterInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const handlePostsSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const getSortedPosts = (a: IPost, b: IPost) => {
    if (selectedValue === "titleDes") {
      return b.title.localeCompare(a.title);
    }

    return a.title.localeCompare(b.title);
  };

  if (arePostsLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="posts-conatiner">
        <div className="heading-container">
          <Input
            value={searchValue}
            onChange={handlePostFilterInput}
            placeholder="Search users"
            buttonText="&#10005;"
            onButtonClick={handleClearSearch}
          />
          <Select
            onChange={handlePostsSorting}
            value={selectedValue}
            defaultValue="Sort by:"
            options={[
              {
                value: "titleAsc",
                title: "By name, A-Z",
              },
              {
                value: "titleDes",
                title: "By name, Z-A",
              },
            ]}
          />
        </div>
        <ListGroup>
          {posts
            .sort(getSortedPosts)
            .filter((post) => post.title.includes(searchValue.toLowerCase()))
            .map((post) => (
              <ListGroup.Item key={post.id}>
                <PostItem post={post} />
              </ListGroup.Item>
            ))}
        </ListGroup>
        <br />
        <Pagination>{paginationPages}</Pagination>
      </div>
    </div>
  );
};

export default Posts;
