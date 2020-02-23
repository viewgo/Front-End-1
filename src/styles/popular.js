import styled from "styled-components";

export const PopularList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  margin-bottom: 5%;


  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column;

    
  }
`;

export const PopularItem = styled.div`
  display: flex;
  flex-flow: column;
  width: 24%;

  @media (max-width: 1000px){
    width: 49%;
    margin-bottom: 5%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 24px;
  }

  h3 {
    margin: 0;
  }

  img {
    object-fit: cover;
    width: 80%;
    height: 80%;

    width: 100%;
    
  }

  div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-flow: column;
    }

    span {
      width: 100%;
      /* Poppins Semibold 20 */

      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 157.97%;
      /* or 32px */

      color: #362e34;
    }

    a {
      white-space: nowrap;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 157.97%;
      /* or 25px */

      color: #0e7c7b;
      text-decoration: none;
    }
  }
`;

export const FeaturedInfo = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 157.97%;
    /* or 25px */

    color: #0e7c7b;
  }

  p {
    margin: 10px 0;

    /* Poppins Regular 16 */

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 157.97%;
    /* or 25px */

    color: #362e34;
  }
`;
