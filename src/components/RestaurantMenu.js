import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <ShimmerUI />
    console.log(resInfo)
    // const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[0]?.card?.card?.info
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(itemCards)

    const ctaLink = resInfo.cards[5].card.card.gridElements.infoWithStyle.restaurants
    console.log(ctaLink)
    const ctaLinkData = ctaLink.map((link) => {
        return (link.cta.link)
    })
    // console.log(ctaLinkData[0])
    return (
        <div className="menu">
            <h1>Name of Restaurant:</h1>
            {/* <p>{cuisines.join(", ")} - {costForTwoMessage}  </p>
            <h3>Rating: {avgRating} </h3>
            <div>
                Menu:
                {
                    itemCards.map((item) => { return <p key={item.card.info.id}>{item.card.info.name}</p> })
                }
            </div> */}
        </div>
    )
}

export default RestaurantMenu;