import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import DarkNavBar from './Navbar';

export default function App(props) {
    return (
        <div>
            <DarkNavBar />
            <Route exact path='/' component={Home} />
        </div>
    )
}