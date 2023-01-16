import styled from "styled-components";

export const BoxNav = styled.nav`
  height: 80px;
  padding: 25px;
  top: 0px;
  position: fidex;
  display: flex;
  align-items: center;
  gap: 2.75rem;
  border-bottom: 0.5px solid var(--grey-1);
  justify-content: space-between;

  h1 {
    margin-left: 10%;
    color: var(--primary-color);
    font: var(--heading-1-700);
  }
  button {
    margin-right: 10%;
  }
  @media (max-width: 700px) {
    h1 {
      margin-left: 0%;
      color: var(--primary-color);
      font: var(--heading-1-700);
    }
    button {
      margin-right: 0%;
    }
  }
`;
