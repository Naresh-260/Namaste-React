import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";


const useMenuItems = (resId) =>{
    const [varities, setVarities] = useState([]);

    useEffect(() => {
            fetchData();
        }, []);
    
        const fetchData = async () => {
            try {
                const data = await fetch(MENU_URL + resId);
    
                const json_data = await data.json();

                console.log("Menue Items:",json_data);
        
                const items = json_data?.data?.cards[5]?.groupedCard?.cardGroupMap?.
                REGULAR.cards;

                console.log(" Items:",items);


                const filteredItems = items.filter((c) => {
                     return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
                })

                console.log("filtered Items:",filteredItems);
                
                setVarities(filteredItems);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

    return varities;
}

export default useMenuItems;