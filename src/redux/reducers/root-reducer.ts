import { combineReducers } from "redux";
import { postReducer } from "./posts-reducer/post-reducer";
import { userReducer } from "./user-reducer/user-reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
});

export default rootReducer;
