import { combineReducers } from 'redux';
import characterReducer from '../reducer/character';
import movieReducer from '../reducer/movie';

export default combineReducers({
    characters: characterReducer,
    movies: movieReducer,
});