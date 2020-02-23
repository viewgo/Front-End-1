import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getTrips } from "../actions/actions";

import logo from "./Nav Components/wanderlust_logo.png";

function Home(props) {
  return (
    <div className="home">
      <img src={logo} />
    </div>
  );
}

const mapDispatchToProps = {
  getTrips
};

export default connect(state => {
  return state;
}, mapDispatchToProps)(Home);
