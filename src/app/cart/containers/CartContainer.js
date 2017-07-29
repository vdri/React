//bind react & redux

import {connect} from "react-redux";
import Cart from "../components/Cart";

//mapping redux state to react props

function mapReduxStateToReactProps(state) {
    console.log("mapReduxStateToReactProps");
    //return props
    return {
        items: state.cartState
    }
}

var connectFn = connect(mapReduxStateToReactProps);

// High Order Component
//Instrument/Wrap Cart component
//return wrapper component

var cartContainer = connectFn(Cart);

export default cartContainer;