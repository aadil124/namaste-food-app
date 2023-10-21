import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img
                    className="logoImg"
                    src="https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png"
                    alt="logo"
                />
            </div>
            <div className="nav-link">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="container">
            <div>
                <img className="food-img" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
