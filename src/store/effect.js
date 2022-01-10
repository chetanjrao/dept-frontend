import { all } from "redux-saga/effects";
import homeSaga from "../redux/home/saga/effects";
import itemSaga from "../redux/item/saga/effects";
import searchSaga from "../redux/search/saga/effects";

export default function* rootSaga(){
    yield all([
        homeSaga(),
        itemSaga(),
        searchSaga()
    ])
}