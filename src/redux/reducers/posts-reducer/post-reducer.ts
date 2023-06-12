import { commentsTypes, postTypes } from "../../../consts";
import { PostsActions, PostsState } from "../../../types/type-posts";

const initialState: PostsState = {
  arePostsLoading: false,
  areCommentsLoading: false,
  posts: [],
  pagesCount: null,
  error: null,
};

export const postReducer = (
  state = initialState,
  action: PostsActions
): PostsState => {
  console.log("postReducer");

  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        arePostsLoading: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        arePostsLoading: false,
        posts: action.payload.posts,
        pagesCount: action.payload.pagesCount,
        error: null,
      };
    case postTypes.FETCH_POST_FAILURE:
    case commentsTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        areCommentsLoading: false,
        posts: [],
        error: action.payload.error,
      };
    case commentsTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        areCommentsLoading: true,
      };
    case commentsTypes.FETCH_COMMENTS_SUCCESS:
      const posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? {
              ...post,
              comments: action.payload.comments,
            }
          : post
      );

      return {
        ...state,
        areCommentsLoading: false,
        posts: posts,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};
