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
        
                const items = json_data?.data?.cards[5]?.groupedCard?.cardGroupMap?.
                REGULAR.cards[1]?.card?.card?.itemCards;
                setVarities(items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

    return varities;
}

export default useMenuItems;