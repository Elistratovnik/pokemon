import { CHANGE_CARD_OFFSET, CHANGE_SEARCH_VALUE, FETCHED_ALL_POKEMONS, FETCHED_CARDS, HIDE_GREETINGS, HIDE_LOADER, LOAD_POKEMON, RESET_CARDS, RESET_POKEMON, SAVE_POKEMON_DATA, SEARCH_POKEMON, SHOW_LOADER } from './types'

export function fetchedCards(limit, offset) {
  return async (dispatch) => {
    dispatch(showLoader())
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      const json = await response.json()
      dispatch({ type: FETCHED_CARDS, payload: json })
    } catch (err) {
      alert(`произошла ошибка загрузки: ${err}`)
    } finally {
      dispatch(hideLoader())
    }
    dispatch(hideLoader())
  }
}

export function fetchedAllPokemons() {
  return async (dispatch) => {
    dispatch(showLoader())
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0`)
      const json = await response.json()
      dispatch({ type: FETCHED_ALL_POKEMONS, payload: json })
    } catch (err) {
      alert(`произошла ошибка загрузки: ${err}`)
    } finally {
      dispatch(hideLoader())
    }
  }
}

export function loadPokemon(url) {
  return async (dispatch) => {
    dispatch(resetPokemon())
    dispatch(showLoader())
    const response = await fetch(url)
    const json = await response.json()
    dispatch({ type: LOAD_POKEMON, payload: json })
    dispatch(hideLoader())
  }
}

export function changeCardOffset(num) {
  return {
    type: CHANGE_CARD_OFFSET,
    payload: num
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function hideGreetings() {
  return {
    type: HIDE_GREETINGS
  }
}

export function resetCards() {
  return {
    type: RESET_CARDS
  }
}

export function changeSearchValue(value) {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: value
  }
}

export function searchPokemon() {
  return {
    type: SEARCH_POKEMON
  }
}

export function resetPokemon() {
  return {
    type: RESET_POKEMON
  }
}

export function savePokemonData(pokemon) {
  return {
    type: SAVE_POKEMON_DATA,
    payload: pokemon
  }
}


