import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import Home from '../components/Home';
import CampusThumbnail from '../components/CampusThumbnail';
import PlanetaryCampus from '../components/PlanetaryCampus'
import StudsDirectory from '../components/StudsDirectory';
import StudFormModal from '../components/StudFormModal';
import StudTable from '../components/StudTable';

describe('React components', () => {

    describe('<Home />component', () => {

        let home;
        beforeEach('Create component', () => {
            home = shallow(<Home/>);
        });

        it('uses <CampusThumbnail />', () => {
            expect(home.find(CampusThumbnail).length).to.be.above(0);
        })
    });
    describe('<PlanetaryCampus />', () => {
        let campus;
        beforeEach('Create component', () => {
            campus = shallow(<PlanetaryCampus/>);
        });
        it('should be a <div>', () => {
            // expect
            expect(campus.is('div')).to.be.equal(true);
        })
        it('renders an <h3> title', () => {
            expect(campus.contains(<h3>Campus Name</h3>)).to.equal(true);
        })
        // it('renders an <ol> list', () => {
        //     expect(campus.contains(<ol></ol>)).to.equal(true);
        // })
    });
    describe('<StudsDirectory />', () => {
        let studsDirectory;
        beforeEach('Create component', () => {
            studsDirectory = shallow(<StudsDirectory/>)
        });
        it('should be a <div>', () => {
            expect(studsDirectory.is('div')).to.be.equal(true);
        })
        it('uses <StudTable />', () => {
            expect(studsDirectory.find(StudTable).length).to.equal(1);
        })
        it('uses <StudFormModal />', () => {
            expect(studsDirectory.find(StudFormModal).length).to.equal(1);
        })
    });
    describe('<StudTable />', () => {
        let studTable;
        beforeEach('Create component', () => {
            studTable = shallow(<StudTable />)
        });
        it('should have 3 columns', () => {
            expect(studTable.find('th')).to.have.length(3);
        })
    })
    describe('<StudFormModal />', () => {
        let studFormModal;
        beforeEach('Create component', () => {
            studFormModal = shallow(<StudFormModal />)
        });
        it('should be a <div>', () => {
            expect(studFormModal.is('div')).to.be.equal(true);
        })
    });

});