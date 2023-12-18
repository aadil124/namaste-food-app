
import { CDN_URL } from "../utils/constant"
const RestaurantCard = ({ restaurant }) => {
    const { name, areaName, avgRating, costForTwo, cuisines, sla, cloudinaryImageId } = restaurant?.info

    return (
        <div className="m-2 p-3 rounded-md bg-gray-300 w-[270px] hover:bg-blue-100" >
            <div>
                <img className="w-full h-52 rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} />
            </div>
            <div>
                <h3 className="text-lg font-bold py-3 text-blue-800">{name}</h3>
                <h4 className="text-sm font-bold py-3">{cuisines.join(", ")}</h4>
                <div className="flex justify-between">
                    <h4 className="font-bold py-3  text-red-600">{costForTwo}</h4>
                    <h4 className="font-bold py-3  text-red-600">{avgRating} Stars</h4>
                </div>
                <div className="flex justify-between">
                    <h4 className="font-bold py-3  text-blue-700">{sla.slaString}</h4>
                    <h3 className="font-bold py-3  text-fuchsia-700" >{areaName}</h3>
                </div>

            </div>

        </div>
    )
}

export const withPromotedCard = (RestaurantCard) => {
    return (props) => {
        // console.log(props.restaurant.info.aggregatedDiscountInfoV3.header)
        // console.log(props.restaurant.info)
        return (
            <>
                <label className="absolute bg-red-500 p-2 m-2 rounded-md text-yellow-300 font-medium">Best Seller</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}
export default RestaurantCard;