import styled from "styled-components";

export const FeaturedList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;

    flex-flow: column;

    > div:not(:first-child) {
      display: none;
    }
  }
`;

export const FeaturedItem = styled.div`
  // border: 1px solid red;

  width: 24%;

  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    width: 100%;

    margin-bottom: 24px;
  }

  @media (max-width: 500px) {
    img {
      width: 164px;
      height: 92px;
    }
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


color: #362E34;
  }

  img {
    // max-width: 330px;
    width: 100%;
    // max-height: 272px;
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
