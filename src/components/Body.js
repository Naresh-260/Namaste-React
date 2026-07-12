import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
            );
            const json_data = await data.json();
            console.log(json_data);
            const listofRestaurants = json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurants(listofRestaurants);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

if (restaurants.length === 0) {
    return (
        <div>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
        </div>
    );
}
    return (
        <div className="body">
            <div className="searchBar">Search and Filter Restaurants</div>
            
            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.info.id} 
                        resData={restaurant} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;