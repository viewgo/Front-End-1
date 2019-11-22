import React, { useState, useEffect } from "react"
import axios from "axios"
import auth from "../auth/axiosWithAuth"

const Results = props => {
    const [results, setResults] = useState()

    useEffect(() => {
        const id = props.match.params.id

        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook

        axios
        auth()
            .get(`https://bw-wanderlust.herokuapp.com/api/trips/${id}`)
            .then(response => {
                console.log(response)
                setResults(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [props.match.params.id])

    // Used props.match.params.id because that is what I'm looking for a change in

    // Uncomment this only when you have moved on to the stretch goals
    // const saveMovie = () => {
    //   const addToSavedList = props.addToSavedList;
    //   addToSavedList(movie)
    // }

    if (!results) {
        return <div>Loading trip information...</div>
    }

    const { tourname, director, metascore, stars } = results
    return (
        <>
            <section className='tour-list'>
                <StyledH2>Results</StyledH2>
                {tourList
                    .filter(tour =>
                        tour.tourname
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    )
                    .map(tour => {
                        return <TourCard key={tour.id} name={tour.tourname} />
                    })}
            </section>
            <div className='save-button'>Save</div>
        </>
    )
}

export default Results
