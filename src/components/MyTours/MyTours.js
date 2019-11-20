import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import /*ACTIONSHERE*/ "../../actions/actions.js";

import { Wrapper, ToursList, TourCard, AddTourCard, AddTourButton } from "../../styles/mytours.js";

const fakeData = [
  {
    id: 1,
    description: "nice climb",
    duration: "2 hours",
    location: "Eaton Canyon",
    price: "free",
    tourname: "Hiking",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  
  },
  {
    id: 2,
    description: "nice climb",
    duration: "2 hours",
    location: "Eaton Canyon",
    price: "free",
    tourname: "Flying",
    img: "https://images.unsplash.com/photo-1470166668464-c543a813bb30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: 3,
    description: "nice climb",
    duration: "2 hours",
    location: "Eaton Canyon",
    price: "free",
    tourname: "Kayaking",    
    img: "https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"  
  },
  {
      id: 4,
      description: "Wander around Park Guell",
      duration: "1 hour",
      location: "Park Guell, Barcelona, Spain",
      price: "200",
      tourname: "Park Guell Tour",
      img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
      id: 5,
      description: "Walking tour of downtown Lisbon",
      duration: "3 hours",
      location: "Lisbon, Portugal",
      price: "100",
      tourname: "Downtown Lisbon",
      img: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
];

function MyTours(props) {

const addTour = (e) => {
    e.preventDefault();
    console.log("create tour");
}

  return (
    <Wrapper>
      <h2>My Tours</h2>

      <ToursList>

{fakeData.map(tour => (
    <TourCard key={tour.id}>
        <div className="top"><h3>{tour.tourname}</h3>
        <div>
        <span>Edit</span>
        <span>Delete</span></div>
        </div>
        <img src={tour.img}></img>
    </TourCard>
))}

<AddTourCard>
    <AddTourButton onClick={addTour}>+</AddTourButton>
    <h3>Add Tour</h3>
</AddTourCard>

      </ToursList>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  return { state: state };
}

const mapDispatchToProps = {
  //ACTIONS HERE
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTours);
