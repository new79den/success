import {createStore, applyMiddleware} from "redux"
import redusers from "../reducers"
import logger from "../middlewares/logger"
import randomeId from "../middlewares/randomeId"


const enhancer = applyMiddleware(randomeId, logger);

const store = createStore(redusers, {}, enhancer);
window.store = store;

export default store;