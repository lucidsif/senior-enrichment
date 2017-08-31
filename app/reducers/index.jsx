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
        // case GET_CAMPUS:
        //     return Object.assign({}, state, {campuses: state.campuses.concat(action.campus)});
        case GET_STUDENTS:
            return Object.assign({}, state, {students: action.students});
        // case GET_STUDENT:
        //     return Object.assign({}, state, {students: state.students.concat(action.student)});
        // case ADD_STUDENT:
        //     return Object.assign({}, state, {addedStudent: action.addedStudent});
        // case REMOVE_STUDENT:
        //     const newStudentsArr = state.students.filter((student) => student.id !== action.deletedStudentId);
        //     return Object.assign({}, state, {students: newStudentsArr });
        default:
            return state
    }
};

export default rootReducer
