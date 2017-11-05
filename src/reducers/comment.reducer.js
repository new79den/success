import {normalizedComments as defultArticle} from "../fixtures"

const commantsMap = defultArticle.reduce((p,c)=>{
    p[c.id] = c;
    return p
}, {});
console.log(commantsMap);


export default (articleState = commantsMap, action) => {

    const {type, payload} = action;

    return articleState;
}
