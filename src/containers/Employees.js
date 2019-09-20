import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showEmployeesActions} from '../actions/EmployeesActions'
import Employe from '../components/Employe'

class Employees extends Component{
    componentDidMount() {
        this.props.showEmployeesActions()
    }

    render(){
        const {employees} = this.props
        //columnas
        const columns = [
            {
                label: 'Nombre',
                field: 'nombre',
                sort: 'asc',
                width: 900
            },
            {
                label: 'Salario',
                field: 'salario',
                sort: 'asc',
                width: 900
            },
            {
                label: 'edad',
                field: 'edad',
                sort: 'asc',
                width: 900
            }
        ];
        //filas
        const rows = [];

        return(
            <React.Fragment>
                <h2 className="text-center my-5">Lista de Empleados</h2>
                <Employe
                    employees={employees}
                    columns={columns}
                    rows={rows}
                />
           </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    employees: state.employeesReducer.employees
})

const mapDispatchToProps = {
    showEmployeesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)