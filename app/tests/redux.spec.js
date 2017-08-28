import {expect} from 'chai';
import store from '../store';
import {getCampuses, getCampus} from "../action-creators/actions";

describe('Action Creators', () => {
    const testCampusesArr = [{
        id: 2,
        name: "Hunter",
        image: "https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2012/10/Hunter-College-Skybridge-East-Side-68th-Street-Manhattan-NYC.jpg",
        updatedAt: "2017-08-28T01:33:16.090Z",
        createdAt: "2017-08-28T01:33:16.090Z"
    },   {id: 3,
        name: "Baruch",
        image: "https://www.baruch.cuny.edu/undergrad/images/VerticalCampus2_002.jpg",
        updatedAt: "2017-08-28T01:35:35.956Z",
        createdAt: "2017-08-28T01:35:35.956Z"
    }];

    describe('getCampuses', () => {
        it('returns properly formatted action', () => {
            expect(getCampuses(testCampusesArr)).to.be.deep.equal({
                type: 'GET_CAMPUSES',
                campuses: testCampusesArr
            })
        })
    });

    describe('getCampus', () => {
        it('returns properly formated action', () => {
            expect(getCampus(testCampusesArr[0])).to.be.deep.equal({
                type: 'GET_CAMPUS',
                campus: testCampusesArr[0]
            })
        })
    })
});

