import {
  createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root-saga";
import rootReducer from "./reducers/root-reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<
  typeof store.getState
>;
