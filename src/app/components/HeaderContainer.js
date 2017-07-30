//container component
//higher order component
//wrap existing component

import {connect} from "react-redux";
  
import {Header} from "./Header";
 
const mapReduxStateToCompProps = (state) => {
     return {
         cartLength: state.cartState.length,
         offer: state.productState.offer
     }
}
 
export default connect(mapReduxStateToCompProps)(Header);