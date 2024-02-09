import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  ButtonGroup,
} from "reactstrap";

function validateCPF(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, "");

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = sum % 11;
  let digit1 = remainder < 2 ? 0 : 11 - remainder;

  // Verifica se o primeiro dígito verificador está correto
  if (parseInt(cpf.charAt(9)) !== digit1) {
    return false;
  }

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = sum % 11;
  let digit2 = remainder < 2 ? 0 : 11 - remainder;

  // Verifica se o segundo dígito verificador está correto
  if (parseInt(cpf.charAt(10)) !== digit2) {
    return false;
  }

  // CPF válido
  return true;
}
function validateRG(rg) {
  // Verifica se o RG possui o formato esperado (9 dígitos)
  if (!/^\d{9}$/.test(rg)) {
    return false;
  }

  // Verifica se os dígitos são repetidos (ex: 111111111)
  if (/^(\d)\1+$/.test(rg)) {
    return false;
  }

  // Verifica se os dígitos são sequenciais (ex: 123456789)
  if (/0123456789|9876543210/.test(rg)) {
    return false;
  }

  // Outras regras de validação específicas podem ser adicionadas aqui

  // Se passou por todas as validações, retorna true
  return true;
}

function ModalAdicionar({ addUser }) {
  const [modal, setModal] = useState(false);
  const [rSelected, setRSelected] = useState(null);
  const [rSelected3, setRSelected3] = useState(null);
  const [rSelected4, setRSelected4] = useState(null);

  const toggle = () => setModal(!modal);

  const handleAddUser = () => {
    // Obter valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const rg = document.getElementById("rg").value;
    const dataNasc = document.getElementById("data_nasc").value;
    const email = document.getElementById("email").value;

    // Validar se todos os campos obrigatórios estão preenchidos
    if (
      !nome ||
      !cpf ||
      !rg ||
      !dataNasc ||
      !email ||
      !rSelected ||
      !rSelected3 ||
      !rSelected4
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Adicionar as validações de CPF e RG aqui
    const isValidCPF = validateCPF(cpf);
    const isValidRG = validateRG(rg);

    if (!isValidCPF) {
      toast.error("Por favor, insira um CPF válido.");
      return;
    }

    if (!isValidRG) {
      toast.error("Por favor, insira um RG válido.");
      return;
    }

    // Criar o novo usuário com os dados fornecidos
    const newUser = {
      nome,
      cpf,
      rg,
      data_nasc: dataNasc,
      sexo: rSelected,
      email,
      ativo: "Ativo",
      profileId: rSelected4,
      idioma: rSelected3,
    };

    // Chamar a função addUser passando o novo usuário
    addUser(newUser);

    // Fechar o modal após adicionar o usuário
    toggle();
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        + Adicionar
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Adicionar usuário</ModalHeader>
        <ModalBody style={{ display: "flex", flexDirection: "column" }}>
          Nome:
          <Input type="text" id="nome" placeholder="Nome completo" required />
          CPF:
          <Input type="text" id="cpf" placeholder="999.999.999-99" required />
          RG:
          <Input type="text" id="rg" placeholder="9999999-9" required />
          Data de nascimento:
          <Input type="date" id="data_nasc" required />
          Sexo:
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => setRSelected("F")}
              active={rSelected === "F"}
              required
            >
              Feminino
            </Button>
            <Button
              color="primary"
              onClick={() => setRSelected("M")}
              active={rSelected === "M"}
              required
            >
              Masculino
            </Button>
          </ButtonGroup>
          E-mail:
          <Input
            type="email"
            id="email"
            placeholder="exemplo@exemplo.com"
            required
          />
          Cargo:
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => setRSelected4(1)}
              active={rSelected4 === 1}
              required
            >
              Admin
            </Button>
            <Button
              color="primary"
              onClick={() => setRSelected4(2)}
              active={rSelected4 === 2}
              required
            >
              Vendedor
            </Button>
            <Button
              color="primary"
              onClick={() => setRSelected4(3)}
              active={rSelected4 === 3}
              required
            >
              Gerente
            </Button>
          </ButtonGroup>
          Idioma:
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => setRSelected3("pt-BR")}
              active={rSelected3 === "pt-BR"}
              required
            >
              Português
            </Button>
            <Button
              color="primary"
              onClick={() => setRSelected3("en")}
              active={rSelected3 === "en"}
              required
            >
              Inglês
            </Button>
            <Button
              color="primary"
              onClick={() => setRSelected3("es")}
              active={rSelected3 === "es"}
              required
            >
              Espanhol
            </Button>
          </ButtonGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddUser}>
            Adicionar!
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAdicionar;
