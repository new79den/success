import {articles as defultArticle} from "../fixtures"

export default (articleState = defultArticle, action) => {

    const {type, payload} = action;


    switch (type){
        case "DELETE_ARTICLE" :
            console.log("DELETE_ARTICLE");
            //return articleState;
            return articleState.filter(el=>el.id !== payload.id)
    }

    return articleState;
}
