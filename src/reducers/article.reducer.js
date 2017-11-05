import {normalizedArticles as defultArticle} from "../fixtures"

export default (articleState = defultArticle, action) => {

    const {type, payload} = action;


    switch (type){
        case "DELETE_ARTICLE" :
            return articleState.filter(el=>el.id !== payload.id);
        case "ADD_ARTICLE" :
            console.log("add");

            return articleState
    }

    return articleState;
}
