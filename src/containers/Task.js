import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showTasksActions} from '../actions/TasksActions'
import Task from '../components/Tasks'
import { deleteTaskActions } from '../actions/TasksActions';

class Tasks extends Component{
    componentDidMount() {
        this.props.showTasksActions()
    }

    deleteTask = (_id) => {
        this.props.deleteTaskActions(_id)
    }

    render(){
        const {tasks} = this.props
        return(
            <React.Fragment>
                <h2 className="text-center my-5">Lista de tareas</h2>
                <Task
                    tasks={tasks}
                    deleteTask={this.deleteTask}
                />
           </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    tasks: state.tasksReducer.tasks
})

const mapDispatchToProps = {
    showTasksActions,
    deleteTaskActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)