import { userTypes } from "../../../consts";
import {
  FetchUserPostsFailure,
  FetchUserPostsFailurePayload,
  FetchUserPostsRequest,
  FetchUserPostsRequestPayload,
  FetchUserPostsSuccess,
  FetchUserPostsSuccessPayload,
} from "../../../types/type-user";

export const fetchUserPostsRequest = (
  payload: FetchUserPostsRequestPayload
): FetchUserPostsRequest => ({
  type: userTypes.FETCH_POST_REQUEST,
  payload,
});

export const fetchUserPostsSuccess = (
  payload: FetchUserPostsSuccessPayload
): FetchUserPostsSuccess => ({
  type: userTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchUserPostsFailure = (
  payload: FetchUserPostsFailurePayload
): FetchUserPostsFailure => ({
  type: userTypes.FETCH_POST_FAILURE,
  payload,
});
