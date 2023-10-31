import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {

    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        const restaurantCardData = response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(restaurantCardData[0].info)
        setRestaurantData(restaurantCardData)
    }


    const handleClick = () => {
        let filterCardData = objData.filter((item) => {
            // console.log(item?.info.avgRating)
            return item?.info.avgRating > 3.8
        })
        setRestaurantData(filterCardData)
    }

    //shimmer UI
    if (restaurantData.length === 0) {
        return <ShimmerUI />
    }

    return (
        <div className="body-container">
            <div className="search-container">
                <button onClick={handleClick}> Top Rated Restaurant</button>
            </div>
            <div className="cards-container">
                {
                    restaurantData.map((restaurant) => {
                        return <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                    })
                }

            </div>
        </div>
    );
}

export default Body;