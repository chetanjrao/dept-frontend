import { all, put, takeEvery, call, takeLatest } from 'redux-saga/effects'
import { APIRepository } from '../../../repository/api';
import { POPULAR_ERROR, POPULAR_LOADING, POPULAR_SUCCESS } from '../actions/actions';
const apiRepository = new APIRepository();

function* fetchPopularMovies(action){
    try {
        const response = yield call(apiRepository.popularMovieFetcher)
        yield put({ type: POPULAR_SUCCESS, payload: response.items })
    } catch (e) {
        yield put({ type: POPULAR_ERROR, error: e.message })
    }
}

export default function* homeSaga(){
    yield all([
        takeLatest(POPULAR_LOADING, fetchPopularMovies)
    ])
}