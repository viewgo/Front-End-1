import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getTrips, getTripsByUserId } from "../actions/actions";

function Home(props) {
  

  return <h1>Hello</h1>;
}

const mapDispatchToProps = {
  getTrips, getTripsByUserId
};

export default connect(state => {
  return state;
}, mapDispatchToProps)(Home);
