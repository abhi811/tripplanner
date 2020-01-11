import dummyApi from "../dummy";

export const GET_DONE = "places/GET_DONE";

export function loadPlaces(categoryId) {
  let places = dummyApi.getPlaces(categoryId);
  return {
    type: GET_DONE,
    payload: places
  };
}

export default function places(state = { list: [] }, action) {
  switch (action.type) {
    case GET_DONE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}


