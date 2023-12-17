import RestaurantCard, { withPromotedCard } from "./RestaurantCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus()


    const PromotedRestaurantCard = withPromotedCard(RestaurantCard);


    if (onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection.</h1>


    if (listOfRestaurantData.length === null) return (<ShimmerUI />) 

    return (<div className="m-2 p-3 bg-gray-100">
        <div className="flex">
            <div className="my-3">
                <input className="bg-gray-200 mx-2 px-3 py-2 border border-solid border-black " type="text" placeholder="Search Here..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={searchTextButton} className="px-3 py-2 bg-pink-200 rounded-md mx-2 font-semibold"> Search Restaurant</button>
                <button onClick={handleClick} className="px-3 py-2 bg-pink-200 rounded-md font-semibold"> Top Rated Restaurant</button>
            </div>
        </div>
        <div className="cards-container flex flex-wrap">
                {
                    filteredRestaurantData.map((restaurant) => {
                        return (
                            <Link className="restaurantMenuLink" to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                                {
                                    restaurant?.info?.avgRating > 4 ? <PromotedRestaurantCard restaurant={restaurant} key={restaurant.info.id} /> : <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                                }

                            </Link>
                        ) 
                    })
                }

            </div>
        </div>
    );
}

export default Body;