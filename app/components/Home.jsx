import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CampusThumbnail from './CampusThumbnail';
// create route and link for each planetary campus
import PlanetaryCampus from './PlanetaryCampus';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                Get your galactic degree here!
                {/*map campuses from state */}
                <Link to={`/campus/1`}><CampusThumbnail campus={1}/></Link>
                <Link to={`/campus/2`}><CampusThumbnail campus={2}/></Link>
                <Link to={`/campus/3`}><CampusThumbnail campus={3}/></Link>
            </div>
        )
    }
};
