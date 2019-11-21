import React from "react"

const Tours = props => {
    console.log(props)
    return (
        <div className='added-tours'>
            {props.toursList.map((tour, index) => {
                return (
                    <div className='tour' key={index}>
                        {/* passed in index to be the key */}
                        <h2>{tour.name}</h2>
                        <p>{tour.description}</p>
                        <p>The tour is {tour.price}</p>
                        <p>The tour is {tour.duration} long.</p>
                        <p>Tour check-in is at {tour.location}</p>
                        <p>This tour is held in {tour.language}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Tours
