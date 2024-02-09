import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: rgb(240, 240, 240);
  color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  height: 80px;
  justify-content: space-around;
  text-align: center;
  p {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    color: black;
    width: 50%;
  }
  .pBitys {
    font-weight: 700;
  }
  .pSolucoes {
    font-weight: 300;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
