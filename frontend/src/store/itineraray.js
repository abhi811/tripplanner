export const ADD_PLACE = "itinerary/ADD_PLACE";


export function add_place(place) {
    return {
        type: ADD_PLACE,
        payload: place
    };
}

export default function itinerary(state = { selected_list: [] }, action) {
    switch (action.type) {
        case ADD_PLACE:
            state.selected_list.push(action.payload);
            return {...state, selected_list: [...state.selected_list]};
        default:
            return state;
    }
}
