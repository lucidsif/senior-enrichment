//import {combineReducers} from 'redux'

import {GET_CAMPUSES, GET_CAMPUS, SELECT_CAMPUS, GET_STUDENTS, GET_STUDENT, ADD_STUDENT, REMOVE_STUDENT} from '../action-creators/actions';

const initialState = {
    campuses: [],
    students: [],
};

const rootReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CAMPUSES:
           return Object.assign({}, state, {campuses: action.campuses});
        case GET_STUDENTS:
            return Object.assign({}, state, {students: action.students});
        default:
            return state
    }
};

export default rootReducer
