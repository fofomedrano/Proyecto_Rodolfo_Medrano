import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import { Container } from 'react-bootstrap';



export  function PageLayout (props) {
    return (
        <>
        <Header/>
        <Container fluid>
            {props.children}
        </Container>
        <Footer/>
        </>
    )
}