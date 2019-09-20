import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Task = (props) => {
    const { employees, rows,  columns} = props;

    employees.map(
        (employee, index) => (
            //Insertar un objeto con las columnas en la posición: 'index' del arreglo: 'rows'
            rows[index] = {
                name: employee.employee_name,

                salary: employee.employee_salary,

                age: employee.employee_age,
            }
        )
    )

    const data = {
        columns, // columnas
        rows // filas
    }

    return (
        <React.Fragment>
            <MDBDataTable
                striped
                hover
                bordered
                small
                data={data}
            />
        </React.Fragment>
    )
}

export default Task;