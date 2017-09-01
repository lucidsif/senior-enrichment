import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default function DarkNavbar() {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    {/*<LinkContainer to="/">*/}
                        {/*<NavItem eventKey={1} href="/">Home</NavItem>*/}
                    {/*</LinkContainer>*/}
                    <a href="/">Directory of Degree Mills</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to="/">
                        <NavItem eventKey={1} href="/">Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/hustlers">
                        <NavItem eventKey={2} href="/hustlers">Hustlers</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/suckers">
                        <NavItem eventKey={3} href="/suckers">Suckers</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}