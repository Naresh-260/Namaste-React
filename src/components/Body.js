import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestuarents from "../utils/useRestuarents";

const Body = () => {

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchRest, setSearchRest] = useState("");

    const restaurants = useRestuarents();

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
        <div className="body">
            <div className="searchFilter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        value={searchRest}
                        onChange={(e) => {
                            setSearchRest(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filtered = restaurants.filter((restaurant) =>restaurant.info.name.toLowerCase()
                                    .includes(searchRest.toLowerCase())
                            );
                            setFilteredRestaurants(filtered);
                        }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button
                        onClick={() => {
                            const topRatedRestaurants = restaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4.5
                            );
                            setFilteredRestaurants(topRatedRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>

            </div>

            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        to={"/menu/" + restaurant.info.id}
                        key={restaurant.info.id}
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Body;