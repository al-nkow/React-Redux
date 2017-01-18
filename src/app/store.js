import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"; // для выполенния асинхронных actions
import promise from "redux-promise-middleware";

import mathReducer from "./reducers/mathReducer.js";
import userReducer from "./reducers/userReducer.js";

// store - объект, отвечает за содержание всего приложения
// хранит состояние state
// имеет методы getState(), dispatch(actions), subscribe(listeners)
export default createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(logger(), thunk, promise()) // усилитель logger - просто пишет в консоль все что происходит с объектом
);