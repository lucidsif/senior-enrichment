import axios from 'axios';

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_STUDENTS = 'GET_STUDENTS';

export const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
};

export const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
};

export const fetchCampuses = () => (dispatch) => {
    axios.get('/api/campuses').then(res => res.data).then((campuses) => {
        dispatch(getCampuses(campuses));
    })
        .catch(console.error)
};

export const postCampus = (campusObj) => (dispatch) => {
    axios.post('/api/campuses', campusObj)
        .then(response => response.data)
        .then((campus) => {
            dispatch(fetchStudents());
            dispatch(fetchCampuses());
        })
        .catch(console.error);

};

export const putCampus = (campusId, campusObj) => (dispatch) => {
    axios.put(`/api/campuses${campusId}`, campusObj)
        .then(response => response.data)
        .then((campus) => {
            dispatch(fetchStudents());
            dispatch(fetchCampuses());
        })
        .catch(console.error);

};

// on delete, cascade - test backend
export const deleteCampus= (campusId) => (dispatch) => {
    axios.delete(`/api/campuses/${campusId}`)
        .then((response) => response.data)
        .then(() => {
            //dispatch(removeStudent(studentId));
            dispatch(fetchStudents());
            dispatch(fetchCampuses());

        })
        .catch(console.error)
};

export const fetchStudents = () => (dispatch) => {
    axios.get('/api/students')
        .then(res => res.data)
        .then((students) => {
            dispatch(getStudents(students));
        })
        .catch(console.error);
};

export const postStudent = (studentObj) => (dispatch) => {
    axios.post('/api/students', studentObj)
        .then(response => response.data)
        .then((student) => {
            //dispatch(getStudent(student))
            dispatch(fetchStudents());
            dispatch(fetchCampuses());
        })
        .catch(console.error);

};

export const deleteStudent = (studentId) => (dispatch) => {
    axios.delete(`/api/students/${studentId}`)
        .then((response) => response.data)
        .then(() => {
            //dispatch(removeStudent(studentId));
            dispatch(fetchStudents());
            dispatch(fetchCampuses());

        })
        .catch(console.error)
};


