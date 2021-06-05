import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Root from './redux/Root';

function App() {
  return (
    <div className="App">
      <Root> {/* replace BrowserRouter with Root */}
      {/* <BrowserRouter> */}
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Root>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
