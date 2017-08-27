import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import DarkNavBar from './Navbar';
import PlanetaryCampus from "./PlanetaryCampus";

export default function App(props) {
    return (
        <div>
            <DarkNavBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/campus/:id' component={PlanetaryCampus} />
        </div>
    )
}