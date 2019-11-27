import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getTrips } from "../actions/actions";

import SearchForm from "./SearchForm";

import { Page } from "../styles/page";

function Popular(props) {
  

  return (
    <Page>
     <h2 style={{textAlign: "start"}}>Popular:</h2>
    </Page>
  );
}

const mapDispatchToProps = {
  
};

export default connect(state => {
  return state;
}, mapDispatchToProps)(Popular);
