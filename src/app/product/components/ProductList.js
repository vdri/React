import React from "react";

import {Link} from "react-router-dom";
 
export default class ProductList extends React.Component {
    
    componentDidMount() {
         this.props.productActions.getProducts();
    }
    
    render() {

        if (this.props.loading) {
            return (
                <div>
                    <h1> Products loading ..</h1>
                </div>
            )
        }

        let list = this.props.products
                   .map ( product => (

                    <li key={product.id}>
                     <Link to={`/products/edit/${product.id}`}>   
                        {product.name}
                     </Link>

                     
                     <button onClick={() => this.props.cartActions.addItemToCart(product)}>
                        +Cart
                     </button>

                    </li>


                   ))

        return (
            <div>
                <h2>Product List</h2>

                <span>{this.props.title}</span>
                <br />
                <span>Total: {this.props.products.length}</span>


                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

ProductList.defaultProps = {
    loading: false,
    products: []
}