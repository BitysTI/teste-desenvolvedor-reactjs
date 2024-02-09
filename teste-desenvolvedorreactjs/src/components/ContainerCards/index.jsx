import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContainerCardsStyle, TituloContainer, InfoUsers } from "./style";
import CustomButton from "../Buttons";
import UserList from "../UsersList";
import ModalAdicionar from "../Modal";

function ContainerCards({ users, profiles, onDelete, addUser }) {
  return (
    <ContainerCardsStyle>
      <TituloContainer>
        <p className="pTituloCards">Consulta de usuários</p>
        <ModalAdicionar addUser={addUser} />
      </TituloContainer>
      <InfoUsers>
        <p className="pNome">Nome</p>
        <p className="pCpf">CPF</p>
        <p className="pSituacao">Situação</p>
        <p className="pPerfil">Perfil</p>
        <p className="pIdioma">Idioma</p>
      </InfoUsers>

      <UserList users={users} profiles={profiles} onDelete={onDelete} />
    </ContainerCardsStyle>
  );
}

export default ContainerCards;
