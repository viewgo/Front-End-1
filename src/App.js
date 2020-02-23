import React, { useState, useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import /*ACTIONSHERE*/ from "./actions/actions";

import { PrivateRoute } from "./components/PrivateRoute";

import Header from "./components/Nav Components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import MyTours from "./components/MyTours";
import Tours from "./components/Tours";

function App(props) {
  const [loginPopup, setLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const toggleLogin = e => {
    if (e) {
      e.preventDefault();
    }

    setLoginPopup(!loginPopup);
  };

  const logOut = e => {
    e.preventDefault();
    console.log("LOGGING OUT");

    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="App">
      <Header
        toggleLogin={toggleLogin}
        logOut={logOut}
        isLoggedIn={isLoggedIn}
      />

      <div className="margin"></div>

      {loginPopup ? (
        <Login
          toggleLogin={toggleLogin}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}

      {/* ROUTES */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/mytours" component={MyTours} />
      <PrivateRoute exact path="/" component={Tours}/>
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
