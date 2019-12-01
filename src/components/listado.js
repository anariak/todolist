import React,{Component} from 'react';

export default class Listado  extends Component{
    render(){
        return(
            <div className='formulario'>
                <h2>Tareas</h2>
                <ul>
                    {this.props.lista.map((lista, i)=>(
                        <li key={i}>
                            {lista}
                        </li>
                    ))}
                </ul>
            </div>   
        )
    }
}