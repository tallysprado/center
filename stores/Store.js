import { createStore, applyMiddleware } from "redux";
import {createLogger} from 'redux-logger'

import RootReducer from "./RootReducer";

const logger = createLogger()

const Store = createStore(RootReducer, applyMiddleware(logger));

export default Store;
