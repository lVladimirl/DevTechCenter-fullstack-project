import styled from "styled-components";

export const LoginBox = styled.div`
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;

    width: 90%;
    height: 560px;

    border-radius: 4px;

    margin: auto auto;

    h1 {
      color: var(--primary-color);
      font: var(--heading-1-700);
      margin: 75px auto 35px;
    }

    form {
      display: flex;
      flex-direction: column;

      background-color: var(--grey-3);
      height: 500px;
      padding: 25px 0px;
      box-sizing: border-box;
    }

    h2 {
      color: var(--grey-0);
      font: var(--heading-2-600);
      margin: auto auto;
    }

    input,
    label,
    small,
    button {
      width: 90%;
      margin: 8px 5%;
    }
    span {
      color: var(--grey-1);
      font: var(--headline-1-400);
      margin: auto;
      text-decoration: underline;
    }
  }
  display: flex;
  flex-direction: column;

  width: 370px;
  height: 560px;

  border-radius: 4px;

  margin: auto auto;

  h1 {
    color: var(--primary-color);
    font: var(--heading-1-700);
    margin: 75px auto 35px;
  }

  form {
    display: flex;
    flex-direction: column;

    background-color: var(--grey-3);
    height: 500px;
    padding: 25px 0px;
    box-sizing: border-box;
  }

  h2 {
    color: var(--grey-0);
    font: var(--heading-2-600);
    margin: auto auto;
  }

  input,
  label,
  small,
  button {
    width: 90%;
    margin: 8px 5%;
  }
  span {
    color: var(--grey-1);
    font: var(--headline-1-400);
    margin: auto;
    text-decoration: underline;
  }
`;
