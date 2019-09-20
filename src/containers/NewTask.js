import React, { Component, Fragment } from 'react';
import FormTask from '../components/FormTask';

import { connect } from 'react-redux';
import { addTaskActions } from '../actions/TasksActions';

class NuevoTipoEtapa extends Component {
    state = {
        name: '',
        description: '',
        priority: '',
        typeTask: ''
    }

    dataFormTask = e => {
        e.preventDefault()

        if (this.state.name === '') {
            alert("Debe ingresar el nombre")
            return
        }

        if (this.state.description === '') {
            alert("Debe ingresar la descripción")
            return
        }

        if (this.state.priority === '') {
            alert("Debe ingresar la prioridad")
            return
        }

        if (this.state.typeTask === '') {
            alert("Debe seleccionar el tipo de tarea")
            return
        }

        this.props.addTaskActions(this.state)

        this.props.history.push('/')
    }

    getDataState = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <FormTask
                    dataFormTask={this.dataFormTask}
                    getDataState={this.getDataState}
                    task={this.state}
                />
            </Fragment >
        )
    }
}

const mapdispatchToProps = {
    addTaskActions
}

export default connect(null, mapdispatchToProps)(NuevoTipoEtapa);
