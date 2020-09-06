import React from 'react';
import { Button} from 'react-bootstrap';
import styled from 'styled-components';
import img_btn_icon from '../../assets/img_btn_icon.png';

const Styles = styled.div` 
    .generic-button {
        background-color: #0E79B2;
        height: 50px;
        border-radius: 25px;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        padding: 15px;
        min-width: 170px;
        text-align: center;
        display: inline-block;
        color: #fff !important;
        font-weight: 600;
        overflow: hidden;
        border: 0px;
        transition: all .3s;
     
        &:hover {
        background-color:rgba(0, 105, 217,0.8);
    }
    .button_icon {
    height: 14px;
    margin-top: -5px;
    margin-right: 5px;
}

    }
    
`;

export function GenericButton(props) {
    return (
        <Styles>
          <Button className= "generic-button">
          <img class="button_icon" src = {img_btn_icon}/>
            {props.children}
        </Button>
        </Styles>
    )
}