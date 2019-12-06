//DEPENDENCIES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//ACTIONS
import { getTrips, getFeaturedTrips } from "../actions/actions";

//STYLES
import { Page } from "../styles/page";
import { FeaturedList, FeaturedItem, FeaturedInfo } from "../styles/featured";

const pics = [
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2016&q=80",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1501927023255-9063be98970c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1519261814474-55092223bd87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1548707308-25b03cfae12c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1529551739587-e242c564f727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "https://images.unsplash.com/photo-1541777750-47555f6eddaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1513571163699-eb868d8e29a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
  "https://images.unsplash.com/photo-1541071700035-0a1031bc75a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1532184312173-028645e16ba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80",
  "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1954&q=80",
  "https://images.unsplash.com/photo-1488952619802-0a3f502bab33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1926&q=80",
  "https://images.unsplash.com/photo-1468420301707-d5ed0f94e9d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
  "https://images.unsplash.com/photo-1470922792794-b15b12d20e80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1464925563925-00dbf480f2ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1483394943446-89e4d5530d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1490118121063-d12f8c4464ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
];

function Featured(props) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    props.getTrips();
  }, []);

  useEffect(() => {
    if (props.allTrips.length > 1) {
      const ids = [props.allTrips[0].id, props.allTrips[1].id];

      for (let i = 0; i < 2; i++) {
        props.getFeaturedTrips(ids[i]);
        console.log(i);
      }
    }
  }, [props.allTrips]);

  useEffect(() => {
    if (props.featuredTrips.length > 1) {
      setFeatured(props.featuredTrips);
    }
  }, [props.featuredTrips]);

  console.log(
    "%c featured",
    "background: #222; color: red; font-size: 22px",
    featured
  );

  if (featured.length > 1) {
    return (
      <Page>
        <h2 style={{ textAlign: "start" }}>Featured:</h2>

        <FeaturedList>
          <FeaturedItem>
            <img src={pics[0]}></img>

           
          </FeaturedItem>

          <FeaturedItem>
          <FeaturedInfo>
              <div>
                <h3>{featured[0].tourname}</h3>
                <p>{featured[0].description}</p>
              </div>
              <Link to="">Read More</Link>
            </FeaturedInfo>
          </FeaturedItem>

          <FeaturedItem>
            <img src={pics[1]}></img>            
          </FeaturedItem>

          <FeaturedItem>
          <FeaturedInfo>
            <div>
              <h3>{featured[1].tourname}</h3>
              <p>{featured[1].description}</p>
              </div>
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

const mapDispatchToProps = { getTrips, getFeaturedTrips };

export default connect(state => {
  console.log(
    "%c REDUX STORE STATE",
    "background: #222; color: #bada55; font-size: 22px",
    state
  );
  return state;
}, mapDispatchToProps)(Featured);
