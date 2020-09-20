import React from 'react';
import {Nav , Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .Container {
        
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: #fff;

    
    &:hover {
        color: #fff;
    }
}
.navbar-light .navbar-nav .nav-link {
    color:#fff;
}
@media  (min-width: 992px){
    .main-menu {
        background-color: rgba(0,0,0,0)!important;
        margin-bottom: -62px;
    }
}
`;


export function Header() {
    return (
        <Styles>
        <Container>
        <Navbar className="main-menu" bg="dark" expand = "lg">
            <Navbar.Brand href="/">Web Dev CR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-right">
                    <Nav.Item> <Nav.Link href="/">Home</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
        </Styles>
    )
} 