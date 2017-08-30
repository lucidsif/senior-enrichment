import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {postStudent} from "../action-creators/actions";

class StudForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            campus: ''
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
        this.setState({ campus: e.target.value });
        console.log(this.state.campus);
    }

    handleSubmit(e) {
        const campusesThunk = postStudent(this.state);
        this.props.post(campusesThunk);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                <Button bsStyle="info">Submit</Button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

function mapDispatchToProps(dispatch) {
     return {
         post: function(postThunk) {
             dispatch(postThunk)
         }
     }
}

const EnhancedStudForm = connect(mapStateToProps, mapDispatchToProps)(StudForm);

export default EnhancedStudForm;