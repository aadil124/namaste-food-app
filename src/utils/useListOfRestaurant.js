import { useEffect, useState } from "react";
import { LIST_RESTAURANT_URL } from "./constant";

const useListOfRestaurant = () => {
    const [listOfRestaurantData, setListOfRestaurantData] = useState([])
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {

        const data = await fetch(LIST_RESTAURANT_URL)
        const response = await data.json()
        const restaurantCardData =
          response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        console.log(response);
        setListOfRestaurantData(restaurantCardData)
        setFilteredRestaurantData(restaurantCardData)
    }

    return {
        listOfRestaurantData,
        filteredRestaurantData,
        setListOfRestaurantData,
        setFilteredRestaurantData
    }
}

export default useListOfRestaurant;