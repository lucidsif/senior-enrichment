import React from 'react';
import {Col, Button, Thumbnail} from 'react-bootstrap';

export default function CampusThumbnail(props) {
    const {campus} = props;
    return (
        <Col xs={6} md={6} lg={6}>
            <Thumbnail src={campus.image} alt="242x200">
                <h3>{campus.name}</h3>
                <p>
                    <Button className="btn-margin" bsStyle="warning">Warning</Button>
                    <Button className="btn-margin" bsStyle="danger">Delete</Button>
                </p>
            </Thumbnail>
        </Col>
    )
}