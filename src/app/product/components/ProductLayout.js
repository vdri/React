import React from "react";

import {Link} from "react-router-dom";

export default function ProductLayout (props) {
    return (
        <div>
            <h2> Product Home </h2>
            <div>
                <Link to="/products/list" className="button">List</Link>

                <Link to="/products/search" className="button">Search</Link>
            </div>

            {/* view container */}
            {props.children}
        </div>
    )
}