import React from 'react';
import { Component } from 'react';
import Places from './Places';
import Search from './Search';
import { connect } from 'react-redux';


class App extends Component {
    
    render() {
        const {id} = this.props;
        return (
            <div>
                <Search />
                <Places key={id} selectedLocation = {id}/>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        id: state.currentLocation.selectedLocation
    };
}

export default connect(MapStateToProps)(App);