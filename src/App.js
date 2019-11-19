import React from "react";
import "./App.css";
import Header from "./components/Header";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import /*ACTIONSHERE*/ "./actions/actions";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />

      
      <Router>
        <Switch>
          <PrivateRoute path="/protected">
            <Route exact path="/protected" component={Home} />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  //ACTIONS HERE
};

export default connect(state => {
  console.log(
    "%c vvv PROPS IN LIST",
    "color: green; background: #222; font-size: 24px;",
    state
  );
  console.log(
    "%c ^^^ PROPS IN LIST",
    "color: green; background: #222; font-size: 24px;"
  );
  return state;
}, mapDispatchToProps)(App);
