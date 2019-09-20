import {
    SHOW_TASKS,
    ADD_TASK,
    SHOW_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../actions/types';

const intitialState = {
    tasks: []
}

export default function (state = intitialState, action) {
    switch (action.type) {
        case SHOW_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasks:[...state.tasks, action.payload]
            }
        case SHOW_TASK:
            return {
                ...state,
                task: action.payload
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(
                    task => task._id === action.payload._id
                    ? (task = action.payload)
                    : task,
                )
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    task => 
                    task._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}