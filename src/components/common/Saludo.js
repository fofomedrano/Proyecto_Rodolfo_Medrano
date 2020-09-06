import React from 'react';

function SaludoAutenticado (props) {
return <h1>Bienvenid@ {props.nombre}!</h1>;
}

function SaludoInvitado(props) {
    return <h1>Hola. Inicie sesion por favor</h1>;
}


export default class Saludo extends React.Component {
    render() {
        
        if(this.props.estaAutenticado){
        return    <SaludoAutenticado nombre={this.props.nombre}/>
        }
        return <SaludoInvitado/>
        
    }
}