import {
    SHOW_TASKS,
    ADD_TASK,
    SHOW_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../actions/types';
import axios from 'axios';

export const showTasksActions = () => async dispatch => {
    const response = await axios.get('https://api-rest-prueba-backend.herokuapp.com/api/task')
    dispatch({
        type: SHOW_TASKS,
        payload: response.data
    })
}

export const addTaskActions = task => async dispatch => {
    const response = await axios.post('https://api-rest-prueba-backend.herokuapp.com/api/task', task)
    dispatch({
        type: ADD_TASK,
        payload: response.data.task
    })
}

export const showTaskActions = idTask => async dispatch => {
    const response = await axios.get(`https://api-rest-prueba-backend.herokuapp.com/api/task/${idTask}`)
    dispatch({
        type: SHOW_TASK,
        payload: response.data
    })
}

export const editTaskActions = task => async dispatch => {
    const response = await axios.put(`https://api-rest-prueba-backend.herokuapp.com/api/task/${task._id}`, task)
    dispatch({
        type: EDIT_TASK,
        payload: response.data
    })
}

export const deleteTaskActions = idTask => async dispatch => {
    const response = await axios.delete(`https://api-rest-prueba-backend.herokuapp.com/api/task/${idTask}`)
    dispatch({
        type: DELETE_TASK,
        payload: response.data.task
    })
}