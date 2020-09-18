import React from 'react';
import { PageLayout } from 'components/common';
import { Jumbotron } from 'components/common';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImg from '../../assets/backgroundImg.jpg';
import styled from 'styled-components';
import { Hello } from 'components/common';


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
    .personal-profile__contact {
    margin-bottom: 20px;
}
.contact-list{
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto Mono,monospace;
}

.contact-list.contact-list__opacity-titles dt {
    opacity: .4;
}
.contact-list dt {
    float: left;
    font-weight: 700;
    text-transform: uppercase;
}
.contact-list dd {
    padding-left: 100px;
    margin-bottom: 15px;
}


`;

class Home extends React.Component {

    render() {
        const skills = [[1, 'HTML5'],
        [2, 'CSS3'],
        [3, 'JavaScript'],
        [4, 'PHP'],
        [5, 'UX/UI'],
        [6, 'Bootstrap 4'],
        [7, 'GIT'],
        [8, 'WordPress'],
        [9, 'SQL']

        ];

  
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
                                        <p className="personal-profile__name">Rodolfo Medrano Córdoba</p>
                                        <p className="personal-profile__work">Web Developer</p>
                                        <div className="personal-profile__contact">
                                            <dl className="contact-list contact-list__opacity-titles">
                                                <dt>Phone:</dt>
                                                <dd>(506) 72041471</dd>
                                                <dt>Email</dt>
                                                <dd>fofomedrano@gmail.com</dd>
                                                <dt>Address:</dt>
                                                <dd>San José, Costa Rica</dd>
                                            </dl>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                        <Hello skills={skills}></Hello>
                        
                    </Styles>
                </PageLayout>

            );
        }

    }


export default Home;