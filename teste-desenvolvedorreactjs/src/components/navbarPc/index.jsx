import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImExit } from "react-icons/im";
import "./index.css";
import { Navbar, NavbarBrand } from "reactstrap";
import logoBity from "../../images/logo-inversa.png";

function NavbarPc() {
  return (
    <div>
      <Navbar
        className="my-2"
        color="primary"
        dark
        style={{
          margin: "0",
        }}
      >
        <NavbarBrand
          href="/"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={logoBity} alt="imagem logo" style={{ width: "100px" }} />
          <div
            style={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            Logout{" "}
            <ImExit
              style={{
                color: "#fff",
                marginLeft: "5px",
              }}
            />{" "}
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavbarPc;
