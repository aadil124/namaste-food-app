import { useState } from "react";

const User = ({ name, location }) => {
    // console.log(props)

    const { count } = useState(0);
    const { count2 } = useState(1)
    return (
        <div className="user_card">
            <div className="user_items">
                <h1>Count = {count}</h1>
                <h1>Count2 = {count2}</h1>
                <h2>User Function</h2>
                <h3>Name: {name}</h3>
                <h3>Location: {location} </h3>
            </div>

        </div>
    )
}

export default User;