import React from "react"
import styled from "styled-components"

export default function TourCard(props) {
    const Wrapper = styled.div`
        background-color: #ffffff;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        width: 30%;
        font-family: "Poppins", sans-serif;
        background-color: #0e7c7b;
        color: white;
        border-radius: 10px;
        margin-top: 10px;

        .img {
            width: 330px;
            height: 272px;
        }
    `
    const Wrapper2 = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `

    return (
        <Wrapper>
            <Wrapper2>
                {/* <img src={props.image} alt='descriptive tour' /> */}
                <p>{props.name}</p>
            </Wrapper2>
        </Wrapper>
    )
}
