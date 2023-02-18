import styled from "styled-components";

export const TechForm = styled.form`
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    margin: 160px auto;

    width: 90%;
    height: auto;

    border-radius: 4px;
    background-color: var(--grey-3);

    input,
    label,
    small {
      width: 90%;
      margin: 8px 5%;
    }

    button {
      margin: 8px 5% 30px;
    }
  }
  display: flex;
  flex-direction: column;
  margin: 160px auto;

  width: 370px;
  height: auto;

  border-radius: 4px;
  background-color: var(--grey-3);

  input,
  label,
  small {
    width: 90%;
    margin: 8px 5%;
  }

  button {
    margin: 8px 5% 30px;
  }
`;
export const TechFormHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--grey-2);
  border-radius: 4px 4px 0px 0px;
  color: var(--grey-0);
  display: flex;
  justify-content: space-between;

  p {
    margin: auto 5%;
  }

  svg {
    margin: auto 5%;
    width: 25px;
  }
`;

export const TechEditDeleteSection = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
`

