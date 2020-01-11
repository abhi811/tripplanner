import React from 'react';
import { Component } from 'react';
import Login from './Login';
import App from './App';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Home extends Component {
    
    render() {
        return(
            <Router>
            <div className="home-background">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            <hr />

            {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
            */}

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <App />
                </Route>
            </Switch>
            </div>
            </Router>
        );
    }
}


export default Home;