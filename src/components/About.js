import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component {

    constructor(props) {
        super(props)
        console.log("parent constructor")
    }
    componentDidMount() {
        console.log("parent component Did Mount")
    }
    render() {
        console.log("parent render")
        return (
            <div>
                <h1>This is a About</h1>
                {/* <User name={"Aadil function"} location={"Bhiwandi"} /> */}
                <UserClass name={"Aadil Class"} location={"Bhiwandi"} />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>This is a About</h1>
//             {/* <User name={"Aadil function"} location={"Bhiwandi"} /> */}
//             <UserClass name={"Aadil Class"} location={"Bhiwandi"} />
//         </div>
//     )
// }

export default About