import * as actions from '../actions/actions';

const initialState = {
    isPopularLoading: true,
    popularMovies: [],
    error: ''
}

export default function HomeReducer(state = initialState, action){
    switch(action.type){
        case actions.POPULAR_LOADING:
            return {
                ...state,
                isPopularLoading: true,
                error: ''
            }
        case actions.POPULAR_SUCCESS:
            return {
                ...state,
                isPopularLoading: false,
                popularMovies: action.payload,
                error: ''
            }
        case actions.POPULAR_ERROR:
            return {
                ...state,
                isPopularLoading: false,
                error: action.error
            }
        default:
            return state
    }
}