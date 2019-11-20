import React from "react";

import { connect } from "react-redux";
import /*ACTIONSHERE*/ "../actions/actions";

function Home() {
  return <h1>Hello</h1>;
}

const mapDispatchToProps = {
  //ACTIONS HERE
};

export default connect(state => {  
  return state;
}, mapDispatchToProps)(Home);
