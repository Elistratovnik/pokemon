import { CHANGE_SEARCH_VALUE, FETCHED_ALL_POKEMONS, SEARCH_POKEMON } from "../types";


const initialState = {
  allPokemons: [],
  allPokemonsBackup: [],
  searchInput: ''
}

export function tableReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_ALL_POKEMONS:
      return { ...state, allPokemons: action.payload.results, allPokemonsBackup: action.payload.results}
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchInput: action.payload }
    case SEARCH_POKEMON:
      return { ...state, allPokemons: state.allPokemonsBackup.filter((pokemon) => {
        return pokemon.name.includes(state.searchInput)
      })}
    default:
      return state;
  }
}
