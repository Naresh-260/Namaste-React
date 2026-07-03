import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/restaurantsList";
const Body = () =>{
    return (
        <div className="body">
           <div className = "searchBar"> Search and Filter Restaurants</div>
           {restaurantsList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
           ))}
           
        </div>
    )
}

export default Body;