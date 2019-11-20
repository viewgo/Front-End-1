import React, { useEffect, useState } from "react"
import axios from "axios"
import TourSearchForm from "./TourSearchForm"
import TourCard from "./TourCard"
import "./MyToursList.css"

export default function MyToursList() {
    const [tourList, setTourList] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character`)
            .then(response => {
                setTourList(response.data.results)
                console.log(response.data.results)
            })
            .catch(error => {
                console.log("No tours available", error)
            })
    }, [])

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    return (
        <>
            <TourSearchForm
                handleInputChange={handleInputChange}
                query={query}
            />
            <h2>Featured:</h2>
            <span />
            <h2>Popular:</h2>

            <section className='tour-list'>
                <h2>Results</h2>
                {tourList
                    .filter(tour =>
                        tour.name.toLowerCase().includes(query.toLowerCase())
                    )
                    .map(tour => {
                        return (
                            <TourCard
                                key={tour.id}
                                name={tour.name}
                                image={tour.image}
                            />
                        )
                    })}
            </section>
        </>
    )
}
