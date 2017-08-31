import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import DarkNavBar from './Navbar';
import Home from './Home';
import CampusDirectory from './CampusDirectory';
import PlanetaryCampus from './PlanetaryCampus';
import StudsDirectory from './StudsDirectory';
import {fetchCampuses, fetchStudents} from "../action-creators/actions";


class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('props inside app.js***', this.props)
        const campusesThunk = fetchCampuses();
        this.props.dispatchThunk(campusesThunk);
        const studentsThunk = fetchStudents();
        this.props.dispatchThunk(studentsThunk);
    }

    render() {
        return (
            <div>
                <DarkNavBar/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/hustlers' component={CampusDirectory}/>
                <Route exact path='/hustlers/:id' component={PlanetaryCampus}/>
                <Route exact path='/suckers' component={StudsDirectory}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchThunk: function (reduxThunk) {
            dispatch(reduxThunk);
        }
    }
}


const EnhancedApp = withRouter(connect(null, mapDispatchToProps)(App));
export default EnhancedApp;