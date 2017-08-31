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
        this.getValidationState = this.getValidationState.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getValidationState() {
        const length = this.state.name.length;
        if (length > 0) return 'success';
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
        this.props.handlePost(this.state);
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
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
                    validationState={this.getValidationState()}
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
                <FormGroup controlId="formControlsSelect">
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