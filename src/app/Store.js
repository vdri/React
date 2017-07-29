import {createStore, combineReducers} from "redux";

import cartReducer from "./cart/Reducer";

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action) {
    console.log("Counter Reducer", state, action);

    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    cartState: cartReducer,
    counterState: counterReducer
})
//store accept only one reducer as parameter
let store = createStore(rootReducer, {
    counterState: 1000,
    cartState: [
        {id:1, name:'Moto'},
        {id:2, name:'Nexus'}
    ]
});
export default store;
console.log("State", store.getState());

let action = {
    type: 'INCREMENT'
}

store.subscribe( ()=> {
    console.log("Sub", store.getState());
})

store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch({type: 'UNKNOWN'});
store.dispatch({type: 'UNKNOWN'});