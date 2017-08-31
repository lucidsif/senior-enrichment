import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import CampusThumbnail from './CampusThumbnail';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import FormModal from './FormModal';

// create route and link for each planetary campus
class Home extends Component {
    constructor() {
        super();
    }
    render() {
        const {campuses} = this.props;
        return (
            <Grid>
                <Row>
                    <FormModal type={"Campus"} />
                </Row>
                <Row>
                    {campuses.map((campus) => {
                        //return <CampusThumbnail campus={campus}/>
                        return <Link key={campus.id} to={`/hustlers/${campus.id}`}><CampusThumbnail campus={campus}/></Link>
                    })}
                </Row>
            </Grid>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        edit: function(thunk) {
            dispatch(thunk);
        },
        delete: function(thunk) {
            dispatch(thunk);
        }
    }
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

const enhancedHome = withRouter(connect(mapStateToProps, mapDispatchToProps())(Home));

export default enhancedHome;