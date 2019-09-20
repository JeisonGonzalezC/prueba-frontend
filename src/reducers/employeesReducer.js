import {
    SHOW_EMPLOYEES
} from '../actions/types';

const intitialState = {
    employees: []
}

export default function (state = intitialState, action) {
    switch (action.type) {
        case SHOW_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        default:
            return state;
    }
}