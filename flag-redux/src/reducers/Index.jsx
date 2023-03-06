import { combineReducers } from "redux"
import loggedReducer from "./isLogged"
import counterReducer from "./Counter"

const allReducers = combineReducers({
    counter : counterReducer,
    logged: loggedReducer
})

export default allReducers