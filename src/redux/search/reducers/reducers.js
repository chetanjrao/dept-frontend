import * as actions from '../actions/actions';

const initialState = {
    isSearchLoading: false,
    results: {},
    error: ''
}

export default function searchReducer(state = initialState, action){
    switch(action.type){
        case actions.SEARCH_LOADING:
            return {
                ...state,
                isSearchLoading: true,
                error: ''
            }
        case actions.SEARCH_SUCCESS:
            return {
                ...state,
                isSearchLoading: false,
                results: action.payload,
                error: ''
            }
        case actions.SEARCH_ERROR:
            return {
                ...state,
                isSearchLoading: false,
                error: action.error
            }
        default:
            return state
    }
}