import { commentsTypes } from "../consts";

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface FetchCommentsSuccessPayload {
  id: number;
  comments: IComments[];
}

export interface FetchCommentsFailurePayload {
  error: string;
}
export interface FetchCommentsRequestPayload {
  id: number;
}

export interface FetchCommentsRequest {
  type: typeof commentsTypes.FETCH_COMMENTS_REQUEST;
  payload: FetchCommentsRequestPayload;
}

export type FetchCommentsSuccess = {
  type: typeof commentsTypes.FETCH_COMMENTS_SUCCESS;
  payload: FetchCommentsSuccessPayload;
};

export type FetchCommentsFailure = {
  type: typeof commentsTypes.FETCH_COMMENTS_FAILURE;
  payload: FetchCommentsFailurePayload;
};
