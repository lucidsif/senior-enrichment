import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import StudForm from './StudForm';
import {postStudent} from "../action-creators/actions";

class FormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handlePost(formObj) {
        // TODO: validate before submit
        const campusesThunk = postStudent(formObj);
        this.props.post(campusesThunk);
        this.close();
    }

    renderTypeForm() {
        const {type} = this.props;
        if (type === 'Student') {
            return (
                <StudForm handlePost={this.handlePost} />
            )
        } else if (type === 'Campus') {
            return <div>mock form</div>
            //return <StudForm handlePost={this.handlePost} />
        }
    }

    // TODO: Create onSubmit func here, close modal after submission, and pass to studform
    render() {
        return (
            <div className="container">
                <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={this.open}
                    className="float-right-margin"
                >
                    Add {this.props.type}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Sucker</Modal.Title>
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
        post: function(postThunk) {
            dispatch(postThunk)
        }
    }
}

const EnhancedFormModal = connect(null, mapDispatchToProps)(FormModal);
export default EnhancedFormModal;