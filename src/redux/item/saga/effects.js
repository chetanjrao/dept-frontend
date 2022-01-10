import { all, put, call, takeLatest } from 'redux-saga/effects'
import { APIRepository } from '../../../repository/api';
import { INFO_ERROR, INFO_LOADING, INFO_SUCCESS, POPULATE_ACTORS, TRAILER_ERROR, TRAILER_LOADING, TRAILER_SUCCESS } from '../actions/actions';
const apiRepository = new APIRepository()

function* fetchMovieTrailer(action){
    try {
        const response = yield call(apiRepository.movieTrailerFetcher, action.id)
        yield put({ type: TRAILER_SUCCESS, payload: response })
    } catch (e) {
        yield put({ type: TRAILER_ERROR, error: e.message })
    }
}

function* fetchMovieInfo(action){
    try {
        const response = yield call(apiRepository.movieInfoFetcher, action.id)
        yield put({ type: INFO_SUCCESS, payload: response })
        const actors = {}
        response.actorList.forEach(v => {
            actors[v.id] = v
        })
        yield put({ type: POPULATE_ACTORS, payload: actors })
    } catch (e) {
        yield put({ type: INFO_ERROR, error: e.message })
    }
}

export default function* itemSaga(){
    yield all([
        takeLatest(INFO_LOADING, fetchMovieInfo),
        takeLatest(TRAILER_LOADING, fetchMovieTrailer)
    ])
}