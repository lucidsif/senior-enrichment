import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function DarkNavbar() {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Directory of Galactic Degree Mills</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Studs</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}