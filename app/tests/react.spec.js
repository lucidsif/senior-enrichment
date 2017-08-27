import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import Home from '../components/Home';
import PlanetaryCampus from '../components/PlanetaryCampus'

describe('React components', () => {

    describe('<Home />component', () => {

        let home;
        beforeEach('Create component', () => {
            home = shallow(<Home /> );
        });

        it('uses <PlanetaryCampus />', () => {
            expect(home.find(PlanetaryCampus).length).to.be.above(0);
        })
    });
    describe('<PlanetaryCampus />', () => {
        let campus;
        beforeEach('Create component', () => {
            campus = shallow(<PlanetaryCampus />);
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
    })
});