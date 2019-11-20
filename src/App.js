import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import /*ACTIONSHERE*/ "./actions/actions";

import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App(props) {
  const [loginPopup, setLoginPopup] = useState(false);

  const toggleLogin = e => {
    if (e) {
      e.preventDefault();
    }

    setLoginPopup(!loginPopup);
  };

  return (
    <div className="App">
      <Header toggleLogin={toggleLogin} />

      {loginPopup ? <Login toggleLogin={toggleLogin} /> : null}

      {/* ROUTES */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/" component={Home} />
    </div>
  );
}

function mapStateToProps(state) {
  return { state: state };
}

const mapDispatchToProps = {
  //ACTIONS HERE
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
