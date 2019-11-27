import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getTrips } from "../actions/actions";

import { Search } from "../styles/search";

function SearchForm(props) {



  return (
    <>
      <Search
            className='search-input'
            type='text'
            onChange={props.handleInputChange}
            title='search city or zip code'
            autoComplete='off'
            value={props.query}
            placeholder='Enter City or Zipcode'
        />
    </>
  );
}

const mapDispatchToProps = {
  getTrips
};

export default connect(state => {
  return state;
}, mapDispatchToProps)(SearchForm);
