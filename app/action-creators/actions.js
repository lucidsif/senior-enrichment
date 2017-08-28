const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

export const getCampuses = (campusesArr) => {
    return {
        type: GET_CAMPUSES,
        campuses: campusesArr
    }
};

export const getCampus = (campus) => {
    return {
        type: GET_CAMPUS,
        campus: campus
    }
}