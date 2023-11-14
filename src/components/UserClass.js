import React from "react";
import TestClass from "./TestClass";

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props)

        this.state = {
            count: 0,
        }
        console.log(this.props.name + "child constructor")
    }
    componentDidMount() {
        console.log(this.props.name + "child component Did Mount")
    }

    render() {
        const { name, location } = this.props
        const { count, count2 } = this.state

        console.log(this.props.name + "child render")
        return (
            <div className="user_card">
                <div className="user_items">
                    <h1>Count : {count}</h1>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}>Increment </button>
                    <h2>User Class</h2>
                    <h3>Name: {name} </h3>
                    <h3>Location: {location} </h3>
                    <TestClass />
                </div>
            </div>
        )
    }
}

export default UserClass;