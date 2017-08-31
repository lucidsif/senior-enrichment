import axios from 'axios';

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';
export const SELECT_CAMPUS = 'SELECT_CAMPUS';

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

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
};

export const removeStudent = (deletedStudentId) => {
    return {
        type: REMOVE_STUDENT,
        deletedStudentId
    }
}

// TODO: CREATE FETCH/redux thunks!!!!

// getCampuses

export const fetchCampuses = () => (dispatch) => {
    axios.get('/api/campuses').then(res => res.data).then((campuses) => {
        dispatch(getCampuses(campuses));
    })
        .catch(console.error)
};
// fetchStudents

export const fetchStudents = () => (dispatch) => {
    axios.get('/api/students')
        .then(res => res.data)
        .then((students) => {
            dispatch(getStudents(students));
        })
        .catch(console.error);
};

// postCampus

// postStudent

export const postStudent = (studentObj) => (dispatch) => {
    axios.post('/api/students', studentObj)
        .then(response => response.data)
        .then((student) => {
            dispatch(getStudent(student))
        })
        .catch(console.error);

};

// deleteStudent

export const deleteStudent = (studentId) => (dispatch) => {
    axios.delete(`/api/students/${studentId}`)
        .then((response) => response.data)
        .then(() => {
            // more efficient way than this?
            dispatch(removeStudent(studentId));
        })
        .catch(console.error)
}



