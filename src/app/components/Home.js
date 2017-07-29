import React, {Component} from "react";

import Like from "./Like";

import store from "../Store";

export default class Home extends Component {
    constructor() {
        super();
        console.log("Home Component Created");
        this.state = {
            show: true
        }
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount() {
        this.handle = setInterval( () => {
            // this.state.homeLikes++;
            // this.forceUpdate();
            // this.setState({
                
            // })
            store.dispatch({
                type: "INCREMENT"
            });
        }, 10000);

        this.unsubscribefn = store.subscribe( ()=> {
            this.forceUpdate();
        })
    }

    toggleLike(e) {
        console.log("toggle", this.state.show);
        // e.stopPropagation();
        this.setState({
            show: !this.state.show
        })
    }

    clickEvent(e) {
        console.log("Div Click", this.state.show);
        this.like.sayHello();
    }

    render() {
        console.log("Home render");
        return (
            <div onClick={(e)=> this.clickEvent(e)}>
                <h2> Home </h2>

                <button onClick={this.toggleLike}>
                    Show/Hide
                </button>

                <div> 
                    Home Likes {store.getState().counterState}
                </div>

                {this.state.show && <Like count={store.getState().counterState} ref={(elem) => this.like = elem}>
                </Like>}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.homeLikes % 2 == 0) return true;

        return false;
    }

    componentWillUnmount() {
        clearInterval(this.handle);
        this.unsubscribefn();    
    }
}