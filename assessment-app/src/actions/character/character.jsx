import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from './types';
import CharacterAPIGateway from '../gateways/characterGateway';

const characterGateway = new CharacterAPIGateway();
export const fetchCharacters = (params) => (dispatch) => {
    dispatch({
        type: FETCH_CHARACTERS_START,
        payload: {
            loading: true,
            params
        }
    });

    characterGateway.getCharacters(params)
        .then(characters =>
            dispatch({
                type: FETCH_CHARACTERS_SUCCESS,
                payload: {
                    characters: characters.results,
                    lastPage: characters.last_page,
                }
            }))
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_CHARACTERS_FAILURE,
                payload: {
                    error: err
                }
            });
        })
};

