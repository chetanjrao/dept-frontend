import { all, put, call, takeEvery } from 'redux-saga/effects'
import { APIRepository } from '../../../repository/api';
import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from '../actions/actions';
const apiRepository = new APIRepository();

function* fetchMovieSearch(action){
    try {
        const curatedResponse = {}
        const response = yield call(apiRepository.movieSearchFetcher, action.title)
        response.forEach(v => {
            if(v[0]){
                v[0].results.forEach(m => curatedResponse[m.id] = m)
            } else {
                v.results.forEach(m => curatedResponse[m.id] = m)
            }
        })
        console.log(curatedResponse)
        yield put({ type: SEARCH_SUCCESS, payload: curatedResponse })
    } catch (e) {
        yield put({ type: SEARCH_ERROR, error: e.message })
    }
}

export default function* searchSaga(){
    yield all([
        takeEvery(SEARCH_LOADING, fetchMovieSearch)
    ])
}