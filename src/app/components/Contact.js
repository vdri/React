import React, {Component} from "react";
import {Helmet} from "react-helmet";

import $ from "jquery";

export default class Contact extends Component {

    constructor(props) {
        super(props);
        console.log(props.match.url);
        console.log(props.match.path);
    }

    componentDidMount() {
        // this.adElem.innerHtml = "<h2>Dynamic</h2>";
        // adding the dyanmic html

        //Bad Search
        // $("p").text("from Jquery");

        //scopped search, within component
        $(this.compElement).find("p").text("from jquery");


    }
    render() {
        return (
            <div ref={(elem) => this.compElement = elem}>
                <Helmet>
                    <meta description="contact page" />
                    <title>{this.props.match.params['city']}</title>
                </Helmet>
                <h2> Contact </h2>

                <p> ipsum gypsum </p>
                <h2>{this.props.match.params['city']}</h2>
            </div>
        )
    }
}