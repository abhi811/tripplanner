import { combineReducers, createStore } from "redux";


import placesReducer from "./places";
import currentLocationReducer from "./location";
import itineraryReducer from "./itineraray";

const reducer = combineReducers({
  places: placesReducer,
  currentLocation: currentLocationReducer,
  itinerary: itineraryReducer
});

const store = createStore(reducer);

export default store;
