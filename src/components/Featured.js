import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getTrips } from "../actions/actions";

import SearchForm from "./SearchForm";

import { Page } from "../styles/page";
import { FeaturedList, FeaturedItem, FeaturedInfo } from "../styles/featured";

function Featured(props) {
  useEffect(() => {
    props.getTrips();
  }, []);

  console.log(
    "%c PROPS",
    "background: #222; color: red; font-size: 22px",
    props
  );

  if (props.allTrips.length > 1) {
    return (
      <Page>
        <h2 style={{ textAlign: "start" }}>Featured:</h2>

        <FeaturedList>

          <FeaturedItem>
            <img src="https://via.placeholder.com/330x272.png"></img>

            <FeaturedInfo>
              <h3>{props.allTrips[0].tourname}</h3>
              <Link to="">Read More</Link>
            </FeaturedInfo>
          </FeaturedItem>

          <FeaturedItem>
            <img src="https://via.placeholder.com/330x272.png"></img>

            <FeaturedInfo>
              <h3>{props.allTrips[1].tourname}</h3>
              <Link to="">Read More</Link>
            </FeaturedInfo>
          </FeaturedItem>

        </FeaturedList>
      </Page>
    );
  } else {
    return <p>Loading...</p>;
  }
}

const mapDispatchToProps = { getTrips };

export default connect(state => {
  console.log(
    "%c REDUX STORE STATE",
    "background: #222; color: #bada55; font-size: 22px",
    state
  );
  return state;
}, mapDispatchToProps)(Featured);
