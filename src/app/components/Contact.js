import React, {Component} from "react";
import {Helmet} from "react-helmet";

export default class Contact extends Component {

    constructor(props) {
        super(props);
        console.log(props.match.url);
        console.log(props.match.path);
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta description="contact page" />
                    <title>{this.props.match.params['city']}</title>
                </Helmet>
                <h2> Contact </h2>
                <h2>{this.props.match.params['city']}</h2>
            </div>
        )
    }
}