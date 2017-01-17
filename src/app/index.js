import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import App from "./containers/App"; // Здесь App без {} так как мы используем export default
import store from "./store.js";

render(
    <Provider store={store}  >
        <App />
    </Provider>,
    window.document.getElementById('app'));









// import React from "react";
// import {render} from "react-dom";
//
// import { User } from './components/User';
// import { Main } from './components/Main';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Egor"
//         };
//     }
//
//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }
//
// render(<App />, window.document.getElementById('app'));



// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";
//
// const mathReducer = (state = {
//     result: 1,
//     lastValues: []
// } , action) => {
//     switch (action.type) {
//         case "ADD":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             };
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state,
//                 result: state.result - action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             };
//             break;
//     }
//     return state;
// };
//
// const userReducer = (state = {
//     name: 'Viktor',
//     age: 33
// } , action) => {
//     switch (action.type) {
//         case "SET_NAME":
//             state = {
//                 ...state,
//                 name: action.payload
//             };
//             break;
//         case "SET_AGE":
//             state = {
//                 ...state,
//                 age: action.payload
//             };
//             break;
//     }
//     return state;
// };
// const myLogger = (store) => (next) => (action) => {
//     console.log("Action is ", action); // action здесь - это аргумент внутри store.dispatch (см. ниже)
//     next(action);
// };
// const store = createStore(
//     combineReducers({mathReducer, userReducer}),
//     {},
//     applyMiddleware(logger()) // applyMiddleware(myLogger, logger()),
// );
//
// store.subscribe(() => {
//     // console.log( 'Store updated!', store.getState() );
// });
//
// store.dispatch({
//     type: "ADD",
//     payload: 10
// });
// store.dispatch({
//     type: "ADD",
//     payload: 33
// });
// store.dispatch({
//     type: "SUBTRACT",
//     payload: 8
// });
// store.dispatch({
//     type: "SET_NAME",
//     payload: 'STEPAN'
// });
// store.dispatch({
//     type: "SET_AGE",
//     payload: 30
// });

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
/*
import { createStore, combineReducers } from "redux";

const mathReducer = (state = {
    result: 1,
    lastValues: []
} , action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: 'Viktor',
    age: 33
} , action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

// const store = createStore(combineReducers({
//     mathReducer: mathReducer,
//     userReducer: userReducer
// }));
// в ES6 можно то же самое записать так:
const store = createStore( combineReducers({mathReducer, userReducer}) );

store.subscribe(() => {
    console.log( 'Store updated!', store.getState() );
});

store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 33
});
store.dispatch({
    type: "SUBTRACT",
    payload: 8
});
store.dispatch({
    type: "SET_NAME",
    payload: 'STEPAN'
});
store.dispatch({
    type: "SET_AGE",
    payload: 30
});
*/

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
/*
import { createStore } from "redux";

const initialState = {
    result: 1,
    lastValues: [],
    oneMoreProp: 'Some value'
};

// reducer берет состояние, меняет его и возвращает измененное состояние
const reducer = (state = initialState , action) => { // в action попадает store.dispatch (см. ниже)
    // state = Object.assign({}, state);
    switch (action.type) {
        case "ADD":
            // state.result += action.payload;
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload] // скопировать массив в новый массив и добавить action.payload
            };
            // state.lastValues.push(action.payload);
            break;
        case "SUBTRACT":
            // state.result -= action.payload;
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            // state.lastValues.push(action.payload);
            break;
    }
    return state;
};

// хранит состояние
const store = createStore(reducer);

// подписываемся на изменения
store.subscribe(() => {
   console.log( 'Store updated!', store.getState() );
});

// вызвать изменение состояния
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 33
});
store.dispatch({
    type: "SUBTRACT",
    payload: 8
});
*/

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
/*
import { createStore } from "redux";

// reducer берет состояние, меняет его и возвращает измененное состояние
const reducer = (state, action) => { // в action попадает store.dispatch (см. ниже)
    console.log('>>>>>>', action);
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
    }
    return state;
};

// хранит состояние
const store = createStore(reducer, 1); // 1 - начальное значение

// подписываемся на изменения
store.subscribe(() => {
    console.log( 'Store updated!', store.getState() );
});

// вызвать изменение состояния
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 33
});
store.dispatch({
    type: "SUBTRACT",
    payload: 8
});
*/