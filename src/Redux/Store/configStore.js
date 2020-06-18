import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "../Reducers/userReducer";
import courseReducer from "../Reducers/courseReducer";
import commentReducer from "../Reducers/commentReducer";
import questionReducer from "../Reducers/questionReducer";
import applicationReducer from "../Reducers/applicationReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      userReducer,
      courseReducer,
      commentReducer,
      questionReducer,
      applicationReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
