import React, { useState, useRef } from "react";
import DropDownButton from "./DropDownButton";
import DropDown from "./DropDown";
import { ClickOutside } from "./ClickOutside";
import { Link } from "react-router-dom";

const Navigation = props => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  ClickOutside(node, () => setOpen(false));
  return (
    <header className="main__header">
      <nav className="main__nav">
        <div ref={node}>
          <DropDownButton open={open} setOpen={setOpen} />
          <DropDown open={open} setOpen={setOpen} />
        </div>
        <div className="nav__items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">About Us</a>
            </li>

            {props.isLoggedIn ? (
              <li>
                <Link to="/mytours">My Tours</Link>
              </li>
            ) : null}

            {!props.isLoggedIn ? (
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            ) : null}

            <li>
              {props.isLoggedIn ? (
                <a href="/" onClick={props.logOut}>
                  Log Out
                </a>
              ) : (
                <a href="/" onClick={props.toggleLogin}>
                  Log In
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
