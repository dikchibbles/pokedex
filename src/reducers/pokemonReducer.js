import { 
    FETCH_RAND_POKEMON,
    FETCH_SPECIFIC_POKEMON
 } from "../actions/types";

const defaultState = {}

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_RAND_POKEMON:
            return action.payload;
        case FETCH_SPECIFIC_POKEMON:
            return action.payload;
        default:
            return state;
    }
}

