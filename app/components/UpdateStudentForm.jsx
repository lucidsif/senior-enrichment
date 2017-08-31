import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class UpdateStudentForm extends Component {
    constructor(props){
        super(props);
        const student = this.props.students.filter((student) => student.id === props.studentId)[0];
        this.state = {
            name: student.name,
            email: student.email,
            campusId: student.campusId,
            campus: student.campus.name
        };
        this.getNameValidationState = this.getNameValidationState.bind(this);
        this.getEmailValidationState = this.getEmailValidationState.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getNameValidationState() {
        const nameLength = this.state.name.length;
        if (nameLength > 0) return 'success';
        else return 'error';
    }

    getEmailValidationState() {
        const emailLength = this.state.email.length;
        if (emailLength > 0) return 'success';
        else return 'error';
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSubmit(e) {
        // TODO: validate before submit
        const {email, name } = this.state;
        if (email.length > 0 && name.length > 0) {
            this.props.handleStudentUpdate(this.state);
        }
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getNameValidationState()}
                >
                    <ControlLabel>Type student name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleNameChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getEmailValidationState()}
                >
                    <ControlLabel>Type your email</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.email}
                        placeholder="ImageUrl"
                        onChange={this.handleEmailChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Button className="form-modal-submit" onClick={this.handleSubmit} bsStyle="info">Update</Button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

const EnhancedUpdateStudentForm = connect(mapStateToProps, null)(UpdateStudentForm);

export default EnhancedUpdateStudentForm;
