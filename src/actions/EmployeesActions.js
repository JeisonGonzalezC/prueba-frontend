import {
    SHOW_EMPLOYEES
} from '../actions/types';
import axios from 'axios';

export const showEmployeesActions = () => async dispatch => {
    const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
    dispatch({
        type: SHOW_EMPLOYEES,
        payload: response.data
    })
}