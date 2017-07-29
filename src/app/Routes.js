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

import Cart from "./cart/containers/CartContainer"


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

                        <Route path="/cart"
                            component={Cart}>
                        </Route>

                        <Route path="**"
                            component={NotFound}>
                        </Route>
                    </Switch>
                </App>
            </Router>
 
    )
}