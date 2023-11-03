import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {

    const [listOfRestaurantData, setListOfRestaurantData] = useState([])
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([])
    const [searchText, setSearchText] = useState()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
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
                        return <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                    })
                }

            </div>
        </div>
    );
}

export default Body;