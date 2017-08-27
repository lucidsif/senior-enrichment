import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

export default class extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            campus: ''
        };
        this.getValidationState = this.getValidationState.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    getValidationState() {
        const length = this.state.name.length;
        if (length > 0) return 'success';
        else return 'error';
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSelectChange(e) {
        this.setState({ campus: e.target.value });
        console.log(this.state.campus);
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
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select your campus</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleSelectChange}>
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>
                <Button bsStyle="info">Submit</Button>
            </form>
        )
    }
}