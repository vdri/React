//bind react & redux

import {connect} from "react-redux";
import Cart from "../components/Cart";

import * as actions from "../Action";

import {bindActionCreators} from "redux";

//mapping redux state to react props

function mapReduxStateToReactProps(state) {
    console.log("mapReduxStateToReactProps");
    //return props
    return {
        items: state.cartState
    }
}

function mapReduxDispatchToReactProps(dispatch) {
    console.log("mapReduxStateToReactProps");
    //return props
    return {
        emptyItems: () => {
            let action = actions.emptyCart();
            dispatch(action);
        },

        cartActions: bindActionCreators(actions, dispatch)
    }
}

var connectFn = connect(mapReduxStateToReactProps,
                        mapReduxDispatchToReactProps);

// High Order Component
//Instrument/Wrap Cart component
//return wrapper component

var cartContainer = connectFn(Cart);

export default cartContainer;