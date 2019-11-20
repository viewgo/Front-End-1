import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { login } from "../actions/actions";

//STYLES
import {
  Wrapper,
  LoginPage,
  RadioButtons,
  Radio,
  CheckedRadio,
  Button,
  DisabledButton
} from "../styles/login.js";

const Login = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTourist, setIsTourist] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  //Login on form submit
  const login = e => {
    e.preventDefault();

    props.login(credentials).then(() => {
      props.toggleLogin(null);
    });
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleRadio = e => {
    console.log("radio clicked");
    setIsTourist(!isTourist);
  };

  return (
    <>
      <Wrapper>
        <LoginPage>
          
          <h2 className="log-in-h2">Log In</h2>

          <div className="close-button" onClick={props.toggleLogin}>✖</div>

          <form onSubmit={login} autoComplete="off">
            

            <div className="form-input">
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="form-input">
              <span>Email</span>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="form-input">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/*************** CHANGE FOR ACTUAL VALIDATION ******************/}
            <Button type="submit">Log In</Button>
          </form>
        </LoginPage>
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = {
  login
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
}, mapDispatchToProps)(Login);
