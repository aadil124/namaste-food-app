import RestaurantCard from "./RestaurantCard";
import objData from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [filterData, setFilterData] = useState(objData)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        console.log(response)
    }


    const handleClick = () => {
        let filterCardData = objData.filter((item) => {
            // console.log(item?.info.avgRating)
            return item?.info.avgRating > 3.8
        })
        setFilterData(filterCardData)
    }
    return (
        <div className="body-container">
            <div className="search-container">
                <button onClick={handleClick}> Top Rated Restaurant</button>
            </div>
            <div className="cards-container">
                {
                    filterData.map((restaurant) => {
                        return <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                    })
                }

            </div>
        </div>
    );
}

export default Body;