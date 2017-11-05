export default store => next => action => {

    if (!action.genterateId) return next(action);

    next({ ...action, randomId: (Date.now()+ Math.random()).toString()});

}