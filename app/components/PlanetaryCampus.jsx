import React from 'react';
import {connect} from 'react-redux';
import {Jumbotron, ListGroup, ListGroupItem} from 'react-bootstrap';
// can get campus info from state
// can i get campus info from campus thumbnail?
function PlanetaryCampus(props) {
    const id = +props.match.params.id;
    const campus = props.campuses.filter((campus) => campus.id === id)[0];
    let counter = 0;
    return (
        <div className="container">
            <Jumbotron>
                <h1>Students of {campus.name}</h1>
            </Jumbotron>
            <ListGroup>
                {
                    campus.students.map((student) => {
                        counter++;
                        return <ListGroupItem key={student.id}>{counter} - {student.name}</ListGroupItem>

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

