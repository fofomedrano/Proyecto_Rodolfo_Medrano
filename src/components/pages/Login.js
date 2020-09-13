import React from 'react';
import {PageLayout} from 'components/common';
import {Jumbotron} from 'components/common';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {LoginMain} from 'components/common';
import LoginForm from 'components/common/LoginForm';

const Styles = styled.div` 
    .form_row {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .personal-profile .personal-profile__name {
    font-size: 44px;
    line-height: 50px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 10px;
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
            {/* <LoginMain></LoginMain>  */}
            <Container>
                    <Row className="form_row">
                        <Col md="6">
                        <LoginForm/>
                        </Col>
                    </Row>
                </Container>
            
           </Styles>
        </PageLayout>
    )
}