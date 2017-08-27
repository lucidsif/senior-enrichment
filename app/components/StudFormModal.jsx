import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import StudForm from './StudForm';

export default class StudFormModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={this.open}
                >
                    Add Stud
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Stud</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        form here
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};