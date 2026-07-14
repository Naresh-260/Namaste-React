import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    const [searchrest, setSearchRest] = useState("");

    const [fileteredRestuarents, setFilteredRestuarents] = useState([]);

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
            setFilteredRestuarents(listofRestaurants);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
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
                    <input type="text" placeholder="Search for restaurants" value={searchrest}
                        onChange = {(e)=>{
                            setSearchRest(e.target.value);
                        }}
                    />
                    <button onClick = {() => {
                        const filteredRestuarents = restaurants.filter((restuarent) => 
                        restuarent.info.name.toLowerCase().includes(searchrest.toLowerCase()));
                        setFilteredRestuarents(filteredRestuarents);
                    }}>Search</button>
                </div>

                <div className="filter">
                    <button onClick={() => {
                        const topRatedRestaurents = restaurants.filter((restaurant) => 
                        restaurant.info.avgRating > 4.5);
                        setFilteredRestuarents(topRatedRestaurents);
                    }}>Top rating restaurants</button>
                </div>

            </div>
            
            <div className="restaurant-list">
                {fileteredRestuarents.map((restaurant) => (
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