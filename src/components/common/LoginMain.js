import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {GenericButton} from './GenericButton'; 
import {ReactTypingEffectTitle} from './ReactTypingEffectTitle'; 
import Autenticacion from './Autenticacion';

const Styles = styled.div` 
    .section__title {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 42px;
    text-indent: 0px;
}
    .section__description {
    margin-bottom: 30px;
}
    .section {
      padding-top: 60px;
      padding-bottom: 60px;  
    }
    .resume-list {
    margin-top: 30px;
    margin-bottom: 30px;
}
.resume-list__title {
    font-family: Roboto Mono,monospace;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 700;
    color: #999;
    margin-bottom: 40px;
}
.resume-list .resume-list__block p {
    margin: 0;
}
.resume-list .resume-list__block-title {
    text-transform: uppercase;
    color: #0E79B2;
    font-size: 14px;
    line-height: 20px;
    font-family: Roboto Mono,monospace;
    font-weight: 700;
    padding-bottom: 5px;
}
.resume-list .resume-list__block::before {
    width: 12px;
    height: 12px;
    border: 2px solid #0E79B2;
    position: absolute;
    content: "";
    border-radius: 50%;
    background-color: #fff;
    left: 10px;
}
.resume-list .resume-list__block {
    border-left: 2px solid #0E79B2;
    padding-left: 25px;
    padding-bottom: 50px;
}

.progress-list__title {
    font-family: Roboto Mono,monospace;
    letter-spacing: 5px;
    font-weight: 700;
    color: #999;
    margin-bottom: 40px;
}
.progress-list__title, .progress-list p {
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
}
.progress-list p .progress-list__skill-value {
    float: right;
}

.progress-list .progress .progress-bar {
    background-color: #6d56c1;
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