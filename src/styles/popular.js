import styled from "styled-components";

export const PopularList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  margin-bottom: 5%;

  @media (max-width: 768px) {
    width: 100%;

    flex-flow: column;

    > div:not(:first-child) {
      display: none;
    }
  }
`;

export const PopularItem = styled.div`
  display: flex;
  flex-flow: column;
  width: 24%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 24px;
  }

  h3 {
    margin: 0;
  }

  img {
    // width: 330px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 500px) {
      // width: 164px;
      // height: 92px;
    }
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    span {
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
