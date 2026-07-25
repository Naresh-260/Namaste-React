import { useState, useEffect,useContext, use } from "react";
import RestaurantCard,{isVeg} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestuarents from "../utils/useRestuarents";
import UserContext from "../utils/userContext";


const Body = () => {

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchRest, setSearchRest] = useState("");

    const {LoggedInUser,setUserName} = useContext(UserContext)

    const restaurants = useRestuarents();


   const VegRestaurantCard = isVeg(RestaurantCard);
   
    useEffect(() => {
        setFilteredRestaurants(restaurants);
    }, [restaurants]);

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <h1>OOPS! Please Check Your Internet Connection!!</h1>
        );
    }

    if (restaurants.length === 0) {
        return (
            <div>
                {Array.from({ length: 15 }).map((_, index) => (
                    <Shimmer key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className="bg-slate-950">
            <div className="flex justify-center">
                <div className="m-4 p-4">
                    <input className="border border-solid p-2"
                        type="text"
                        placeholder="Search for restaurants"
                        value={searchRest}
                        onChange={(e) => {
                            setSearchRest(e.target.value);
                        }}
                    />
                    <button className = "m-4 px-4 py-2 bg-green-200 rounded"
                        onClick={() => {
                            const filtered = restaurants.filter((restaurant) =>restaurant.info.name.toLowerCase()
                                    .includes(searchRest.toLowerCase())
                            );
                            setFilteredRestaurants(filtered);
                        }}>
                        Search
                    </button>
                </div>
                <div className="m-4 p-4">
                    <button className = "m-4 px-4 py-2 bg-orange-200 rounded"
                        onClick={() => {
                            const topRatedRestaurants = restaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4.5
                            );
                            setFilteredRestaurants(topRatedRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>

                <div className="text-white">
                    UserName : <input type = "text" className="p-4 m-4 border-black  text-black" value={LoggedInUser}
                        onChange={(e)=>{
                            setUserName(e.target.value);
                        }}
                    />
                </div>

            </div>

            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        to={"/menu/" + restaurant.info.id}
                        key={restaurant.info.id}
                    >     
                        {
                            restaurant.info?.veg == true ?<VegRestaurantCard resData = {restaurant}/> : <RestaurantCard resData={restaurant} />
                        }
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Body;