import React from 'react';
import {connect} from 'react-redux';
import StudTable from './StudTable';
import StudFormModal from './StudFormModal';

// TODO: add a bootstrap table
// TODO: add a formModal
function StudsDirectory(props) {
    return (
        <div className="container">
            <StudFormModal />
            <div className="container">
            <StudTable students={props.students}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps, null)(StudsDirectory);