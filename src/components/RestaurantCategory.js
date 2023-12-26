import { useState } from "react";

import ItemList from "./ItemList";
const RestaurantCategory = ({ category, showItem, setShowIndex }) => {
  console.log(category);
  const ItemInfo = category?.card?.card?.itemCards;
  console.log("IIIII", ItemInfo);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <>
      <div
        className="m-2 p-2 bg-gray-100 flex justify-between cursor-pointer shadow-md"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length})
        </span>
        <p> {showItem ? "🔼" : "🔽"}</p>
      </div>

      {showItem && <ItemList ItemInfo={ItemInfo} />}
    </>
  );
};

export default RestaurantCategory;
