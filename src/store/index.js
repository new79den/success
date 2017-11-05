import {createStore, applyMiddleware} from "redux"
import redusers from "../reducers"
import logger from "../middlewares/logger"


const enhancer = applyMiddleware(logger);

const store = createStore(redusers, {}, enhancer);
window.store = store;

export default store;