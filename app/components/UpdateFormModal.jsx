import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import UpdateCampusForm from './UpdateCampusForm';
import UpdateStudentForm from './UpdateStudentForm';
import {putCampus, putStudent} from "../action-creators/actions";

class UpdateFormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
       this.handleStudentUpdate = this.handleStudentUpdate.bind(this);
        this.handleCampusUpdate = this.handleCampusUpdate.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    //
    handleStudentUpdate(formObj) {
        this.props.update(putStudent(this.props.studentId, formObj));
        this.close();
    }

    handleCampusUpdate(formObj) {
        this.props.update(putCampus(this.props.campusId, formObj));
        this.close();
    }

    renderTypeForm() {
        const {type} = this.props;
        if (type === 'Student') {
            return (
                <UpdateStudentForm handleStudentUpdate={this.handleStudentUpdate} studentId={this.props.studentId}/>
            )
        } else if (type === 'Campus') {
            return (
                <UpdateCampusForm handleCampusUpdate={this.handleCampusUpdate} campusId={this.props.campusId}/>
            )
        }
    }

    // TODO: Create onSubmit func here, close modal after submission, and pass to studform
    render() {
        return (
            <div className="container">
                <Button
                    bsStyle="warning"
                    bsSize="small"
                    onClick={this.open}
                    className="float-right-margin"
                >
                    Update {this.props.type}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update {this.props.type}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderTypeForm()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        update: function(updateThunk) {
            dispatch(updateThunk)
        }
    }
}

const EnhancedUpdateFormModal = connect(null, mapDispatchToProps)(UpdateFormModal);
export default EnhancedUpdateFormModal;