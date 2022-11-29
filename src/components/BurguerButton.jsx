import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";

export default function BurguerButton() {
    return (
        <Navbar  expand="lg"  >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <nav className='contNav'>
                        <ul className='nav'>
                            <NavLink id='link' to='/'>
                                <strong>Home</strong>
                            </NavLink>
                            <NavLink id='link' to='/imc'>
                                <strong>IMC Calculator</strong>
                            </NavLink>
                            <NavLink id='link' to='/edad'>
                                <strong>Age Calculator</strong>
                            </NavLink>
                            <div className='kruger'>
                                <img className='logo'
                                    src={require(`../assets/K.png`)}
                                    alt='Logo de Kruger'
                                />
                                <p className='k'><strong>KrugerStar</strong></p>
                            </div>
                            <NavLink id='link' to='/clock'>
                                <strong>My Clock</strong>
                            </NavLink>
                            <NavLink id='link' to='/about'>
                                <strong>About Me</strong>
                            </NavLink>
                            <NavLink id='link' to='/contact'>
                                <strong>Contact</strong>
                            </NavLink>

                        </ul>
                    </nav>
                    <div className="linea"></div>
            </Navbar.Collapse>
        </Navbar>
    );
}
