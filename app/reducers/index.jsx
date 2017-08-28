//import {combineReducers} from 'redux'
// create redux thunks
    // fetch all campuses, fetch all students, fetch one campus, post new student

import {GET_CAMPUSES, GET_CAMPUS} from '../action-creators/actions';

const initialState = {
    campuses: [],
    students: [],
    addedStudent: {},
    selectedCampus: {}
};

const rootReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CAMPUSES:
           return Object.assign({}, state, {campuses: state.campuses.concat(action.campuses)});
        case GET_CAMPUS:
            return Object.assign({}, state, {campuses: state.campuses.concat(action.campus)});
        default:
            return state
    }
};

export default rootReducer
