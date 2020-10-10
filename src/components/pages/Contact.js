import React from 'react';
import {PageLayout} from 'components/common';
import { Jumbotron } from 'components/common';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImg from '../../assets/backgroundImg.jpg';
import styled from 'styled-components';

const Styles = styled.div` 
  
      .personal-profile .personal-profile__avatar img {
    border-radius: 5px;
    box-shadow: 0 0 27px rgba(96,96,96,.34);
    width: 90%;
    height: 380px;
    -o-object-fit: cover;
    object-fit: cover;
    margin-top: 10px;
    position: relative;
    top: 40px;
}
    .personal-profile .personal-profile__name {
    font-size: 44px;
    line-height: 50px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 10px;
}
`;

export default function Contact() {

    return (
        <PageLayout >
                    <Styles >
                        <Jumbotron >
                            <Container>
                                <Row className="personal-profile">
                                    <Col md="4" className="personal-profile__avatar">
                                        <img src={backgroundImg} alt="background" />
                                    </Col>
                                    <Col md="8">
                                        <p className="personal-profile__name">Contacto</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>                 
                    </Styles>
                </PageLayout>
    )
}