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
}, mapDispatchToProps)(Home);
