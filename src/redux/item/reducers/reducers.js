import * as actions from '../actions/actions';

const initialState = {
    isInfoLoading: true,
    info: {},
    isTrailerLoading: true,
    trailer: {},
    actors: {},
    error: ''
}

export default function ItemReducer(state = initialState, action){
    switch(action.type){
        case actions.INFO_LOADING:
            return {
                ...state,
                isInfoLoading: true,
                error: ''
            }
        case actions.INFO_SUCCESS:
            return {
                ...state,
                isInfoLoading: false,
                info: action.payload,
                error: ''
            }
        case actions.INFO_ERROR:
            return {
                ...state,
                isInfoLoading: true,
                error: action.error
            }
        case actions.TRAILER_LOADING:
            return {
                ...state,
                isTrailerLoading: true,
                error: ''
            }
        case actions.TRAILER_SUCCESS:
            return {
                ...state,
                isTrailerLoading: false,
                trailer: action.payload,
                error: ''
            }
        case actions.TRAILER_ERROR:
            return {
                ...state,
                isTrailerLoading: true,
                error: action.error
            }
        case actions.POPULATE_ACTORS:
            return {
                ...state,
                actors: action.payload,
                error: ''
            }
        default:
            return state
    }
}