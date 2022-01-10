import { combineReducers } from 'redux'
import homeReducer from '../redux/home/reducers/reducers'
import itemReducer from '../redux/item/reducers/reducers'
import searchReducer from '../redux/search/reducers/reducers'

export default combineReducers({
    home: homeReducer,
    item: itemReducer,
    search: searchReducer
})