import styled from "styled-components";

export const TechBox = styled.div`
  @media (max-width: 780px) {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    margin: auto;
    padding: 25px;
    width: 300px;
    height: auto;

    border-radius: 4px;
    background-color: var(--grey-3);

    transition: 0.2s;
  }
  @media (min-width: 780px) {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    margin: auto;
    padding: 25px;
    width: 780px;
    height: auto;

    border-radius: 4px;
    background-color: var(--grey-3);

    transition: 0.2s;
  }
`;

export const TechHeader = styled.div`
  @media (max-width: 780px) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    margin: auto;
    padding: 25px;
    width: 300px;
    height: auto;
    border-radius: 4px;
    background-color: var(--grey-4);

    transition: 0.2s;
    h4 {
      font: var(--heading-3-600);
      color: var(--grey-0);
    }
  }
  @media (min-width: 780px) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    margin: auto;
    padding: 25px 0px;
    width: 780px;
    height: auto;
    border-radius: 4px;
    background-color: var(--grey-4);

    transition: 0.2s;
    h4 {
      font: var(--heading-3-600);
      color: var(--grey-0);
    }
  }
`;
