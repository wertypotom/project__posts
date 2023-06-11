import { postTypes } from "../consts";
import {
  FetchCommentsFailure,
  FetchCommentsRequest,
  FetchCommentsSuccess,
  IComments,
} from "./type-comments";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: IComments[];
}

export interface PostRequestParams {
  limit: number;
  page: number;
}

export interface PostsState {
  arePostsLoading: boolean;
  areCommentsLoading: boolean;
  posts: IPost[];
  error: string | null;
  pagesCount: number | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
  pagesCount: number;
}

export interface FetchPostsRequestPayload {
  limit: number;
  page: number;
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
  payload: FetchPostsRequestPayload;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | FetchCommentsRequest
  | FetchCommentsSuccess
  | FetchCommentsFailure;
