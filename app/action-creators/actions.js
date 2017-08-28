export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';
export const SELECT_CAMPUS = 'SELECT_CAMPUS';

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';

export const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
};

export const getCampus = (campus) => {
    return {
        type: GET_CAMPUS,
        campus
    }
};

export const selectCampus = (selectedCampus) => {
    return {
        type: SELECT_CAMPUS,
        selectedCampus
    }
};

export const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
};

export const getStudent = (student) => {
    return {
        type: GET_STUDENT,
        student
    }
};

export const addStudent = (addedStudent) => {
    return {
        type: ADD_STUDENT,
        addedStudent
    }
}
