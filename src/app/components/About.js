import React, {Component} from "react";
import {Helmet} from "react-helmet";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {members:["member1", "member2", "member2"],
                    inputValue: "Enter value"};
    }

    add() {
        this.setState({
            members: [...this.state.members, this.state.inputValue]
        })
    }
    render() {
        const list = this.state.members.map((m, i) => (<li key={i}>  {m} </li>));
        return (
            <div>
                <h2> About </h2>
                <Helmet>
                    <meta description="about page" />
                    <title>About</title>
                </Helmet>
                <input name="name" value={this.state.inputValue} onChange={(e) => {this.setState({
                    inputValue : e.target.value
                })}}>
                </input>

                <button onClick={(e) => this.add(e)}>
                    Add
                </button>


                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}