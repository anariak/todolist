import React from 'react';
import Formulario from './components/form'
import Listado from './components/listado';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      nuevatarea : []
    }
  }
  agregartarea =tarea=>{
    //crear copia del state
    const lista = {...this.state.nuevatarea};
    console.log(lista)
    //enviar al nuevo componente
  }
  handlerTarea = e =>{
    this.setState({
      nuevatarea : [...this.state.nuevatarea, e]
    })
  };
  render(){
    return(
      <div className="Container">
        <Formulario 
        handlerTarea={this.handlerTarea} />
        <Listado 
        lista ={this.state.nuevatarea}/>
      </div>
    )
  }
}
export default App;
