import {createStore} from "redux"
import redusers from "../reducers"

const store = createStore(redusers);

window.store = store;

export default store;