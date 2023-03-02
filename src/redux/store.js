import { legacy_createStore as createStore, applyMiddleware } from "redux";
// Use configureStore instead of createStore. Used it for learning purposes
import { persistStore } from "redux-persist"

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export default { store, persistor };

