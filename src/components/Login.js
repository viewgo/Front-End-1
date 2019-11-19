import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { login } from "../actions/actions";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      props.history.push("/");
    });

    // axios
    //   //CHANGE TO ACTUAL LOGIN
    //   .post("http://localhost:5000/api/login", credentials)
    //   .then(response => {
    //     console.log("response", response);
    //     const { data } = response;

    //     sessionStorage.setItem("token", data.payload);
    //     setIsLoggedIn(true);

    //     //Redirect on login
    //     props.history.push("/protected");
    //   });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form onSubmit={login}>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
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
