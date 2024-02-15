import React, { useState } from 'react';
import { Navbar, NavbarBrand, Button, NavbarText } from 'reactstrap';
import { TbLogout2 } from "react-icons/tb";
import './Global.css'; 


const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="navbar-header">
            <Navbar color="primary" dark expand="md">

                <NavbarBrand href="/" className="Navbar-navbrand">
                    <img src="/logo-inversa.png" alt="" width="70px" />
                    <span>Usuarios</span>
                </NavbarBrand>

                <button className="navbar-toggler" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`navbar-collapse ${collapsed ? 'collapse' : ''}`} >

                    <NavbarText className="NavbarText">

                        <Button color="primary" >
                            <TbLogout2 /> Logout
                        </Button>

                    </NavbarText>

                </div>

            </Navbar>

        </div>
    );
};

export default NavBar;
