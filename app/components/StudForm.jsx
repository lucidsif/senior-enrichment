import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class StudForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            campusId: this.props.campuses[0].id
        };
        this.getNameValidationState = this.getNameValidationState.bind(this);
        this.getEmailValidationState = this.getEmailValidationState.bind(this);
        this.getInputValidationState = this.getInputValidationState.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
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

    getInputValidationState() {
        const campusId = this.state.campusId;
        if (typeof campusId !== 'number') return 'success';
        else return 'error';
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSelectChange(e) {
        this.setState({ campusId: e.target.value });
    }

    handleSubmit(e) {
        // TODO: validate before submit
        const {email, name, campusId} = this.state;
        console.log(email, name, campusId);
        if (email.length > 0 && name.length > 0 && campusId) {
            this.props.handlePost(this.state);
        }
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getNameValidationState()}
                >
                    <ControlLabel>Type your name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
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
                        value={this.state.value}
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId="formControlsSelect"
                >
                    <ControlLabel>Select your campus</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleSelectChange}>
                        {
                            this.props.campuses.map((campus) => {
                                return <option key={campus.id} value={campus.id}>{campus.name}</option>
                            })
                        }
                    </FormControl>
                </FormGroup>
                <Button onClick={this.handleSubmit} bsStyle="info">Submit</Button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

const EnhancedStudForm = connect(mapStateToProps, null)(StudForm);

export default EnhancedStudForm;