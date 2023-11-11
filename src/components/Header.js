
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {

    const [btnName, setBtnName] = useState("Login")


    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="logo"
                />
                </Link>

            </div>
            <div className="nav-items">
                <ul >
                    <li ><Link to="/">Home</Link></li>
                    <li ><Link to="/about">About</Link></li>
                    <li ><Link to="/contact">Contact us</Link></li>
                    <li>cart</li>
                </ul>
                <button className="loginBtn" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </div>
        </div>
    );
};

export default Header