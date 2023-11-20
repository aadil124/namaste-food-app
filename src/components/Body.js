import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
    const [searchText, setSearchText] = useState()
    const { filteredRestaurantData, listOfRestaurantData, setFilteredRestaurantData, setListOfRestaurantData } = useListOfRestaurant();

    const handleClick = () => {
        let filterCardData = listOfRestaurantData.filter((item) => {
            return item?.info.avgRating > 3.8
        })
        setListOfRestaurantData(filterCardData)
        setFilteredRestaurantData(filterCardData)
    }

    const searchTextButton = () => {
        let searchFilteredRestaurant = listOfRestaurantData.filter((item) => {
            return item?.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredRestaurantData(searchFilteredRestaurant)
    }

    if (listOfRestaurantData.length === null) return (<ShimmerUI />) 

    return (<div className="body-container">
            <div className="search-container">
                <div className="search_box">
                    <input type="text" placeholder="Search Here..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={searchTextButton}> Search Restaurant</button>
                </div>
                <button onClick={handleClick}> Top Rated Restaurant</button>
            </div>
            <div className="cards-container">
                {
                    filteredRestaurantData.map((restaurant) => {
                        return (
                            <Link className="restaurantMenuLink" to={`/restaurantMenu/${restaurant.info.id}`} key={restaurant.info.id}>
                                <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                            </Link>
                        ) 
                    })
                }

            </div>
        </div>
    );
}

export default Body;