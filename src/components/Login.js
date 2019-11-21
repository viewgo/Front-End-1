import React, { useState } from "react";

import { connect } from "react-redux";
import { login } from "../actions/actions";

//STYLES
import { Wrapper, LoginPage, Button } from "../styles/login.js";

const Login = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: ""
  });
  

  

  //Login on form submit
  const login = e => {
    e.preventDefault();

    props.login(credentials).then(() => {
      props.toggleLogin(null);
      props.setIsLoggedIn(true);
    });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Wrapper>
        <LoginPage>
          <h2 className="log-in-h2">Log In</h2>

          <div className="close-button" onClick={props.toggleLogin}>
            ✖
          </div>

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
  return state;
}, mapDispatchToProps)(Login);
