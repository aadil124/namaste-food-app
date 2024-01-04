
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus)

  // subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between p-2 bg-blue-100">
      <Link to="/">
        <img className="w-56 rounded-full" src={LOGO_URL} alt="logo" />
      </Link>

      <div className="flex items-center">
        <ul className="flex m-2 px-3">
          <li className="px-2 text-lg font-semibold">
            Online Status: {onlineStatus === true ? "✔" : "🛑"}{" "}
          </li>
          <li className="px-2 text-lg font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-lg font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 text-lg font-semibold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2 font-semibold text-xl ">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
        </ul>
        <div className="px-2 text-lg font-bold items-center">
          <button
            className="rounded bg-gray-300 px-8 py-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header