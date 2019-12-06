import styled from "styled-components";

export const FeaturedList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 1000px){

  }
  @media (max-width: 768px) {
    width: 100%;

    flex-flow: column;

    > div:not(:first-child) {
      display: none;
    }
  }
`;

export const FeaturedItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 24%;

  @media (max-width: 768px) {
    width: 100%;
    // margin-bottom: 24px;
  }


  h3 {
    margin: 0;

    /* Poppins Semibold 20 */

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 157.97%;
    /* or 32px */

    color: #362e34;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeaturedInfo = styled.div`
  // margin-left: 24px;
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
