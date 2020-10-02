import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from '../../redux/store';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store: any = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;