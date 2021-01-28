import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './types';
import movieAPIGateway from '../../gateways/movieGateway';

const movieGateway = new movieAPIGateway();
export const fetchmovies = (params) => (dispatch) => {
    dispatch({
        type: FETCH_MOVIES_START,
        payload: {
            loading: true,
            params
        }
    });

    movieGateway.getMovies(params)
        .then(movies =>
            dispatch({
                type: FETCH_MOVIES_SUCCESS,
                payload: {
                    movies: movies.results,
                    lastPage: movies.last_page,
                }
            }))
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_MOVIES_FAILURE,
                payload: {
                    error: err
                }
            });
        })
};

