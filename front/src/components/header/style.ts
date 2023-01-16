import styled from "styled-components";

export const HeaderBox = styled.div`
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-10);
    height: 80px;
    padding: 25px;
    border-bottom: 0.5px solid var(--grey-1);
    transition: 0.2s;
    h4 {
      color: var(--grey-0);
      margin-left: 0%;
    }
    
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-10);
    height: 80px;
    padding: 25px;
    border-bottom: 0.5px solid var(--grey-1);
    transition: 0.2s;

    h4 {
      font: var(--heading-2-600);
      color: var(--grey-0);
      margin-left: 10%;
    }
  }
`;

export const Logo = styled.img`
  // width:140px;
  height: 26px;
  cursor: pointer;
  border-radius: 100%;
`;
