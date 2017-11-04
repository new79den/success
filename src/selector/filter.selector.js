import {createSelector} from "reselect"

const ArticlesGetter = state => state.articles;
const FilerGetter = state => state.filter;

export const filterSelector = createSelector(ArticlesGetter, FilerGetter, (articles, filter) =>{

    return articles.filter(e => {
        if (!filter.select.length) return true;
        return filter.select.indexOf(e.id) !== -1
    });
})


