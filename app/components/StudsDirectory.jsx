import React from 'react';
import StudTable from './StudTable';
import StudFormModal from './StudFormModal';
import {Container} from 'react-bootstrap';

// TODO: add a bootstrap table
// TODO: add a formModal
export default function StudsDirectory() {
    return (
        <div className="container">
            <StudFormModal />
            <div className="container">
            <StudTable />
            </div>
        </div>
    )
}