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
            expect(home.find(PlanetaryCampus).length).to.be.equal(1);
        })
    })
});