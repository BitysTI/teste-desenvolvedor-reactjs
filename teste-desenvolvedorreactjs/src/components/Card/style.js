import styled from "styled-components";

export const CardUser = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
  .btn-delete {
    background-color: red;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px rgb(240, 240, 240);
  border-radius: 5px;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.8rem;
  .container-conteudos {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  .pNome {
    min-width: 30%;
    max-width: 30%;
    font-size: 0.8rem;
  }
  .pCpf,
  .pSituacao,
  .pPerfil,
  .pAtivo {
    min-width: 23%;
    max-width: 23%;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .container-conteudos {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    justify-content: space-between;
    font-size: 1.1rem;
    gap: 0;
    .pNome.pSituacao,
    .pPerfil,
    .pCpf {
      min-width: 22%;
      max-width: 22%;
      font-size: 0.9rem;
    }

    .pIdioma {
      min-width: 5%;
      max-width: 5%;
      font-size: 0.9rem;
    }
  }
`;
