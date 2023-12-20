import { useState } from "react";
import { CDN_URL } from "../utils/constant";
const ItemsCategory = ({ category }) => {
  // console.log(category);
  const ItemInfo = category?.card?.card?.itemCards;
  // console.log("IIIII", ItemInfo);

  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <>
      <div
        className="m-2 p-2 bg-gray-100 flex justify-between"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length})
        </span>
        <p> {showItem ? "🔼" : "🔽"}</p>
      </div>

      {showItem && (
        <div>
          {ItemInfo.map((item) => (
            <div className="flex justify-between border-b-2 p-2">
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
                <button className="absolute right-0 bottom-2 text-red-500 bg-gray-300 p-1 rounded-md ">
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemsCategory;
