import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  getTrips,
  getMyTrips,
  postTrip,
  editTrip,
  deleteTrip,
  getUsers
} from "../../actions/actions.js";

import {
  Wrapper,
  ToursList,
  TourCard,
  AddTourCard,
  AddTourButton
} from "../../styles/mytours.js";

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

}

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
            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
          </TourCard>
        ))}

        <AddTourCard>
          <AddTourButton onClick={addTour}>
            <div className="plus">+</div>
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
