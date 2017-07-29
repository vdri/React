import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Like extends Component {
    constructor(props) {
        super(props);
        console.log("Like Component Created");
    }

    
    componentWillMount() {

    }

    sayHello() {
        alert("Hello");
    }

    render() {
        console.log("Like rendered");
        return (
            <div>
                <h2> Like {this.props.count} </h2>
                <h2> Default test {this.props.message} </h2>
            </div>
        )
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count % 5 == 0) return true;

        return false;
    }

    componentWillReceiveProps(props) {
        console.log("Component will receive", props.count);
    }

    componentWillUnmount() {
        console.log("Component getting ------------");
    }
}

Like.defaultProps = {
    message: 'Like us'
}

Like.propTypes = {
    count: PropTypes.number,
    title: PropTypes.string
}