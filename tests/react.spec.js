import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import Home from '../app/components/Home';
import CampusThumbnail from '../app/components/CampusThumbnail';
import {PlanetaryCampus} from '../app/components/PlanetaryCampus'
import {StudsDirectory} from '../app/components/StudsDirectory';
import StudFormModal from '../app/components/StudFormModal';
import StudTable from '../app/components/StudTable';
import StudForm from '../app/components/StudForm';
import {Grid} from 'react-bootstrap';

describe('React components', () => {

    describe('<Home />component', () => {

        let home;
        beforeEach('Create component', () => {
            home = shallow(<Home/>);
        });

        it('should be a <Grid>', () => {
            expect(home.is(<Grid />))
        });

        // it('should have a <CampusThumbnail />', () => {
        //     expect(home.find(CampusThumbnail)).to.have.length.above(0);
        // })
    });
    describe('<PlanetaryCampus />', () => {
        let campus;
        let props;
        beforeEach('Create component', () => {
            props = {
                match : {
                    params: {
                        id: 1
                    }
                }
            };
            campus = shallow(<PlanetaryCampus props={props} />);
            console.log(campus);
        });
        // it('should be a <div>', () => {
        //     expect(campus.is('div'));
        // });
        // it('renders an <h3> title', () => {
        //     expect(campus.contains(<h3>Campus Name</h3>)).to.equal(true);
        // })
        // it('renders an <ol> list', () => {
        //     expect(campus.contains(<ol></ol>)).to.equal(true);
        // })
    });
    // describe('<StudsDirectory />', () => {
    //     let studsDirectory;
    //     beforeEach('Create component', () => {
    //         studsDirectory = shallow(<StudsDirectory/>)
    //     });
    //     it('should be a <div>', () => {
    //         expect(studsDirectory.is('div')).to.be.equal(true);
    //     })
    //     it('uses <StudTable />', () => {
    //         expect(studsDirectory.find(StudTable).length).to.equal(1);
    //     })
    //     it('uses <StudFormModal />', () => {
    //         expect(studsDirectory.find(StudFormModal).length).to.equal(1);
    //     })
    // });
    // describe('<StudTable />', () => {
    //     let studTable;
    //     beforeEach('Create component', () => {
    //         studTable = shallow(<StudTable />)
    //     });
    //     it('should have 3 columns', () => {
    //         expect(studTable.find('th')).to.have.length(3);
    //     })
    // });
    // describe('<StudFormModal />', () => {
    //     let studFormModal;
    //     beforeEach('Create component', () => {
    //         studFormModal = shallow(<StudFormModal />)
    //     });
    //     it('should be a <div>', () => {
    //         expect(studFormModal.is('div')).to.be.equal(true);
    //     });
    // });
    // describe('<StudForm />', () => {
    //     let studForm;
    //     beforeEach('Create component', () => {
    //         studForm = shallow(<StudForm />)
    //     });
    //     it('should be a form', () => {
    //         expect(studForm.is('form')).to.be.true;
    //     });
    //     // it('renders a <form>', () => {
    //     //     expect(studForm.find('form').length).to.equal(1);
    //     // });
    // })

});