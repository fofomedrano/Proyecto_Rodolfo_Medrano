import React from 'react';
import Saludo from './Saludo';


function BotonInicio (props) {
return <button onClick= {props.onClick} >Ingresar</button>;
}

function BotonCerrarSesion (props) {
    return <button onClick= {props.onClick} >
        Cerrar Sesion
    </button>;
    }

function SaludoInvitado(props) {
    return <h1>Hola. Inicie sesion por favor</h1>;
}


export default class Autenticacion extends React.Component {
    
    constructor(props){
        super(props);
        this.ejecutarInicioClick = this.ejecutarInicioClick.bind(this);
        this.ejecutarCierreSesionClick = this.ejecutarCierreSesionClick.bind(this);
        this.state = {estaAutenticado: false};
    }

    ejecutarInicioClick(){
        this.setState({estaAutenticado:true});
    }

    ejecutarCierreSesionClick(){
        this.setState({estaAutenticado:false});
    }
    
    render() {

        const estaAutenticado = this.state.estaAutenticado;
        let boton;

        if(estaAutenticado) {
            boton = <BotonCerrarSesion onClick={this.ejecutarCierreSesionClick}/>
        }
        else{
            boton = <BotonInicio onClick={this.ejecutarInicioClick}/>
        }
            return(
                <div>
                    <Saludo estaAutenticado={estaAutenticado} 
                    nombre={this.props.nombre}/>
                    {boton}
                </div>
            );
     
        
    }
}
