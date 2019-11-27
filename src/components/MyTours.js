import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTrips,
  getMyTrips,
  postTrip,
  editTrip,
  deleteTrip,
  getUsers
} from "../actions/actions.js";

import {
  Wrapper,
  ToursList,
  TourCard,
  AddTourCard,
  AddTourButton
} from "../styles/mytours.js";

const fakeData = [
  {
    id: 1,
    description: "nice climb",
    duration: "2 hours",
    location: "Eaton Canyon",
    price: "free",
    tourname: "Hiking",
    img:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    description: "nice climb",
    duration: "2 hours",
    location: "Eaton Canyon",
    price: "free",
    tourname: "Flying",
    img:
      "https://images.unsplash.com/photo-1470166668464-c543a813bb30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: 3,
    description: "nice climb",
    duration: "2 hours",
    location: "Eaton Canyon",
    price: "free",
    tourname: "Kayaking",
    img:
      "https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
  },
  {
    id: 4,
    description: "Wander around Park Guell",
    duration: "1 hour",
    location: "Park Guell, Barcelona, Spain",
    price: "200",
    tourname: "Park Guell Tour",
    img:
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    description: "Walking tour of downtown Lisbon",
    duration: "3 hours",
    location: "Lisbon, Portugal",
    price: "100",
    tourname: "Downtown Lisbon",
    img:
      "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
];

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

function MyTours(props) {
  const [trips, setTrips] = useState([]);
  const [me, setMe] = useState([]);

  useEffect(() => {
    props.getUsers();
  }, []);

  useEffect(() => {
    setTrips(props.state.myTrips);

    if (props.state.guides) {
      props.state.guides.map(guide => {
        if (guide.email === localStorage.getItem("email")) {
          setMe(guide);
        }
      });
    }
  }, [props.state]);

  useEffect(() => {
    props.getMyTrips(me.id);
    props.getTrips();
  }, [me, props.state.changeTrigger]);

  const addTour = e => {
    e.preventDefault();

    console.log(me.id);

    let newTrip = {
      tourname: "Guide 11 Trip",
      description: "Cruise",
      price: "40 per hour",
      duration: "4 hours",
      location: "Beach",
      language: "English",
      user_id: me.id
    };

    props.postTrip(newTrip);
  };

  const deleteTour = (e, id) => {
    e.preventDefault();
    console.log(`deleting tour #${id}`);
    props.deleteTrip(id);
  };

  const editTour = (e, id) => {
    e.preventDefault();
    console.log(`editing tour #${id}`);

    let editedTrip = {
      tourname: "Guide 11 Trip Edited",
      description: "Cruise",
      price: "40 per hour",
      duration: "4 hours",
      location: "Beach",
      language: "English",
      user_id: me.id
    };

    console.log(`sending edit with object`, editedTrip);

    props.editTrip(id, editedTrip);
  };

  return (
    <Wrapper>
      <h2>My Tours</h2>

      <ToursList>
        {props.state.myTrips.map((tour, index) => (
          <TourCard key={index}>
            {console.log("hello")}
            <div className="top">
              <h3>{tour.tourname}</h3>
              <div>
                <span
                  onClick={e => {
                    editTour(e, tour.id);
                  }}
                >
                  Edit
                </span>
                <span
                  onClick={e => {
                    deleteTour(e, tour.id);
                  }}
                >
                  Delete
                </span>
              </div>
            </div>
            {/* <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img> */}
            <img src={pics[index]}></img>
          </TourCard>
        ))}

        <AddTourCard>
          <AddTourButton onClick={addTour}>
            <Link className="plus" to="/addedtours">
              <div>+</div>
            </Link>
          </AddTourButton>
          <h3>Add Tour</h3>
        </AddTourCard>
      </ToursList>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  console.log(
    "%c REDUX STORE STATE",
    "background: #222; color: #bada55; font-size: 22px",
    state
  );
  return { state };
}

const mapDispatchToProps = {
  getTrips,
  getMyTrips,
  postTrip,
  editTrip,
  deleteTrip,
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTours);
