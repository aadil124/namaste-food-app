
import { CDN_URL } from "../utils/constant"
const RestaurantCard = ({ restaurant }) => {
    const { name, areaName, avgRating, costForTwo, cuisines, sla, cloudinaryImageId } = restaurant?.info
    // console.log(restaurant.info)
    return (
        <div className="m-2 p-3 rounded-md bg-gray-100 w-72">
            <div>
                <img className="w-full h-52 rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} />
            </div>
            <div>
                <h3 className="text-2xl font-bold py-3 text-blue-800">{name}</h3>
                <h4 className="text-lg font-bold py-3">{cuisines.join(", ")}</h4>
                <div className="flex justify-between">
                    <h4 className="font-bold py-3  text-red-600">{costForTwo}</h4>
                    <h4 className="font-bold py-3  text-red-600">{avgRating} Stars</h4>
                </div>
                <div className="flex justify-between">
                    <h4 className="font-bold py-3  text-blue-700">{sla.deliveryTime} Minutes</h4>
                    <h3 className="font-bold py-3  text-fuchsia-700" >{areaName}</h3>
                </div>

            </div>

        </div>
    )
}

export default RestaurantCard;