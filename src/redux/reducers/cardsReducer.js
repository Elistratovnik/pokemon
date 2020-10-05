import { FETCHED_CARDS, LOAD_POKEMON, RESET_CARDS, RESET_POKEMON, SAVE_POKEMON_DATA, SAVE_POKEMON_NAME, } from "../types";

const initialState = {
  pokemons: [],
  loadedPokemonCards: {},
  cardsCount: 0,
  pokemonAddCount: 5,
  pokemon: {
    image: 'https://www.clipartmax.com/png/full/190-1908912_free-png-pokeball-png-images-transparent-pokeball-png-hd.png',
    name: '',
    weight: 0,
    height: 0,
    type: ''
  },
}

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_CARDS:
      return { ...state, pokemons: [...state.pokemons, ...action.payload.results], cardsCount: action.payload.count }
    case RESET_CARDS:
      return { ...state, pokemons: [] }
    case LOAD_POKEMON:
      console.log(action.payload)
      return { ...state, pokemon: {
        image: action.payload.sprites.other["official-artwork"].front_default,
        name: action.payload.name,
        weight: action.payload.weight,
        height: action.payload.height,
        type: action.payload.types[0].type.name } }
    case RESET_POKEMON:
      return { ...state, pokemon: initialState.pokemon }
    case SAVE_POKEMON_DATA:
      return { ...state, loadedPokemonCards: { ...state.loadedPokemonCards, [action.payload.name]: action.payload } }
    default:
      return state;
  }
}
