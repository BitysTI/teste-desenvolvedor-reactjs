import styled from "styled-components";

export const ContainerCardsStyle = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
  width: 80%;
  border: solid 2px rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  margin-top: 15%;
  margin-bottom: 10%;
  .pTituloCards {
    font-weight: 800;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const TituloContainer = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;
export const InfoUsers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: solid 1px rgb(240, 240, 240);
  border-radius: 5px;
  padding: 10px;
  gap: 6%;
  .pNome {
    font-size: 0.9rem;
  }
  .pCpf,
  .pSituacao,
  .pPerfil,
  .pIdioma {
    font-size: 0.9rem;
  }

  p {
    font-weight: 700;
  }
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: solid 1px rgb(240, 240, 240);
    border-radius: 5px;
    padding: 10px;
    gap: 5%;
    .pNome {
      font-size: 1.1rem;
    }
    .pCpf,
    .pSituacao,
    .pPerfil,
    .pIdioma {
      font-size: 1.1rem;
    }
  }
`;
