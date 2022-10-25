import { TURN_SCREEN_ON, TURN_SCREEN_OFF } from "../actions/types";

export default (state={isOn: 'block'}, action) => {
    switch(action.type) {
        case TURN_SCREEN_ON:
            return {...state, isOn: 'block'};
        case TURN_SCREEN_OFF:
            return {...state, isOn: 'none'};
        default: 
            return state;
    }
}

