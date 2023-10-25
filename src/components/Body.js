import RestaurantCard from "./RestaurantCard";
import objData from "../utils/mockData";

const Body = () => {
    return (
        <div className="body-container">
            <div className="search-container">
                Search
            </div>
            <div className="cards-container">
                {
                    objData.map((restaurant) => {
                        return <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                    })
                }

            </div>
        </div>
    );
}

export default Body;