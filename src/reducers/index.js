import {combineReducers} from "redux"
import articles from "./article.reducer"
import filter from "./filter.reducer"

export default combineReducers({
    articles,
    filter
})