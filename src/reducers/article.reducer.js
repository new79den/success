import {normalizedArticles as defultArticle} from "../fixtures"
import {arrToMap} from "../helper"


export default (articleState = arrToMap(defultArticle), action) => {

    const {type, payload, randomId} = action;

    switch (type){
        case "DELETE_ARTICLE" :
           const tmpState = {...articleState};
           delete tmpState[payload.id];
           return tmpState;
        case "ADD_COMMENT" :
            const article = articleState[payload.titleID];
            return {
                ...articleState,
                [payload.titleID] : {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
    }

    return articleState;
}
