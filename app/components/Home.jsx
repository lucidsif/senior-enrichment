import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import CampusThumbnail from './CampusThumbnail';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
// create route and link for each planetary campus
import PlanetaryCampus from './PlanetaryCampus';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        const {campuses} = this.props;
        console.log('in home**', campuses);
        return (
            <Grid>
                <Row>
                    {campuses.map((campus) => {
                        //return <CampusThumbnail campus={campus}/>
                        return <Link key={campus.id} to={`/campus/${campus.id}`}><CampusThumbnail campus={campus}/></Link>
                    })}
                </Row>
            </Grid>
        )
    }
};

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}


const enhancedHome = withRouter(connect(mapStateToProps, null)(Home));

export default enhancedHome;