import React from 'react';
import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';

export default function Header() {
    if(isBrowser) {
        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <Nav className="justify-content-center flex-grow-1" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
    if(isMobile)
    {
        return (
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container className="justify-content-center flex-grow-1">
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="text-center flex-grow-1 pe-3">
                            <hr />
                            <Nav.Link className="phoneNav" href="/">Home</Nav.Link>
                            <hr />
                            <Nav.Link className="phoneNav" href="/projects">Projects</Nav.Link>
                            <hr />
                            <Nav.Link className="phoneNav" href="/resume">Resume</Nav.Link>
                            <hr />
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        )
    }
}
