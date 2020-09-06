import React from 'react';
import {Row , Col,Container, Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .container-fluid {
        background: #222;
    }
    .footer {
        background: #222;
        height: 120px;
    }
    .navbar-light .navbar-nav .nav-link {
        color: #fff;
    }
`;

export function Footer() {
    return (
        <Styles>
        <Container fluid >
        <Navbar className ="footer" >
        <Nav className = "mr-auto">
                    <Nav.Item> <Nav.Link href="/">Footer</Nav.Link> </Nav.Item>

                </Nav>
                </Navbar>
        </Container>
        </Styles>
    )
} 