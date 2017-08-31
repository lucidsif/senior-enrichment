//import {combineReducers} from 'redux'

import {GET_CAMPUSES, GET_CAMPUS, SELECT_CAMPUS, GET_STUDENTS, GET_STUDENT, ADD_STUDENT, REMOVE_STUDENT} from '../action-creators/actions';

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
        case SELECT_CAMPUS:
            return Object.assign({}, state, {selectedCampus: action.selectedCampus});
        case GET_STUDENTS:
            return Object.assign({}, state, {students: state.students.concat(action.students)});
        case GET_STUDENT:
            return Object.assign({}, state, {students: state.students.concat(action.student)});
        case ADD_STUDENT:
            return Object.assign({}, state, {addedStudent: action.addedStudent});
        case REMOVE_STUDENT:
            const newStudentsArr = state.students.filter((student) => student.id !== action.deletedStudentId);
            // TODO: should also update campuses?
            return Object.assign({}, state, {students: newStudentsArr });
        default:
            return state
    }
};

export default rootReducer
