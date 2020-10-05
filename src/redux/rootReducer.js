import { combineReducers } from "redux";
import { appReducer } from "./reducers/appReducer";
import { cardsReducer } from "./reducers/cardsReducer";
import { tableReducer } from "./reducers/tableReducer";

export const rootReducer = combineReducers({
   app: appReducer,
   cards: cardsReducer,
   table: tableReducer
})
