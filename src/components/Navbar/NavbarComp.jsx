import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbarComp.css'

const NavbarComp = () => {
    return (
        <div>
            <Navbar key='sm' bg="light" expand='sm' className="mb-3 navbarComp">
            <Container fluid>
                <Navbar.Brand href="#">Cat Collection</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Our Cats</Nav.Link>
                    <Nav.Link href="#action2">Collections</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
