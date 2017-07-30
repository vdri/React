import React from "react";

export default function Cart(props) {
    return (
        <div>
            <h2>Cart- {props.items.length}</h2>

            {/* <button onClick={() => props.emptyItems()}>
                Empty
            </button> */}

            <button onClick={() => props.cartActions.emptyCart()}>
                Empty
            </button>
                        

            <ul>
            </ul>
        </div>
    )
}

Cart.defaultProps = {
    items: []
}