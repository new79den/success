import {normalizedArticles as defultArticle} from "../fixtures"
import {arrToMap} from "../helper"


export default (articleState = arrToMap(defultArticle), action) => {

    const {type, payload} = action;


    switch (type){
        case "DELETE_ARTICLE" :
           const tmpState = {...articleState};
           delete tmpState[payload.id];
           return tmpState;
        case "ADD_ARTICLE" :
            console.log("add");

            return articleState;
    }

    return articleState;
}
