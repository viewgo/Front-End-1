import styled from "styled-components";

export const FeaturedList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
`;

export const FeaturedItem = styled.div`
width: 50%;

display: flex;
flex-flow: row nowrap;

h3{
  margin: 0;
}

img{
    max-width: 330px;
    max-height: 272px;
}
`;

export const FeaturedInfo = styled.div`
margin-left: 24px;
display: flex;
flex-direction: column;
justify-content: space-between;

a{
  text-decoration: none;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 157.97%;
/* or 25px */


color: #0E7C7B;
}

`
