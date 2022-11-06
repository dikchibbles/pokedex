import pokemon from "../api/pokemon";
import { 
    FETCH_RAND_POKEMON,
    TURN_SCREEN_ON,
    TURN_SCREEN_OFF,
    FETCH_SPECIFIC_POKEMON,
    SAVE_CUR_POKEMON,
    SEARCH_POKEMON
} from "./types";



export const fetchRandPokemon = () => async dispatch => {
    const response = await pokemon.get(`/${Math.floor(Math.random() * 906)}`)
    dispatch({
        type: FETCH_RAND_POKEMON,
        payload: response.data
    });
}

export const fetchSpecificPokemon = (id) => async dispatch => {
    const response = await pokemon.get(`/${id}`)
    dispatch({
        type: FETCH_SPECIFIC_POKEMON,
        payload: response.data
    })
}

export const searchPokemon = (name) => async dispatch => {
    pokemon.get(`/${name}`)
        .then((response) => dispatch({
            type: SEARCH_POKEMON,
            payload: response.data
        }))
        .catch((err) => dispatch({
            type: SEARCH_POKEMON,
            payload: {
                sprites: {front_default: `${window.location.href}/glass.png`}
            }
        }));
}

export const saveCurPokemon = (id) => {
    return {
        type: SAVE_CUR_POKEMON,
        payload: id
    }
}

export const turnScreenOn = () => {
    return {
        type: TURN_SCREEN_ON
    }
}

export const turnScreenOff = () => {
    return {
        type: TURN_SCREEN_OFF
    }
}

