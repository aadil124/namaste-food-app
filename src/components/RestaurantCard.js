
import { CDN_URL } from "../utils/constant"
const RestaurantCard = ({ restaurant }) => {
    const { name, areaName, avgRating, costForTwo, cuisines, sla, cloudinaryImageId } = restaurant?.info
    console.log(restaurant.info)
    return (
        <div className="rest-card">
            <img className="food-img" src={`${CDN_URL}${cloudinaryImageId}`} />
            <div className="card-title">
                <h3>{name}</h3>
            </div>
            <br />
            <h4>{cuisines.join(", ")}</h4>
            <br />
            <h4>{costForTwo}</h4>
            <br />
            <h4>{avgRating} Stars</h4>
            <br />
            <h4>{sla.deliveryTime} Minutes</h4>
            <br />
            <h3>{areaName}</h3>
        </div>
    )
}

export default RestaurantCard;