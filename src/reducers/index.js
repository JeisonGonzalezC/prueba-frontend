import {combineReducers} from 'redux'
import tasksReducer from './tasksReducer'
import employeesReducer from './employeesReducer'

export default combineReducers({
    tasksReducer,
    employeesReducer
})