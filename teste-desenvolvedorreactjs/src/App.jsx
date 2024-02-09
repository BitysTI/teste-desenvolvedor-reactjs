import "./App.css";
import ContainerCards from "./components/ContainerCards";
import NavbarMobile from "./components/navbarMobile";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgSmileSad } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import NavbarPc from "./components/navbarPc";

function App() {
  const [users, setUsers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Validar o tamanho da tela para renderizar o elemento
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // lista api users
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error api users:", error);
      });

    // lista api profiles
    axios
      .get("http://localhost:3000/profiles")
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("Error api profiles:", error);
      });
  }, []);

  // Função para deletar usuario

  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // Função para adicionar usuario
  const addUser = (newUser) => {
    axios
      .post("http://localhost:3000/users", newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {windowWidth < 768 ? <NavbarMobile /> : <NavbarPc />}
      </header>
      <section className="sessaoPrincipal">
        <ContainerCards
          users={users}
          profiles={profiles}
          onDelete={handleDeleteUser}
          addUser={addUser}
        />
      </section>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
