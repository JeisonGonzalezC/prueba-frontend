import React, { Component, Fragment } from 'react';
import FormTask from '../components/FormTask';

import { connect } from 'react-redux';
import { showTaskActions, editTaskActions } from '../actions/TasksActions';

class NuevoTipoEtapa extends Component {
    state = {
        _id: '',
        name: '',
        description: '',
        priority: '',
        typeTask: ''
    }

    componentDidMount() {
        const { _id } = this.props.match.params
        this.props.showTaskActions(_id)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { _id, name, description, priority, typeTask} = nextProps.task;

        this.setState({
            _id,
            name,
            description,
            priority,
            typeTask
        });
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

        this.props.editTaskActions(this.state)

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

const mapStateToProps = state =>({
    task: state.tasksReducer.task
})

const mapdispatchToProps = {
    showTaskActions,
    editTaskActions
}

export default connect(mapStateToProps, mapdispatchToProps)(NuevoTipoEtapa);
