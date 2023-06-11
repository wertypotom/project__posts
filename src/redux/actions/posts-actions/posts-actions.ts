import { postTypes } from "../../../consts";
import {
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsRequestPayload,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
} from "../../../types/type-posts";

export const fetchPostsRequest = (
  payload: FetchPostsRequestPayload
): FetchPostsRequest => ({
  type: postTypes.FETCH_POST_REQUEST,
  payload,
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload,
});
