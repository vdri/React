import {createStore, combineReducers, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import cartReducer from "./cart/Reducer";
import productReducer from "./product/Reducer";

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action) {
    console.log("Counter Reducer", state, action);

    switch(action.type) {
        case "INCREMENT":
            return state + action.value;
        case "DECREMENT":
            return state - action.value;
        default:
            return state;
    }
}

function logger(store) {
    return function(next) {
        return function(action) {
            console.log('dispatching', typeof action, action)
            let result = next(action)
            //reducers/next available middlewares called
             console.log('next state', store.getState())
             return result;
        }
    }
}


function cartStorageMiddleware(store) {
    return function(next) {
        return function(action) {
            let result = next(action);

            if (action.type.indexOf("CART") >=0) {
                let state = store.getState();
                window.localStorage.setItem("carts", 
                                            JSON.stringify(state.cartState))
            }

            return result;
        }
    }
}

let rootReducer = combineReducers({
    cartState: cartReducer,
    counterState: counterReducer,
    productState: productReducer
})

//load from local storage
let cartItems = [];
if (window.localStorage.carts) {
    cartItems = JSON.parse(window.localStorage.getItem("carts"));
}
//store accept only one reducer as parameter
let store = createStore(rootReducer, {
        counterState: 1000,
        cartState: cartItems
    },
    applyMiddleware(logger, thunk, cartStorageMiddleware));

export default store;


var socket = io("http://localhost:7070");
socket.on('offer', function (offer) {
       console.log("offer ", offer);
       store.dispatch({
           type: "OFFER",
           offer: offer
       })
})

console.log("State", store.getState());

// let action = {
//     type: 'INCREMENT',
//     value:1
// }

//helper function to create action
function incrementActionCreator(value) {
    return {
        type: 'INCREMENT',
        value: value
    }
}

let action = incrementActionCreator(10);

function incrementAfterDelayActionCreator(delay) {
    return function(dispatch) {
        setTimeout(() => {
            //call dispatch 
            console.log("thunk called me");
            dispatch({
                type: 'DECREMENT',
                value: 5
            })
        }, delay);
    }
}

var actionFn = incrementAfterDelayActionCreator(1000);
store.dispatch(actionFn);


store.subscribe( ()=> {
    console.log("Sub", store.getState());
})

store.dispatch(action);
store.dispatch(action);
store.dispatch({type: 'UNKNOWN'});