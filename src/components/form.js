import React  from 'react';

export default class Formulario extends React.Component{
    state = {
        tarea : ''
    }
    handlerForm = e =>{
        e.preventDefault()
        this.props.handlerTarea(this.state.tarea)
        e.currentTarget.reset()
    };
    handlerInput = e =>{
        this.setState({
            tarea : e.target.value
        });
    };
    render(){
        return(
            <form onSubmit = {this.handlerForm}>
                <input type="text" 
                value ={this.state.tarea}
                onChange ={this.handlerInput}/>
            </form>
        )
    }
}