import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImg.jpg';

const Styles = styled.div` 
    .jumbo {
        background:   url(${backgroundImg}) no-repeat fixed bottom;
        background-size: cover;
        height: 482px;
        position: relative;
        z-index: -2;
        color: #fff;
    }
    .overlay {
        background: black; 
        opacity: 0.6;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
`

export class Jumbotron extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {date: new Date()};
      
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.iteración(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      iteración() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
                <Styles bg>
                    <Jumbo fluid className="jumbo">
                    <h2>Time {this.state.date.toLocaleTimeString()}.</h2>
                        <div  className="overlay"></div>
                        {this.props.children}
                    </Jumbo>
                </Styles>
        );
      }

}