import styled from "styled-components";

export const RegisterPage = styled.div`
  width: 100%;
  background-color: #ffffff;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  img {
    @media (max-width: 500px) {
      height: 76px;
    }
  }

  h2 {

    margin-bottom: 13px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 157.97%;
    /* or 57px */

    //   text-align: center;

    @media (max-width: 500px) {
      margin: 13px 0px 13px;
    }
  }

  form {
    width: 47%;
    display: flex;
    flex-flow: column;

    @media (max-width: 768px) {
      width: 90%;
    }
    @media (max-width: 500px) {
    }

    .input-error {
      /* Poppins Regular 12 */

      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 157.97%;
      /* identical to box height, or 19px */

      color: #bd2020;
    }

    .form-input {
      display: flex;
      flex-flow: column;
      height: 80px;
    }

    input {
      background: #ffffff;
      /* Thunder */

      border: 1px solid #362e34;
      box-sizing: border-box;
      border-radius: 5px;

      height: 52px;

      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 157.97%;
      /* identical to box height, or 28px */

      padding-left: 16px;
      padding-top: 5px;
      padding-bottom: 5px;

      @media (max-width: 768px) {
        margin-bottom: 12px;
      }
      @media (max-width: 500px) {
        margin-bottom: 12px;
      }

      color: rgba(0, 0, 0, 0.5);
    }

    span {
      /* Poppins Semibold 18 */

      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 157.97%;
      /* or 28px */

      color: #362e34;
    }
  }
`;

export const RadioButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    flex-flow: column;
    align-items: flex-start;

    margin-bottom: 20px;
  }

  label {
    display: flex;
    flex-flow: row nowrap;
    vertical-align: middle;

    margin-right: 101px;

    @media (max-width: 500px) {
      margin-right: 0px;
    }

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 157.97%;
    /* identical to box height, or 38px */

    text-align: center;

    /* Thunder */
    color: #362e34;
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

export const Radio = styled.div`
  height: 31px;
  width: 31px;
  border-radius: 31px;
  background-color: #c4c4c4;
  margin-right: 24px;

  :hover {
    cursor: pointer;
  }
`;

export const CheckedRadio = styled.div`
  height: 31px;
  width: 31px;
  border-radius: 31px;
  background-color: #0e7c7b;
  margin-right: 24px;

  :hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  background: #0e7c7b;
  border: 0;
  border-radius: 5px;
  margin-top: 24px;
  padding: 6px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 157.97%;
  /* identical to box height, or 32px */

  text-align: center;

  /* Gallery */

  color: #f0f0f0;

  :hover{
    cursor: pointer;
  }
`;

export const DisabledButton = styled(Button)`
  background-color: #f0f0f0;

  /* Thunder */

  color: #362e34;

  :hover{
    cursor: default;
  }
`;
