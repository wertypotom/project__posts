import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { commentsTypes } from "../../../consts";
import { FetchCommentsRequest, IComments } from "../../../types/type-comments";
import {
  fetchCommentsFailure,
  fetchCommentsSuccess,
} from "../../actions/comments-actions/comments-actions";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const getComments = (id: number): Promise<AxiosResponse<IComments[]>> =>
  axios.get<IComments[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

function* fetchCommentsWorker(action: FetchCommentsRequest): Generator {
  delay(500);

  try {
    const { id } = action.payload;

    const response = (yield call(getComments, id)) as AxiosResponse<
      IComments[]
    >;

    console.log("response, ", response);

    yield put(
      fetchCommentsSuccess({
        comments: response.data,
        id,
      })
    );
  } catch (error) {
    yield put(
      fetchCommentsFailure({
        error: (error as Error).message,
      })
    );
  }
}

export function* fetchCommentsWatcher(): Generator {
  yield takeEvery(commentsTypes.FETCH_COMMENTS_REQUEST, fetchCommentsWorker);
}

export default fetchCommentsWatcher;
