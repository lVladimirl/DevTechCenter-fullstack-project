import styled from "styled-components";

export const Card = styled.div`
  @media (max-width: 780px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;
    gap: 12.18px;

    width: 280px;
    height: 48.73px;
    left: 12.18px;
    top: 75.12px;

    background-color: var(--grey-4);
    color: var(--grey-0);
    &:hover {
      background-color: var(--grey-2);
    }
    border: none;
    border-radius: 4px;

    h4 {
      font: var(--tech-title-700);
      color: var(--grey-0);
      margin-left: 0%;
    }
    p {
      font: var(--body-1-400);
      color: var(--grey-1);
    }
  }
  @media (min-width: 780px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;
    gap: 12.18px;

    width: 742px;
    height: 48.73px;
    left: 12.18px;
    top: 75.12px;

    background-color: var(--grey-4);
    color: var(--grey-0);
    &:hover {
      background-color: var(--grey-2);
    }
    border: none;
    border-radius: 4px;

    h4 {
      font: var(--tech-title-700);
      color: var(--grey-0);
      margin-left: 0%;
    }
    p {
      font: var(--body-1-400);
      color: var(--grey-1);
    }
  }
`;
