import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                <h1>
                    <Link to={`/`} 
                        className="btn btn-danger nuevo-post">
                        Inicio
                    </Link>
                </h1>

                <Link to={`/tasks/new`} 
                    className="btn btn-danger nuevo-post">
                    Agregar Tarea
                </Link>

                <Link to={`/employees`} 
                    className="btn btn-danger">
                    Empleados REST
                </Link>
            </nav>
        )
    }
}

export default Header