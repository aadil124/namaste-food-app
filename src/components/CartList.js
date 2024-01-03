import { clearCartItem } from "../redux/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const CartList = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearCartItem());
  };
  return (
    <>
      <div className="w-6/12 m-auto ">
        <div className="text-center p-4 text-xl font-bold flex justify-between">
          Cart - ({cartItem.length} Items)
          <div>
            <button
              className="p-2 m-2 bg-gray-300 rounded-lg"
              onClick={handleClearItem}
            >
              Clear Cart Items
            </button>
          </div>
        </div>
        {cartItem.length === 0 ? (
          <h1 className="text-center ">
            Cart is Empty !!! Please Add Items to cart{" "}
          </h1>
        ) : (
          <div>{<ItemList ItemInfo={cartItem} />}</div>
        )}
      </div>
    </>
  );
};

export default CartList;
