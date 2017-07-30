import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    products: [], //list page
    loading: false, //edit & list page

    brands: [], //edit page
    product: {
        name: '',
        brandId: 0
    }, //edit page

    offer: {}
}

export default function productReducer(state=INITIAL_STATE, action) {
    //console.log("product reducer", state, action);

    switch(action.type) {

        case ActionTypes.EDIT_PRODUCT: 
            return Object.assign({}, state, {product: action.product})

        case ActionTypes.LOADING: {
            return Object.assign({}, state, {loading: action.loading})
        }

        case ActionTypes.INIT_PRODUCTS: {
            return Object.assign({}, state, {products: action.products})
        }

        case ActionTypes.INIT_BRANDS: {
            return Object.assign({}, state, {brands: action.brands})
        }
        

        case "OFFER": {
              return Object.assign({}, state, {offer: action.offer})
        }

        default: 
            return state;
    }
}