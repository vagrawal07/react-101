import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({resData})=>{

    const {cloudinaryImageId,cuisines,avgRating,name,costForTwo,deliveryTime} = resData?.data;

    return (
        <div className="res-card">
            <img alt='food' className="res-logo" src={CDN_URL + cloudinaryImageId
        }/>
             <h3>{name}</h3>
             <h4 className="cuisines-list">{cuisines.join(',')}</h4>
             <h4>{avgRating} Stars</h4>
             <h4>₹ {(costForTwo)/100} For Two</h4>
             <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;