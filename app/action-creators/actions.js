export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';

export const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
};

export const getCampus = (campus) => {
    return {
        type: GET_CAMPUS,
        campus: campus
    }
};

