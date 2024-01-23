import React from "react"

class TestClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log("test constructor")
    }
    componentDidMount() {
        // console.log("test componentDidMount")
    }
    render() {
      // console.log("test render")
      return <h1>Test Class</h1>;
    }
}

export default TestClass