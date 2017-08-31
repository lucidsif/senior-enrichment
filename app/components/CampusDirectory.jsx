import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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
        console.log('inside campus directory***:', this.props);
        const {campuses} = this.props;
        return (
            <Grid>
                <Row>
                    <FormModal type={"Campus"} />
                </Row>
                <Row>
                    {campuses.map((campus) => {
                        //return <CampusThumbnail campus={campus}/>
                        return <CampusThumbnail dispatchThunk={this.props.dispatchThunk} campus={campus} history={this.props.history}/>
                    })}
                </Row>
            </Grid>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        dispatchThunk: function (thunk) {
            dispatch(thunk);
        }
    }
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

const enhancedHome = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export default enhancedHome;