export default store => next => action =>{
    console.log("----", "stateBefore", store.getState());

    console.log("----", "dispaching", action);
    console.log("----", "stateAfter", store.getState());
    next(action);

}