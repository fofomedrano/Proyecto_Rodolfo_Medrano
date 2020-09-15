import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {GenericButton} from './GenericButton'; 
import {ReactTypingEffectTitle} from './ReactTypingEffectTitle'; 

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


export function Hello(props) {
    const skills = props.skills;

    return (
        <Styles>
            <Container className="section">
                <Row>
                
                    <Col md="10">
                        <h1 className="section__title"><ReactTypingEffectTitle>Hi_</ReactTypingEffectTitle></h1>
                        <p className="section__description">
                        I am a Front End Web Developer able to build a great looking interface for your project from the ground up, from concept to
          layout and programming to UX and SEO. I am also skilled at writing well-designed, testable and efficient code using
          current best practices in Web development. Fast learner, hard worker and team player.
                        </p>
                        <GenericButton>   
                             Download Cv
                        </GenericButton>
                    </Col>
                    

                </Row>
                
            </Container>
            <Container className="section">
                <Row>
                    <Col md="10">
                        <h2  className=".section__title"><ReactTypingEffectTitle>Resume_</ReactTypingEffectTitle></h2>
                        <p className="section__description">Have a look at my resume <i><b>below </b></i> 
                        </p>
                    </Col>
                </Row>
                <Row>
                    
                    <Col md="8" className="resume-list">
                        <h3  className="resume-list__title">Education</h3>
                        <div className="resume-list__block">
                            <p className="resume-list__block-title">Universidad Internacional de las Américas</p>
                            <p className="resume-list__block-date">2013-2020</p>
                            <p className="resume-list__block-date">Bachelor of Software Engineering</p>
                        </div>
                        <div className="resume-list__block">
                            <p className="resume-list__block-title">Angel High School</p>
                            <p className="resume-list__block-date">1996-2001</p>
                            <p className="resume-list__block-date">High School</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="8" className="resume-list">
                        <h3  className="resume-list__title">Employment</h3>
                        <div className="resume-list__block">
                            <p className="resume-list__block-title">GBS Data Corporation</p>
                            <p className="resume-list__block-date">October 2019 - Current</p>
                            <p className="resume-list__block-date">Web Developer</p>
                        </div>
                        <div className="resume-list__block">
                            <p className="resume-list__block-title">Greenpow Costa Rica</p>
                            <p className="resume-list__block-date">February 2016 - October 2019</p>
                            <p className="resume-list__block-date">Web Developer</p>
                        </div>
                    </Col>
                </Row> 
                <Row>
                    
                    <Col md="8" className="resume-list">
                        <h3  className="resume-list__title">General Skills</h3>
                        <div className="resume-list__block">
                            <ul  className="resume-list__block-date">{
                            skills.map((skill)=>
                            <li key= {skill[0]}>
                                {skill[1]}
                            </li>
                            )
                        }</ul>
                        </div>
                    </Col>
                </Row>     
            </Container>
        </Styles>
    )
}