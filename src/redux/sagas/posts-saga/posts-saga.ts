import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  FetchPostsRequest,
  IPost,
  PostPaginationRequestParams,
} from "../../../types/type-posts";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../../actions/posts-actions/posts-actions";
import { postTypes } from "../../../consts";
import { getPagesCount } from "../../../utils/count-pages";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const getPosts = ({
  limit,
  page,
}: PostPaginationRequestParams): Promise<AxiosResponse<IPost[]>> =>
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _limit: limit,
      _page: page,
    },
  });

function* fetchPostsWorker(action: FetchPostsRequest): Generator {
  yield delay(500);

  const { limit, page } = action.payload;

  try {
    const response = (yield call(getPosts, { limit, page })) as AxiosResponse<
      IPost[]
    >;
    const postsTotalCount = response.headers["x-total-count"] as number;

    const numOfPages = getPagesCount(postsTotalCount, limit);

    const data = response.data.map((item) => ({
      ...item,
      comments: [],
    }));

    yield put(
      fetchPostsSuccess({
        posts: data,
        pagesCount: numOfPages,
      })
    );
  } catch (error) {
    yield put(
      fetchPostsFailure({
        error: (error as Error).message,
      })
    );
  }
}

export function* fetchPostsWatcher(): Generator {
  yield takeEvery(postTypes.FETCH_POST_REQUEST, fetchPostsWorker);
}

export default fetchPostsWatcher;
