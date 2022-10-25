import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonReducer";
import screenReducer from "./screenReducer";
import prevPokemonReducer from "./prevPokemonReducer";

export default combineReducers({
    pokemon: pokemonReducer,
    prevPokemon: prevPokemonReducer,
    screen: screenReducer
})