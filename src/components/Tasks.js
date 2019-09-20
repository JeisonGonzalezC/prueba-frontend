import React from 'react';
import {Link} from 'react-router-dom'

const Task = (props) => {
    const { tasks, deleteTask } = props;
    return (
        tasks.map(task =>(
            <li className="list-group-item" key={task._id}>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                        <p className="text-dark m-0">
                            {task.name}
                        </p>
                        
                        <p className="text-dark m-0">
                            {task.description}
                        </p>
                        <span className="badge badge-warning text-dark">{task.priority}-{task.typeTask}</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end acciones">
                        <Link to={`/tasks/edit/${task._id}`} 
                            className="btn btn-primary mr-2">
                            Editar
                        </Link>
                        <button onClick={() => deleteTask(task._id)}  type="button" className="btn btn-danger">Borrar</button>
                    </div>
                </div>
            </li>
        ))
    )
}


export default Task;