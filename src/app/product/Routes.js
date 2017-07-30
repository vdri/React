import React from "react";

import { 
        Route, Switch} from "react-router-dom";

import ProductLayout from "./components/ProductLayout";

import ProductList from "./containers/ProductList";

//import ProductSearch from "./components/ProductSearch";

import ProductEdit from "./containers/ProductEdit";

export default function Routes() {
    return (
        <ProductLayout>

            <Route path="/products/list" 
                   component={ProductList}  >
        
            </Route>

            
 
            <Route path="/products/edit/:id" 
                   component={ProductEdit} >
        
            </Route>

            {/* <Route path="/products/search" 
                    component={ProductSearch} >

            </Route>  */}
             
        </ProductLayout>
    )
} 