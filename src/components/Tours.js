import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getTrips } from "../actions/actions";

import SearchForm from "./SearchForm";
import Featured from "./Featured";
import Popular from "./Popular";

import { Page } from "../styles/page";

function Tours(props) {
  const [query, setQuery] = useState("");

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Page>
        
      <SearchForm query={query} handleInputChange={handleInputChange} />

      <Featured />
      <Popular />

    </Page>
  );
}

const mapDispatchToProps = {
  getTrips
};

export default connect(state => {
  return state;
}, mapDispatchToProps)(Tours);
