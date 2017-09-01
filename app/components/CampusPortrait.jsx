import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Jumbotron, ListGroup, ListGroupItem} from 'react-bootstrap';
import UpdateFormModal from './UpdateFormModal';
import FormModal from './FormModal';

export function PlanetaryCampus(props) {
    const id = +props.match.params.id;
    const campus = props.campuses.filter((campus) => campus.id === id)[0];
    let counter = 0;
    return (
        <div className="container">
            <Jumbotron>
                <h1>Students of {campus.name}</h1>
            </Jumbotron>
            <UpdateFormModal type={"Campus"} campusId={campus.id} />
            <FormModal type={"StudentAtCampus"} campusId={campus.id}/>
            <ListGroup>
                {
                    campus.students.map((student) => {
                        counter++;
                        return <ListGroupItem key={student.id}>{counter} - <Link to={`/suckers/${student.id}`}>{student.name}</Link></ListGroupItem>

                    })
                }
            </ListGroup>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

const EnhancedPlanetaryCampus =  connect(mapStateToProps, null)(PlanetaryCampus);

export default EnhancedPlanetaryCampus;

