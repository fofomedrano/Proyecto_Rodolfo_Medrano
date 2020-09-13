import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Autenticacion from './Autenticacion';

const Styles = styled.div` 
    .section {
      padding-top: 60px;
      padding-bottom: 60px;  
    }  
`;


export function LoginMain(props) {
    const skills = props.skills;

    return (
        <Styles>
            <Container className="section">
               
                        <Autenticacion nombre="Rodolfo"/>
                              
            </Container>
        </Styles>
    )
}