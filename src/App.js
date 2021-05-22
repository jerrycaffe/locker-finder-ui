import logo from "./logo.svg";
import Pages from "./Pages";
import "./App.css";
import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Rent from "./Pages/Rent";

const history = createBrowserHistory();

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/rent-now" render={(props) => <Rent {...props} />} />
      <Route path="/" render={(props) => <Pages {...props} />} />
      <Redirect to="/" />
    </Switch>
  );
};

function App() {
  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
}

export default App;
