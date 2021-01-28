import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "../actions/movie/types";


const initialState = {
    movies: [],
    lastPage: 1,
    loading: false,
    url: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_START:
            const { payload: { loading } } = action;
            return {
                ...state,
                loading,
            }

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...action.payload.movies],
                lastPage: action.payload.lastPage,
                loading: false
            }

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                movies: [],
                lastPage: 1,
                loading: false
            }
        default:
            return state;
    }
};

export default movieReducer;