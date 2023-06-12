import { userTypes } from "../consts";
import { IPost } from "./type-posts";

export interface UserState {
  arePostsLoading: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchUserPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchUserPostsFailurePayload {
  error: string;
}

export interface FetchUserPostsRequestPayload {
  userId: number;
}

export interface FetchUserPostsRequest {
  type: typeof userTypes.FETCH_POST_REQUEST;
  payload: FetchUserPostsRequestPayload;
}

export type FetchUserPostsSuccess = {
  type: typeof userTypes.FETCH_POST_SUCCESS;
  payload: FetchUserPostsSuccessPayload;
};

export type FetchUserPostsFailure = {
  type: typeof userTypes.FETCH_POST_FAILURE;
  payload: FetchUserPostsFailurePayload;
};

export type UserActions =
  | FetchUserPostsRequest
  | FetchUserPostsSuccess
  | FetchUserPostsFailure;
