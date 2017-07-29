import React, {Component} from "react";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {members:["member1", "member2", "member2"]};
    }

    add() {
        this.setState({
            members: [...this.state.members, this.input.value]
        })
    }
    render() {
        const list = this.state.members.map((m, i) => (<li key={i}>  {m} </li>));
        return (
            <div>
                <h2> About </h2>
                <input name="name" ref={(elem) => (this.input = elem) }>
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

    componentDidMount() {
        this.input.value = "Harish";
    }
}