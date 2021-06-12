import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import {signupReducer} from "../components/Auth/signup/SignupReducer";
import {loginReducer} from "../components/Auth/login/LoginReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer,
  });

export default createRootReducer;