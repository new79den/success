import {normalizedComments as defultArticle} from "../fixtures"
import {arrToMap} from "../helper"

const commantsMap = arrToMap(defultArticle);


export default (articleState = commantsMap, action) => {
    const {type, payload} = action;
    return articleState;
}
