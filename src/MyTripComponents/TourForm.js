import React, { useState } from "react"

const TourForm = props => {
    const [tour, setTour] = useState({
        name: "",
        description: "",
        price: "",
        duration: "",
        location: "",
        language: "",
    })

    const changeHandler = event => {
        setTour({ ...tour, [event.target.name]: event.target.value })
        // console.log(tour)
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewTour(tour)
        setTour({
            name: "",
            description: "",
            price: "",
            duration: "",
            location: "",
        })
        // this clears it out to empty string after
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Add A Tour</label>
            <input
                name='tour name'
                id='tour name'
                type='text'
                placeholder='NYC Tour'
                onChange={changeHandler}
                value={tour.name}
            />
            <label htmlFor='description'>Description</label>
            <input
                name='description'
                id='description'
                placeHolder='See New York from the sky!'
                onChange={changeHandler}
                value={tour.description}
            />
            <label htmlFor='price'>Price</label>
            <input
                name='price'
                id='price'
                placeHolder='$200.00'
                onChange={changeHandler}
                value={tour.price}
            />
            <label htmlFor='duration'>Duration</label>
            <input
                name='duration'
                id='duration'
                placeHolder='30 minutes'
                onChange={changeHandler}
                value={tour.duration}
            />
            <label htmlFor='location'>Location</label>
            <input
                name='location'
                id='loaction'
                placeHolder='6 E River Bikeway, New York, New York'
                onChange={changeHandler}
                value={tour.location}
            />
            <label htmlFor='language'>Language</label>
            <input
                name='language'
                id='language'
                placeHolder='English/Espanol'
                onChange={changeHandler}
                value={tour.language}
            />
            <button type='submit'>Create Tour </button>
        </form>
    )
}

export default TourForm
