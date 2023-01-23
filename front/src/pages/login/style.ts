import styled from "styled-components";

export const FormBox = styled.div`
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;

    width: 90%;
    height: auto;
    

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
      height: auto;
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
  height: auto;

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
    height: auto;
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
export const FormHeader = styled.div`
display:flex;
justify-content: space-between;
h1 {
  margin: 50px 0px 40px;
  align-self: center;
  height: auto;
}
button{
  width:70px;
  margin: 50px 0px 40px;  
}
`