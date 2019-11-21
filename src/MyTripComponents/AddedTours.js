import React, { useState } from "react"
import TourForm from "./TourForm"
import Tours from "./Tours"

export default function AddedTours() {
    const [tours, setTours] = useState([])

    const addNewTour = tour => {
        setTours([...tours, tour])
    }

    return (
        <div className='App'>
            <h1>Create Tour</h1>
            <TourForm addNewTour={addNewTour} />
            <Tours toursList={tours} />
        </div>
    )
}
