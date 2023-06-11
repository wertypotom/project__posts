import { combineReducers } from 'redux';
import { postReducer } from './posts-reducer/post-reducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
