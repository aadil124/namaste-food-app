import RestaurantCard from "./RestaurantCard";
import objData from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [filterData, setFilterData] = useState(objData)
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