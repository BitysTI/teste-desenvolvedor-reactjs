import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImExit } from "react-icons/im";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logoBity from "../../images/logo-inversa.png";

function NavbarMobile(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="primary" light>
        <NavbarBrand href="/" className="me-auto">
          <img src={logoBity} alt="imagem logo" style={{ width: "100px" }} />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="me-2"
          style={{ color: "#fff" }}
        />
        <Collapse isOpen={!collapsed} navbar style={{ color: "#fff" }}>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink
                href="/components/"
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
              </NavLink>
            </NavItem>
            <NavItem></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMobile;
