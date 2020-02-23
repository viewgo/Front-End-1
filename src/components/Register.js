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

import { PopUp } from "../styles/confirmation";

const Register = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [isTourist, setIsTourist] = useState(true);

  const [formErrors, setFormErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [emailValid, setEmailValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const [confirmation, setConfirmation] = useState(false);

  //Login on form submit
  const register = e => {
    e.preventDefault();

    let creds = {
      email: credentials.email,
      username: credentials.username,
      password: credentials.password
    };

    props.register(creds, isTourist);
    setConfirmation(true);

    
  };

  const toggleConfirm = () => {
    setConfirmation(!confirmation);
  };

  console.log(props.state);

  const validateField = (name, value) => {
    let fieldValidationErrors = formErrors;
    let formEmailValid = emailValid;
    let formUsernameValid = usernameValid;
    let formPasswordValid = passwordValid;
    let formConfirmPasswordValid = confirmPasswordValid;

    switch (name) {
      case "email":
        formEmailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        fieldValidationErrors.email = formEmailValid ? "" : " is invalid";
        break;
      case "username":
        formUsernameValid = value.length >= 4;
        fieldValidationErrors.username = formUsernameValid
          ? ""
          : " is too short";
        break;
      case "password":
        formPasswordValid = value.length >= 6;
        fieldValidationErrors.password = formPasswordValid
          ? ""
          : " is too short";
        break;
      case "confirmPassword":
        formConfirmPasswordValid = value === credentials.password;
        fieldValidationErrors.confirmPassword = formConfirmPasswordValid
          ? ""
          : "Passwords must match";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setEmailValid(formEmailValid);
    setUsernameValid(formUsernameValid);
    setPasswordValid(formPasswordValid);
    setConfirmPasswordValid(formConfirmPasswordValid);
  };

  const validateForm = () => {
    if (emailValid && usernameValid && passwordValid && confirmPasswordValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    validateField(e.target.name, e.target.value);
  };

  const handleRadio = e => {
    setIsTourist(!isTourist);
  };

  return (
    <>
      {confirmation ? (
        <PopUp>
          Success! You will receive a confirmation email
          <div className="confirm-close" onClick={() => setConfirmation(false)}>
            ✖
          </div>
        </PopUp>
      ) : null}

      <RegisterPage>
        <form onSubmit={register} autoComplete="off">
          <h2>Are you a...</h2>

          <RadioButtons>
            <label>
              <div>
                {isTourist ? (
                  <CheckedRadio onClick={handleRadio} />
                ) : (
                  <Radio onClick={handleRadio} />
                )}
                Tourist
              </div>
            </label>
            <label>
              <div>
                {!isTourist ? (
                  <CheckedRadio onClick={handleRadio} />
                ) : (
                  <Radio onClick={handleRadio} />
                )}
                Guide
              </div>
            </label>
          </RadioButtons>

          <div className="form-input">
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.username ? (
              <span className="input-error">
                Username {formErrors.username}
              </span>
            ) : (
              <span> </span>
            )}
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
            {formErrors.email ? (
              <span className="input-error">Email {formErrors.email}</span>
            ) : (
              <span> </span>
            )}
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
            {formErrors.password ? (
              <span className="input-error">
                Password {formErrors.password}
              </span>
            ) : (
              <span> </span>
            )}
          </div>
          <div className="form-input">
            <span>Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.confirmPassword ? (
              <span className="input-error">{formErrors.confirmPassword}</span>
            ) : (
              <span> </span>
            )}
          </div>
          {/*************** CHANGE FOR ACTUAL VALIDATION ******************/}
          {validateForm() ? (
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
  return state;
}, mapDispatchToProps)(Register);
