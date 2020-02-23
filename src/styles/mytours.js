import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 157.97%;
        /* identical to box height, or 57px */

        text-align: center;

        /* Thunder */
        color: #362e34;
    }
`

export const ToursList = styled.div`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: space-evenly;
`

export const TourCard = styled.div`
    max-width: 330px;

    margin-right: 24px;
    margin-bottom: 10px;

    @media (max-width: 500px) {
        margin-right: 0px;
    }

    .top {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        span {
            margin-left: 20px;

            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 157.97%;
            /* or 25px */

            color: #0e7c7b;

            :hover {
                cursor: pointer;
            }
        }
    }

    img {
        display: block;
        width: 330px;
        height: 272px;
        object-fit: cover;
    }

    h3 {
        /* Poppins Semibold 20 */

        margin: 0;

        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 157.97%;
        /* or 32px */
        color: #362e34;
    }
`

export const AddTourCard = styled.div`
    z-index: -1;

    width: 330px;
    height: 303px;

    position: relative;
    margin-right: 24px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        position: absolute;
        bottom: 0;

        margin: 0;

        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 157.97%;
        /* identical to box height, or 57px */

        /* Thunder */

        color: #362e34;
    }
`

export const AddTourButton = styled.div`

    width: 148px;
    height: 148px;
    background-color: #0e7c7b;
    border-radius: 100%;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 9rem;
    color: #fff;

    :hover {
        cursor: pointer;
    }

    .plus {
        position: absolute;
        top: -25%;
        text-decoration: none;
        color: #fff;
    }
`
