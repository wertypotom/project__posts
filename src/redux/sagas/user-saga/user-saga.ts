import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IPost } from "../../../types/type-posts";
import { userTypes } from "../../../consts";
import { FetchUserPostsRequest } from "../../../types/type-user";
import {
  fetchUserPostsFailure,
  fetchUserPostsSuccess,
} from "../../actions/user-actions/user-actions";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const getPosts = (userId: number): Promise<AxiosResponse<IPost[]>> =>
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
    params: {
      userId,
    },
  });

function* fetchUserPostsWorker(action: FetchUserPostsRequest): Generator {
  delay(1000);

  try {
    const { userId } = action.payload;

    const response = (yield call(getPosts, userId)) as AxiosResponse<IPost[]>;

    yield put(fetchUserPostsSuccess({ posts: response.data }));
  } catch (error) {
    yield put(
      fetchUserPostsFailure({
        error: (error as Error).message,
      })
    );
  }
}

export function* fetchUserPostsWatcher(): Generator {
  yield takeEvery(userTypes.FETCH_POST_REQUEST, fetchUserPostsWorker);
}

export default fetchUserPostsWatcher;
