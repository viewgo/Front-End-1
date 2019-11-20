import React from "react"
import "./MyToursList.css"

export default function TourSearchFrom(props) {
    return (
        <input
            className='search-input'
            type='text'
            onChange={props.handleInputChange}
            title='search city or zip code'
            autoComplete='off'
            value={props.query}
            placeholder='Enter City or Zipcode'
        />
    )
}
