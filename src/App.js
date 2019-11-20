
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

import { connect } from "react-redux";
import { Route } from "react-router-dom";
import /*ACTIONSHERE*/ "./actions/actions";

import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MyToursList from "./MyTripComponents/MyToursList";
import MyTours from "./components/MyTours/MyTours.js";

function App(props) {
  const [loginPopup, setLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect to check if logged in: ", localStorage.getItem("token") )
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);


    const toggleLogin = e => {
        if (e) {
            e.preventDefault()
        }

        setLoginPopup(!loginPopup)
    }



  const logOut = e => {
    e.preventDefault();
    console.log("LOGGING OUT");

    localStorage.removeItem("token");
    window.location.reload();
  };

  console.log("IS LOGGED IN: ", isLoggedIn);

  return (
    <div className="App">
      <Header
        toggleLogin={toggleLogin}
        logOut={logOut}
        isLoggedIn={isLoggedIn}
      />

      {/* <MyToursList /> */}
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
      <PrivateRoute exact path="/" component={MyToursList} />
      <PrivateRoute exact path ="/mytours" component={MyTours} />
    </div>
  );
}

function mapStateToProps(state) {
    return { state: state }
}

const mapDispatchToProps = {
    //ACTIONS HERE
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
