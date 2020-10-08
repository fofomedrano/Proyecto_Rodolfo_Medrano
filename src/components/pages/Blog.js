import React from 'react';
import { PageLayout } from 'components/common';
import { Jumbotron } from 'components/common';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import Calculadora from 'components/common/Calculadora';


const Styles = styled.div` 
  .convertidor {
    padding: 50px;
    border: 2px solid;
    margin-bottom: 50px;
  }
`;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 50%;
  left: 45%;
`;

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            estaCargado: false,
            elementos: []
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/fofomedrano/demo-server/posts")
            .then(respuesta => respuesta.json())
            .then(
                (resultado) => {
                    this.setState({
                        error: null,
                        estaCargado: true,
                        elementos: resultado
                    });
                },
                // Manejo de errores
                (errores) => {
                    this.setState({
                        error: errores,
                        estaCargado: true,
                        elementos: []
                    });
                }
            )
    }

    render() {

        const { error, estaCargado, elementos } = this.state;
        if (error) {
            return <div>Se encontró el siguiente error: {error.message}</div>;
        } else if (!estaCargado) {
            
            return <div><BounceLoader
            css={override}
            size={60}
            color={"#0E79B2"}
          /></div>;

        } else {
            return (
                <PageLayout >
                    <Styles >
                        <Jumbotron >
                            <Container>
                                <Row className="personal-profile">
                                    <Col md="4" className="personal-profile__avatar">
                                        <h1>Blog con hooks</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                        <Container>
                            <Row className="personal-profile">
                                <Col md="12" className="personal-profile__avatar">
                                    <ul>
                                        {elementos.map(elemento => (
                                            <li key={elemento.id}>
                                             {elemento.name} {elemento.title} <br/> {elemento.content} <hr/>
                                            </li>
                                            
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                            <Row className="personal-profile convertidor">
                            <h1>Convertidor</h1>
                                <Col md="12" className="personal-profile__avatar">
                                 <Calculadora></Calculadora>
                                </Col>
                            </Row>
                            
                        </Container>
                        
                    </Styles>
                </PageLayout>

            );
        }

    }
}

export default Blog;