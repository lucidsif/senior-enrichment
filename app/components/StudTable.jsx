import React from 'react';
import {Table, Button} from 'react-bootstrap'

// add onclick to span
export default function StudTable(props) {
    const students = props.students;
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
                        <td><span className="glyphicon glyphicon-trash" aria-hidden="true"></span><span>{student.id}</span></td>
                        <td>{student.name}</td>
                        <td>{student.campus.name} </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    )
}
