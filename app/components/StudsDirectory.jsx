import React from 'react';
import StudTable from './StudTable';
import StudFormModal from './StudFormModal';

// TODO: add a bootstrap table
// TODO: add a formModal
export default function StudsDirectory() {
    return (
        <div>
            <StudFormModal />
            <StudTable />
        </div>
    )
}