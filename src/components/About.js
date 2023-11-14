import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>This is a About</h1>
            {/* <User name={"Aadil function"} location={"Bhiwandi"} /> */}
            <UserClass name={"Aadil Class"} location={"Bhiwandi"} />
        </div>
    )
}

export default About