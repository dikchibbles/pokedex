import { SAVE_CUR_POKEMON } from "../actions/types";

export default (state={id: 1}, action) => {
    switch(action.type) {
        case SAVE_CUR_POKEMON:
            return {...state, id: action.payload}
        default:
            return state;
    }
}

