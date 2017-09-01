import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function(props){
    return (

        <div className="fs-split">

            <div className="split-image-left">
                <Button bsStyle="success" className="campus-btn">See Campuses</Button>
            </div>

            <div className="split-image-right">
                <Button bsStyle="info" className="campus-btn">See Students</Button>
            </div>


        </div>

    )
}