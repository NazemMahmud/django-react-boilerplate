import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from './components/Auth/signup/Signup';
import Login from './components/Auth/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Root from './redux/Root';
import { ToastContainer } from "react-toastify";
import axios from "axios";
import RequireAuth from "./utils/RequireAuth";

axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <div className="App">
      <Root> {/* replace BrowserRouter with Root */}
      {/* <BrowserRouter> */}
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* {requireAuth(Dashboard)} */}
          <Route path="/dashboard" component={() => <RequireAuth component={Dashboard} />} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Root>
      {/* </BrowserRouter> */}
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
    </div>
  );
}

export default App;
