// this adds fetch method to window object
import "whatwg-fetch";

import React from "react";

import {render} from "react-dom";

// import {App} from "./app/App";
import Routes from "./app/Routes";

import store from "./app/Store";

import {Provider} from "react-redux";

//mounting a component on real dom
render(<Provider store={store}>
    <Routes>
    </Routes>
</Provider>, document.getElementById("root"), function(){
    
setInterval( ()=> {
        console.log("TOTAL DOM ", document.getElementsByTagName('*').length)
}, 5000);
 
});