import {createSelector} from "reselect"

const getComment = state => state.comment;
const getId = (state, OwnProps) => OwnProps.id;

export const commentSelectorFactory = () => {
   return createSelector(getComment, getId, (comment, id) => {
       return comment.find(el => el.id === id)
    });
};
