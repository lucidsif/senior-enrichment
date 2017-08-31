import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

export default class CampusForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            image: '',
        };
        this.getNameValidationState = this.getNameValidationState.bind(this);
        this.getEmailValidationState = this.getEmailValidationState.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getNameValidationState() {
        const nameLength = this.state.name.length;
        if (nameLength > 0) return 'success';
        else return 'error';
    }

    getEmailValidationState() {
        const imageLength = this.state.image.length;
        if (imageLength > 0) return 'success';
        else return 'error';
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleImageChange(e) {
        this.setState({ image: e.target.value });
    }

    handleSubmit(e) {
        // TODO: validate before submit
        const {image, name } = this.state;
        console.log(image, name);
        if (image.length > 0 && name.length > 0) {
            this.props.handleCampusPost(this.state);
        }
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getNameValidationState()}
                >
                    <ControlLabel>Type campus name</ControlLabel>
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
                    <ControlLabel>Type your image</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="image"
                        onChange={this.handleImageChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Button className="form-modal-submit" onClick={this.handleSubmit} bsStyle="info">Submit</Button>
            </form>
        )
    }
}
