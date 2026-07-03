import { CND_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, avgRating, cuisines, costForTwo,cloudinaryImageId} = resData.info;
    return (
        <div className = "restro-cards">
           <img src ={CND_URL + cloudinaryImageId} alt="restro"/>
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
           <p>{costForTwo}</p>
        </div>
    )
}


export default RestaurantCard;