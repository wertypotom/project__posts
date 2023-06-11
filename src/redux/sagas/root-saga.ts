import { all } from "redux-saga/effects";
import fetchPostsWatcher from "./posts-saga/posts-saga";
import fetchCommentsWatcher from "./comments-saga/comments-saga";

export function* rootSaga() {
  yield all([
    fetchPostsWatcher(),
    fetchCommentsWatcher(),
  ]);
}
