import {expect} from 'chai';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import {GET_CAMPUSES, GET_STUDENTS} from '../action-creators/actions';
import {getCampuses, getStudents} from "../action-creators/actions";

const testCampusesArr = [{
    id: 2,
    name: "Hunter",
    image: "https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2012/10/Hunter-College-Skybridge-East-Side-68th-Street-Manhattan-NYC.jpg",
    updatedAt: "2017-08-28T01:33:16.090Z",
    createdAt: "2017-08-28T01:33:16.090Z"
}, {
    id: 3,
    name: "Baruch",
    image: "https://www.baruch.cuny.edu/undergrad/images/VerticalCampus2_002.jpg",
    updatedAt: "2017-08-28T01:35:35.956Z",
    createdAt: "2017-08-28T01:35:35.956Z"
}];

const testStudents = [{
        id: 1,
        name: "Joel",
        email: "joel@gmail.com",
        createdAt: "2017-08-28T02:04:31.083Z",
        updatedAt: "2017-08-28T02:04:31.083Z",
        campusId: 1,
        campus: 1
    },
    {
        id: 2,
        name: "Rob",
        email: "rob@gmail.com",
        createdAt: "2017-08-28T02:04:38.646Z",
        updatedAt: "2017-08-28T02:04:38.646Z",
        campusId: 1,
        campus: 1
    }];


        describe
('Action Creators', () => {
    describe('getCampuses', () => {
        it('returns properly formatted action', () => {
            expect(getCampuses(testCampusesArr)).to.be.deep.equal({
                type: 'GET_CAMPUSES',
                campuses: testCampusesArr
            })
        })
    });

    describe('getStudents', () => {
        it('returns properly formatted action', () => {
            expect(getStudents(testStudents)).to.be.deep.equal({
                type: 'GET_STUDENTS',
                students: testStudents
            })
        })
    });

});

describe('Reducer', () => {

    const initialState = {
        campuses: [],
        students: []
    };
    let testStore;

    beforeEach('Create testing store and freezing it', () => {
        testStore = createStore(rootReducer);
        // freeze store so we don't mutate!!
        Object.freeze(testStore.getState());
    });

    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal(initialState);
    });

    // what to test for?
    // test if there is a reducer for each of the actions
    // test for getCampuses and getCampus

    describe('GET_CAMPUSES', () => {
        const nextState = {
            campuses: testCampusesArr,
            students: [],
        };

        it('sets new campuses from the action creator to campuses', () => {
            expect(rootReducer(undefined, {type: GET_CAMPUSES, campuses: testCampusesArr})).to.deep.equal(nextState)
        });
    });

    describe('GET_STUDENTS', () => {
        const nextState = {
            campuses: [],
            students: testStudents,
        };
        it('should set students to the students from the action', () => {
            expect(rootReducer(undefined, getStudents(testStudents))).to.be.deep.equal(nextState);
        })
    });



});

// TODO: Fetch campuses and students on app load

