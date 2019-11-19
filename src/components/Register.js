import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { register } from "../actions/actions";


//STYLES
import {
  RegisterPage,
  RadioButtons,
  Radio,
  CheckedRadio,
  Button,
  DisabledButton
} from "../styles/register.js";

const Register = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isGuide, setIsGuide] = useState(true);

  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  //Login on form submit
  const register = e => {
    e.preventDefault();

    let creds = {
      email: credentials.email,
      password: credentials.password,
      isGuide: isGuide
    };

    console.log("Registering with: ", creds);
    props.register(creds);
  };

  const validateField = (name, value) => {
    let fieldValidationErrors = formErrors;
    let formEmailValid = emailValid;
    let formPasswordValid = passwordValid;

    switch (name) {
      case "email":
        formEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        formPasswordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setEmailValid(formEmailValid);
    setPasswordValid(formPasswordValid);
  };

  const validateForm = () => {
    setFormValid(emailValid && passwordValid);
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    validateForm(e.target.name, e.target.value);
  };

  const handleRadio = e => {
    console.log("radio clicked");
    setIsGuide(!isGuide);
  };

  return (
    <>
      <RegisterPage>
        <img src="https://via.placeholder.com/395x184.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"></img>

        <form onSubmit={register}>
          <h2>Are you a...</h2>

          <RadioButtons>
            <label>
              <div>
                {isGuide ? (
                  <CheckedRadio onClick={handleRadio} />
                ) : (
                  <Radio onClick={handleRadio} />
                )}
                Tourist
              </div>
            </label>
            <label>
              <div>
                {!isGuide ? (
                  <CheckedRadio onClick={handleRadio} />
                ) : (
                  <Radio onClick={handleRadio} />
                )}
                Guide
              </div>
            </label>
          </RadioButtons>

          <div className="form-input">
            <span>Email</span>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <span>Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {formValid ? (
            <Button type="submit">Sign Up</Button>
          ) : (
            <DisabledButton type="submit" disabled>
              Sign Up
            </DisabledButton>
          )}
        </form>
      </RegisterPage>
    </>
  );
};

const mapDispatchToProps = {
  register
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
}, mapDispatchToProps)(Register);
