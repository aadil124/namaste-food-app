import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
const ItemList = ({ ItemInfo }) => {
  // console.log(ItemInfo);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {ItemInfo.map((item) => (
        <div
          className="flex justify-between border-b-2 p-2"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <p className="font-medium">{item?.card?.info?.name}</p>
            <span className="text-sm">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs text-gray-400 py-2">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-lg"
            />
            <button
              className="absolute right-0 bottom-2 text-white bg-black p-1 rounded-md"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
