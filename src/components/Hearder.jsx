import { propTypes } from "react-bootstrap/esm/Image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from "react-bootstrap";

export function Header ( props ) {
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">{ props.text }</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/wines">Wines</Nav.Link>
                        <Nav.Link href="/about">Our history</Nav.Link>
                        <Nav.Link href="/login">Sign in</Nav.Link>
                        <Nav.Link href="/register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}