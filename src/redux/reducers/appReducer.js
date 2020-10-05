import { HIDE_GREETINGS, HIDE_LOADER, SHOW_LOADER } from "../types";

const initialState = {
  greetingsOpen: true,
  loading: false,
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_GREETINGS:
      return { ...state, greetingsOpen: false }
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    default:
      return state;
  }
}
