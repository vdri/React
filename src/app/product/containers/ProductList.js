//container component
//higher order component
//wrap existing component

import {connect} from "react-redux";

import * as actions from "../Actions";

import * as cartActions from "../../cart/Action";

import {bindActionCreators} from "redux";

import ProductList
    from "../components/ProductList";

    //state is from store.getState()
    //state has
    //{
       // counterState: 1000 ,
   // mathState : 0 ,
   // productState:   { products: [], loading: false}
    //}
const mapReduxStateToCompProps = (state) => {
     return {
         loading: state.productState.loading,
         products: state.productState.products
     }
}

const mapReduxDispatchToComponentProps = (dispatch) => {
   return {
       productActions: bindActionCreators(actions, dispatch),
       cartActions: bindActionCreators(cartActions, dispatch)
   }
}

var connectFn = connect(mapReduxStateToCompProps,
                        mapReduxDispatchToComponentProps);

//container component shall have
//subscribe
//unsubscribe
//pass the redux state to react component properties
var ProductListContainerComponent = connectFn(ProductList);

export default ProductListContainerComponent;