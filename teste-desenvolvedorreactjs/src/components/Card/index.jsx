// Card.js
import React from "react";
import { CardUser } from "./style";
import { FaRegTrashCan } from "react-icons/fa6";

import { CgSmileSad } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RedButton from "../Buttons/red-button";

function Card({ user, profiles, onDelete }) {
  const handleDeleteClick = () => {
    toast.error("Usuário deletado! ");
    onDelete(user.id);
  };
  const getProfileName = (profileId) => {
    const profile = profiles.find(
      (p) => parseInt(p.id) === parseInt(profileId) && p.ativo == true
    );
    return profile ? profile.nome : "Inativo";
  };

  return (
    <CardUser className="card">
      <div className="container-conteudos">
        <p className="pNome"> {user.nome}</p>
        <p className="pCpf"> {user.cpf}</p>
        <p className="pAtivo"> {user.ativo ? "Ativo" : "Inativo"}</p>
        <p className="pPerfil"> {getProfileName(user.profileId)}</p>
        <p className="pIdioma"> {user.idioma}</p>
      </div>
      <RedButton color="danger">
        <FaRegTrashCan onClick={handleDeleteClick} />
      </RedButton>
    </CardUser>
  );
}

export default Card;
