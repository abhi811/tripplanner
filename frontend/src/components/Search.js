import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../store/location';
import { loadPlaces } from '../store/places';

class Search extends Component {
    constructor(props) {
        super(props);
        this.loadPlaces = this.loadPlaces.bind(this);
    }

    loadPlaces() {
        const {setLocation, loadPlaces} = this.props;
        let input=document.getElementById("input_place");
        let data=input.value;
        setLocation(data);
        loadPlaces(data);
    }

    render() {
        return(
            <div className="app-header">
                <span><h1 className="logo">Trip Planner</h1></span>
                <span><div className="searchbar">
                    <form >
                        <input type="text" id="input_place" name="searchbar" placeholder="Search for a place"></input>
                        <button onClick={(e) => { e.preventDefault(); this.loadPlaces()}}>S</button>
                    </form>
                </div></span>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setLocation : (data) => {
            dispatch(setLocation(data));
        },
        loadPlaces : (data) => {
            dispatch(loadPlaces(data))
        }
    };
}


export default connect(null, mapDispatchToProps)(Search);