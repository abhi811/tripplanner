import React from 'react';
import { add_place } from '../store/itineraray';



function Button({place, selected, add_place}) {
    return (
        <button onClick={(e) => {e.preventDefault(); add_place(place); console.log(selected)}} className="button-addToTrip">
            Add to trip
        </button>
    );
}

const mapStateToProps = state => {
    return {
        selected: state.itinerary.selected_list
    };
}

const mapDispatchToProps = dispatch => {
    return {
        add_place: (place) => {
            dispatch(add_place(place));
        }
    };
}

export default (mapStateToProps, mapDispatchToProps)(Button);

