import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png"
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="rest-card">
            <img className="food-img" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
            <h3>Mehgna Foods</h3>
            <h4>Biryani , North Indian , Asian</h4>
            <h4>4.5 Start</h4>
            <h4>38 Mints</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body-container">
            <div className="search-container">
                Search
            </div>
            <div className="cards-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}
const Footer = () => {
    return <div>

    </div>
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
