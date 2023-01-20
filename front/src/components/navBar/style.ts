import styled from "styled-components";

export const BoxNav = styled.nav`
  height: 80px;
  padding: 25px 0px;
  top: 0px;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.75rem;
  border-bottom: 0.5px solid var(--grey-1);
  justify-content: space-between;
  background-color: var(--grey-4);
  div {
    width: 780px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 780px) {
    background-color: var(--grey-4);
    div {
      width: 300px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
