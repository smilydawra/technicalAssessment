import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "../actions/character/types";

const initialState = {
    characters: [],
    lastPage: 1,
    loading: false,
    url: ''
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            const { payload: { loading } } = action;
            return {
                ...state,
                loading,
                //url: `https://api.jikan.moe/v3/search/anime?q=${query}&limit=${limit}&page=${page}`
            }

        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: [...action.payload.characters],
                lastPage: action.payload.lastPage,
                loading: false
            }

        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                characters: [],
                lastPage: 1,
                loading: false
            }
        default:
            return state;
    }
};

export default characterReducer;