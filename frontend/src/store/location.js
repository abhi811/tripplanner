export const SET_LOCATION = "currentLocation/SET_LOCATION";

export function setLocation(id) {
    return {
        type: SET_LOCATION,
        payload: id
    };
}

export default function currentLocation(
    state={selectedLocation: "Pune"},
    action
) {
    switch (action.type) {
        case SET_LOCATION:
            return {...state, selectedLocation: action.payload};
        default:
            return state;
    }
}