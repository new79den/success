import {normalizedComments as defultArticle} from "../fixtures"

export default (articleState = defultArticle, action) => {

    const {type, payload} = action;
    
    return articleState;
}
