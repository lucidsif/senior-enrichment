import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Jumbotron, ListGroup, ListGroupItem} from 'react-bootstrap';
import UpdateFormModal from './UpdateFormModal';
import FormModal from './FormModal';
import {deleteStudent} from "../action-creators/actions";

export function PlanetaryCampus(props) {
    const id = +props.match.params.id;
    const campus = props.campuses.filter((campus) => campus.id === id)[0];
    let index = 0;
    function handleDelete(id) {
        const deleteThunk = deleteStudent(id);
        props.delete(deleteThunk);
    }
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
                        return <ListGroupItem key={student.id}><span onClick={() => handleDelete(student.id)}className="glyphicon glyphicon-trash red-formatted" aria-hidden="true"></span>{++index} - <Link to={`/suckers/${student.id}`}>{student.name}</Link></ListGroupItem>

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

function mapDispatchToProps(dispatch) {
    return {
        delete: function(thunk) {
            dispatch(thunk);
        }
    }
}

const EnhancedPlanetaryCampus =  connect(mapStateToProps, mapDispatchToProps)(PlanetaryCampus);

export default EnhancedPlanetaryCampus;

