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

        const { error, estaCargado, elementos } = this.state;
        if (error) {
            return <div>Se encontró el siguiente error: {error.message}</div>;
        } else if (!estaCargado) {
            return <div>Cargando los datos...</div>;
        } else {
            return (
                <PageLayout >
                    <Styles >
                        <Jumbotron >
                            <Container>
                                <Row className="personal-profile">
                                    <Col md="4" className="personal-profile__avatar">
                                        <h1>Blog</h1>
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
                        </Container>
                    </Styles>
                </PageLayout>

            );
        }

    }
}

export default Blog;