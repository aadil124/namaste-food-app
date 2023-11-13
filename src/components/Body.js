import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { LIST_RESTAURANT_URL } from "../utils/constant";

const Body = () => {

    const [listOfRestaurantData, setListOfRestaurantData] = useState([])
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([])
    const [searchText, setSearchText] = useState()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(LIST_RESTAURANT_URL)
        const response = await data.json()
        const restaurantCardData = response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(restaurantCardData[0].info)
        setListOfRestaurantData(restaurantCardData)
        setFilteredRestaurantData(restaurantCardData)
    }


    const handleClick = () => {
        let filterCardData = listOfRestaurantData.filter((item) => {
            // console.log(item?.info.avgRating)
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


    return listOfRestaurantData.length === 0 ? (<ShimmerUI />) : (
        <div className="body-container">
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