import React from 'react';
import {Col, Button, Thumbnail} from 'react-bootstrap';
import {deleteCampus} from "../action-creators/actions";

export default function CampusThumbnail(props) {
    const {campus, dispatchThunk} = props;

    function handleClick() {
        dispatchThunk(deleteCampus(campus.id));
    }

    function handleRoute() {
        props.history.push(`/hustlers/${campus.id}`)
    }
    return (
        <Col xs={6} md={6} lg={6}>
            <Thumbnail src={campus.image} alt="242x200">
                <h3>{campus.name}</h3>
                <p>
                    <Button onClick={handleClick} className="btn-margin" bsStyle="danger">Delete</Button>
                    <Button onClick={handleRoute}>Visit</Button>
                </p>
            </Thumbnail>
        </Col>
    )
}