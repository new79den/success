import {normalizedComments as defultArticle} from "../fixtures"
import {arrToMap} from "../helper"

const commantsMap = arrToMap(defultArticle);


export default (commantsState = commantsMap, action) => {
    const {type, payload, randomId} = action;

    switch (type){
        case "ADD_COMMENT" :
            console.log({...commantsState, [randomId]: payload.newComment});

            return {...commantsState, [randomId]: payload.newComment}
    }
    return commantsState;
}
