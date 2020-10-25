import rootReducer from "./modules";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const createStoreApp = createStore(rootReducer, applyMiddleware(thunk));

export default createStoreApp;
