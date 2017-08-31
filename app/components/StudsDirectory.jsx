import React from 'react';
import {connect} from 'react-redux';
import StudTable from './StudTable';
import FormModal from './FormModal';

// TODO: add a bootstrap table
// TODO: add a formModal
export function StudsDirectory(props) {
    return (
        <div className="container">
            <FormModal type={"Student"}/>
            <div className="container">
            <StudTable students={props.students} history={props.history} />
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