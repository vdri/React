import {connect} from "react-redux";

import ProductEdit from "../components/ProductEdit";
import * as actions from "../Actions";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {
        product: state.productState.product,
        brands: state.productState.brands
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        productActions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductEdit)