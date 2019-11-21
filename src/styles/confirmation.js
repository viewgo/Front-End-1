import styled from "styled-components";

export const PopUp = styled.div`
  width: 90%;


  position: absolute;
  top: 70px;
  left: 50%;
  margin-left: -45%;

  padding: 3px;

  background-color: #f0f0f0;

  text-align: center;

  /* Poppins Regular 12 */
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 157.97%;
  /* identical to box height, or 19px */
  /* Thunder */
  color: #362e34;

  .confirm-close{
      position: absolute;
      right: 6px;
      top: 4px;

      :hover{
          cursor: pointer;
      }
  }
`;
