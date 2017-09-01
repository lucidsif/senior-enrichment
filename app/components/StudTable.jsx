import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Table, Button} from 'react-bootstrap'
import {deleteStudent} from "../action-creators/actions";

// add onclick to span
function StudTable(props) {
    const students = props.students;

    function handleDelete(id) {
        const deleteThunk = deleteStudent(id);
        props.delete(deleteThunk);
    }

    let index = 0;
    return (
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Campus</th>
            </tr>
            </thead>
            <tbody>
            {
                students.map((student) => {
                   return <tr key={student.id}>
                        <td><span onClick={() => handleDelete(student.id)}className="glyphicon glyphicon-trash red-formatted" aria-hidden="true"></span><span>{++index}</span></td>
                       <td><Link to={`/suckers/${student.id}`}>{student.name}</Link></td>
                       <td><Link to={`/hustlers/${student.campus.id}`}>{student.campus.name}</Link> </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        delete: function(thunk) {
            dispatch(thunk);
        }
    }
}

const EnhancedStudTable = connect(null, mapDispatchToProps)(StudTable);
export default EnhancedStudTable;
