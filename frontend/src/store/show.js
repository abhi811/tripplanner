
export const SHOWED = "show/SHOWED";

export function doIncrement() {
    
  return {
    type: SHOWED
  };
}


export default function increment(state = {count: 0}, action) {
    switch (action.type) {
        case SHOWED:
            return {...state, count: state.count+1};
        default:
            return state;
    }
}

