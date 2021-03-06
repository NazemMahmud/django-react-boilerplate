import React from "react";
/** 
 * allows simple asynchronous use of dispatch; 
 * can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. */
import thunk from "redux-thunk"; 
import { Provider } from "react-redux";
import { createBrowserHistory } from "history"; // manage session history 
import { applyMiddleware, createStore } from "redux";
/**
 * Redux binding for React Router
 * Synchronize router state with redux store through uni-directional flow (i.e. history -> store -> router -> components)
 * access routing state
 */
import { routerMiddleware, ConnectedRouter } from "connected-react-router"; // ??

import rootReducer from "./Reducer";
import { setCurrentUser, setToken } from "../components/Auth/login/LoginActions"
import { isEmpty } from "../utils/Utils";

const Root = ({ children, initialState = {} }) => {
  // initialState => at starting = empty obj
  // children => element inside Root tag
  const history = createBrowserHistory(); // get browser related data
  const middleware = [thunk, routerMiddleware(history)];
  console.log('middleware: ', middleware);
  console.log('history: ', history);
  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );

  if (!isEmpty(localStorage.getItem("token"))) {
    store.dispatch(setToken(localStorage.getItem("token")));
  }
  if (!isEmpty(localStorage.getItem("user"))) {
    const user = JSON.parse(localStorage.getItem("user"));
    store.dispatch(setCurrentUser(user, ""));
  }
  
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
};

export default Root;