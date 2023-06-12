import { userTypes } from "../../../consts";
import { UserActions, UserState } from "../../../types/type-user";

const initialState: UserState = {
  arePostsLoading: false,
  posts: [],
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  console.log("userReducer");
  switch (action.type) {
    case userTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        arePostsLoading: true,
      };
    case userTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        arePostsLoading: false,
        posts: action.payload.posts,
        error: null,
      };
    case userTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};
