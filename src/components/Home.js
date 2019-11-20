import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getTrips } from "../actions/actions";

function Home(props) {
  useEffect(() => {
    props.getTrips();
  }, [props.changeTrigger]);


  return <h1>Hello</h1>;
}

const mapDispatchToProps = {
  getTrips
};

export default connect(state => {
  return state;
}, mapDispatchToProps)(Home);
