import { combineReducers } from 'redux'
import Movies from '../reducers/Movies'
import Auth from '../reducers/Auth'
const rootReducers = combineReducers({
    movies: Movies, //add logic
    auth: Auth
})
export default rootReducers