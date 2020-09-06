import React from 'react';
import {PageLayout} from 'components/common';
import {Jumbotron} from 'components/common';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {LoginMain} from 'components/common'


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
     .personal-profile__work {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
}

`;

export default function Login() {
    return (
        <PageLayout>
            <Styles>
           <Jumbotron>
           <div className="overlay"></div>
                <Container>
                    <Row className="personal-profile">
                        <Col md="12" className="personal-profile__avatar">
                            <p className="personal-profile__name">Login</p>
                        </Col>
                    </Row>
                </Container>
           </Jumbotron>
           <LoginMain></LoginMain>
           </Styles>
        </PageLayout>
    )
}