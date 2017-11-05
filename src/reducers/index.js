import {combineReducers} from "redux"
import articles from "./article.reducer"
import filter from "./filter.reducer"
import comment from "./comment.reducer"

export default combineReducers({
    articles,
    filter,
    comment
})