import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Home from './Home';
import DarkNavBar from './Navbar';
import PlanetaryCampus from './PlanetaryCampus';
import StudsDirectory from './StudsDirectory';
import {getCampuses, getStudents} from "../action-creators/actions";


// TODO: FIX GETCAMPUSES & GETSTUDENTS BUG
class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('props inside app.js***', this.props)
        //const campusesThunk = getCampuses();
        this.props.dispatchThunk(campusesThunk);
       // const studentsThunk = getStudents();
        this.props.dispatchThunk(studentsThunk);
    }

    render() {
        return (
            <div>
                <DarkNavBar/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/campus/:id' component={PlanetaryCampus}/>
                <Route exact path='/studs' component={StudsDirectory}/>
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


const EnhancedApp = connect(null, mapDispatchToProps)(App);
export default EnhancedApp;