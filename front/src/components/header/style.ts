import styled from "styled-components";

export const HeaderBox = styled.div`
  @media (max-width: 780px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-10);
    height: auto;
    margin-top: 80px;
    padding: 25px 0px;
    border-bottom: 0.5px solid var(--grey-1);
    transition: 0.2s;
    div {
      width: 300px;
      margin: auto;
      display: flex;
      flex-flow: column wrap;
      align-items: left;
    }
    p {
      font: var(--body-1-400);
      color: var(--grey-1);
    }
    h4 {
      color: var(--grey-0);
    }
  }
  @media (min-width: 780px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-10);
    height: 80px;
    padding: 25px;
    border-bottom: 0.5px solid var(--grey-1);
    transition: 0.2s;
    margin-top: 80px;
    div {
      width: 780px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h4 {
      font: var(--heading-2-600);
      color: var(--grey-0);
    }
    p {
      font: var(--body-1-400);
      color: var(--grey-1);
    }
  }
`;

