import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REGULAR_MENU_URL } from "../utils/constant";
import ShimmerUI from "./ShimmerUI"

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`${REGULAR_MENU_URL}${resId}`)
        const response = await data.json()
        const menuCardInfo = response.data
        setResInfo(menuCardInfo)
        // console.log(menuCardInfo)
    }
    if (resInfo === null) return <ShimmerUI />

    // console.log(resInfo?.cards[0]?.card?.card?.info)
    const { name, avgRating, costForTwoMessage, cuisines, headerBanner, veg } = resInfo?.cards[0]?.card?.card?.info
    // console.log(name)
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>Name of Restaurant: {name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}  </p>
            <h3>Rating: {avgRating} </h3>
            <div>
                Menu:
                {
                    itemCards.map((item) => { return <p key={item.card.info.id}>{item.card.info.name}</p> })
                }
            </div>



        </div>
    )
}

export default RestaurantMenu;