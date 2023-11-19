import { useEffect, useState } from "react";
import { REGULAR_MENU_URL } from "../utils/constant";


const useRestaurantMenu = (resId) => {

    console.log(resId)

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(REGULAR_MENU_URL + resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;