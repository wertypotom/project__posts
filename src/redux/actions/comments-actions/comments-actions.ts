import { commentsTypes } from "../../../consts";
import {
  FetchCommentsFailure,
  FetchCommentsFailurePayload,
  FetchCommentsRequest,
  FetchCommentsRequestPayload,
  FetchCommentsSuccess,
  FetchCommentsSuccessPayload,
} from "../../../types/type-comments";

export const fetchCommentsRequest = (
  payload: FetchCommentsRequestPayload
): FetchCommentsRequest => ({
  type: commentsTypes.FETCH_COMMENTS_REQUEST,
  payload,
});

export const fetchCommentsSuccess = (
  payload: FetchCommentsSuccessPayload
): FetchCommentsSuccess => ({
  type: commentsTypes.FETCH_COMMENTS_SUCCESS,
  payload,
});

export const fetchCommentsFailure = (
  payload: FetchCommentsFailurePayload
): FetchCommentsFailure => ({
  type: commentsTypes.FETCH_COMMENTS_FAILURE,
  payload,
});
