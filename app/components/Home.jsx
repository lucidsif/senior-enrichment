import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function(props){
    return (

        <div className="fs-split">

            <div className="split-image-left">
                <Link to="/hustlers"><Button bsStyle="success" className="campus-btn">See Campuses</Button></Link>
            </div>

            <div className="split-image-right">
                <Link to="/suckers"><Button bsStyle="info" className="campus-btn">See Students</Button></Link>
            </div>


        </div>

    )
}