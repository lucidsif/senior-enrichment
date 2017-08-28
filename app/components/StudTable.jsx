import React from 'react';
import {Table, Button} from 'react-bootstrap'

// add onclick to span
export default function StudTable() {
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
            <tr>
                <td><span className="glyphicon glyphicon-trash" aria-hidden="true"></span><span>1</span></td>
                <td>Mark</td>
                <td>Otto </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
            </tr>
            </tbody>
        </Table>
    )
}