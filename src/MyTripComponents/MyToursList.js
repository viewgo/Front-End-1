import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import TourSearchForm from "./TourSearchForm"
import TourCard from "./TourCard"
import styled from "styled-components"
import GreatWallPhoto from "./GreatWallPhoto.png"
import Pyramid from "./Pyramid.png"
import SaharaPhoto from "./SaharaPhoto.png"
import Amazon from "./Amazon.png"
import NYC from "./NYC.png"
import Freedom from "./Freedom.png"
import auth from "../auth/axiosWithAuth"

export default function MyToursList() {
    const [tourList, setTourList] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        auth()
            .get(`https://bw-wanderlust.herokuapp.com/api/trips/`)
            // .get(`https://rickandmortyapi.com/api/character/`)
            .then(response => {
                console.log(response)
                setTourList(response.data)
            })
            .catch(error => {
                console.log("No tours available", error)
            })
    }, [])

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    const Wrapper = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: #ffffff;
        font-family: "Poppins", sans-serif;
        z-index: 1;
        .img {
            width: 330px;
            height: 272px;
        }
    `

    const Search = styled.div`
        margin-left: 450px;
        margin-top: 20px;
        font-size: 16px;
        line-height: 17px;

        input {
            background-color: #f0f0f0;
            font-family: "Poppins", sans-serif;
            width: 684px;
            height: 32px;
            text-align: center;
        }
    `
    const StyledH2 = styled.h2`
        font-style: norman;
        font-weight: 600;
        font-size: 36px;
        margin-left: 115px;
    `

    const StyledH3 = styled.h3`
        font-style: normal;
        font-weigth: 600;
        font-size: 20px;
    `
    const Featured = styled.div`
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
    `
    const StyledDiv2 = styled.div`
        width: 330px;
        height: 272px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 25px;

        .featured {
            text-decoration: none;
            color: black;
        }
    `

    const Popular = styled.div`
        width: 18%;
        margin-left: 115px;
        display: flex;
        flex-direction: row;

        img {
            margin-left: 20px;
            width: 280px;
            height: 242px;
        }
    `

    const BottomP = styled.div`
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .plus {
            margin-top: 16px;
            text-decoration: none;
            color: black;
        }
    `
    const Results = styled.div`
        display: flex;
        flex-direction: column;
    `
    const Plus = styled.div`
        text-decoration: none;
        font: white;
    `

    return (
        <>
            <Wrapper>
                <Search>
                    <TourSearchForm
                        handleInputChange={handleInputChange}
                        query={query}
                    />
                </Search>
                <StyledH2>Featured:</StyledH2>
                <span />
                <Featured>
                    <img src={GreatWallPhoto} alt='Great Wall Photo' />
                    <StyledDiv2>
                        <h3>Great Wall Helicopter Tour</h3>
                        <p>
                            Escape the crowds around the Great Wall of China and
                            visit the ancient Mutianyu section on a full-day
                            sightseeing tour from Beijing. Accompanied by a
                            guide, learn the history and marvel at the
                            6th-century section.
                        </p>
                        <Link className='featured' to='/selectedtours'>
                            Read More
                        </Link>
                    </StyledDiv2>
                    <img src={Pyramid} alt='Pyramid of Eygpt' />
                    <StyledDiv2>
                        <h3>Eygptian Pyramids Tour</h3>
                        <p>
                            See three of Cairo's top archaeological wonders in a
                            day- free from worries about finding a cab or
                            guides- on this private tour. Admire Giza's Pyramids
                            and Great Sphinx; view Sakkara's Step Pyramid, and
                            then head for Memphis, a ruined capital of ancient
                            Egypt.
                        </p>

                        <p>Read More</p>
                    </StyledDiv2>
                </Featured>
                <StyledH2>Popular:</StyledH2>
                <Popular>
                    <div>
                        <img src={SaharaPhoto} alt='Camel in Sahara' />
                        <BottomP>
                            <p>Sahara Tour</p>
                            <p>Read More</p>
                        </BottomP>
                        <span />
                    </div>
                    <div>
                        <img src={Amazon} alt='Amazon River' />
                        <BottomP>
                            <p>Amazon Tour</p>
                            <p>Read More</p>
                        </BottomP>
                        <span />
                    </div>
                    <div>
                        <img src={NYC} alt='New York City Skyline' />
                        <BottomP>
                            <p>NYC Tour</p>

                            <Link className='plus' to='/selectedtours'>
                                Read More
                            </Link>
                        </BottomP>
                        <span />
                    </div>
                    <div>
                        <img src={Freedom} alt='Freedom City' />
                        <BottomP>
                            <p>Freedom Tour</p>
                            <p>Read More</p>
                        </BottomP>
                        <span />
                    </div>
                </Popular>
                <section className='tour-list'>
                    <StyledH2>Results</StyledH2>
                    <Results>
                        {tourList
                            .filter(tour =>
                                tour.tourname
                                    .toLowerCase()
                                    .includes(query.toLowerCase())
                            )
                            .map(tour => {
                                return (
                                    <TourCard
                                        key={tour.id}
                                        name={tour.tourname}
                                    />
                                )
                            })}
                    </Results>
                </section>
            </Wrapper>
        </>
    )
}
