import React, {Component} from "react";

import {Header} from "./components/Header";

import {Footer} from "./components/Footer";

import Home from "./components/Home";

import About from "./components/About";

export class App extends Component {
    render() {
        return (
            <div>
                <Header title="React App">
                </Header>

                {/*view container */}

                <div>
                    {this.props.children}
                </div>

                <Footer company="Sapient" year="2017">
                </Footer>   
            </div>
        )
    }
}