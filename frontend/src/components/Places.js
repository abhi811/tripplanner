import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPlaces } from '../store/places';
import { add_place } from '../store/itineraray';




class Places extends Component {
    constructor(props) {
        super(props);
        this.itemUi = this.itemUi.bind(this);
        this.addPlacesFunc = this.addPlacesFunc.bind(this);
        this.ajax = this.ajax.bind(this);
    }

    // componentDidMount() {
    //     const {selectedLocation} = this.props;
    //     console.log(selectedLocation);
    // }
    ajax(url, method, data) {
        return new Promise(function(resolve, reject) {
          var request = new XMLHttpRequest();
          request.open(method, url, true);
          request.responseType = 'text';
          request.setRequestHeader("Content-Type", "application/json");
          request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                resolve(request.responseText);
              } else {
                reject(Error(request.statusText));
              }
            }
          };
          request.onerror = function() {
            reject(Error("Network Error"));
          };
          request.send(data);
          
        });
      }

    addPlacesFunc(places) {
        this.props.add_place(places);
       
        this.ajax('http://localhost:4000/addname', 'POST', JSON.stringify(places)).then(function(result) {
            console.log((result));
        });

    }

    itemUi(places) {
    
        return (
            <div key={places.id} className="product-item">
                <img alt={places.name} src={places.poster} />
                <div className="product-detail">
                    <div className="product-title">{places.name}</div>
                    <button onClick={(e) => {e.preventDefault(); this.addPlacesFunc(places)}} className="button-addToTrip">
                        Add to trip
                    </button>
                </div>
            </div>
        )
    }

    render() {
        const {places, selected} = this.props;
        console.log(selected);
        return (
            <div className="app-places">
                {places.map(this.itemUi)}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        places: state.places.list,
        selected: state.itinerary.selected_list
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadPlaces: (id) => {
            dispatch(loadPlaces(id));
        },
        add_place: (place) => {
            dispatch(add_place(place));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Places);