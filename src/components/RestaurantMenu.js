import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <ShimmerUI />;

  const restaurantDetail = resInfo?.cards[0]?.card?.card?.info;
  const ItemsCategoryDetails =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(ItemsCategoryDetails);
  return (
    <div className="my-6 w-6/12 mx-auto p-2">
      <div className="flex justify-between border-b-2 border-dashed pb-3">
        <div>
          <p className="font-bold text-2xl text-left">
            {restaurantDetail.name}
          </p>
          <p className="text-sm">{restaurantDetail.cuisines.join(", ")}</p>
          <p className="text-sm">{restaurantDetail.areaName}</p>
        </div>
        <div className="border shadow rounded-md text-center p-2">
          <h1 className="border-b-2 pb-1 text-sm">
            <span className="text-sm p-1">⭐</span>
            {restaurantDetail.avgRatingString}
          </h1>
          <h1 className="text-xs mt-2">
            {restaurantDetail.totalRatingsString}
          </h1>
        </div>
      </div>
      <div>
        {ItemsCategoryDetails.map((category) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;