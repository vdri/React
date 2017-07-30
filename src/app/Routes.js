import React from "react";
import {BrowserRouter as Router, 
        Route, Switch
} 
            from "react-router-dom";
    
import {App} from "./App";


import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import ListExample from "./components/ListExample";
import ListInfinite from "./components/ListInfinite";

import Cart from "./cart/containers/CartContainer";

import ProductRoutes from "./product/Routes";


export default function Routes(props) {
    return (
        
            <Router>
                <App>
                    <Switch>
                        <Route path="/"
                            component={Home}
                            exact>
                        </Route>
                        <Route path="/contact/:city"
                            component={Contact}>
                        </Route>
                        <Route path="/about"
                            component={About}>
                        </Route>

                        <Route path="/products">
                            <ProductRoutes>
                            </ProductRoutes>
                        </Route>

                        
                        <Route path="/list"  
                            component={ListExample}
                            >
                        </Route>

                        <Route path="/cart"
                            component={Cart}>
                        </Route>

                         <Route path="/infinite"  
                            component={ListInfinite}
                            >
                        </Route>

                        <Route path="**"
                            component={NotFound}>
                        </Route>
                    </Switch>
                </App>
            </Router>
 
    )
}