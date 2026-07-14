import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const Menu = () => {
    const [varities, setVarities] = useState([]);
    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_URL + resId);

            const json_data = await data.json();

            console.log("json data",json_data);

            const items = json_data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
            console.log(items);
            setVarities(items);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <div>
            <h1>MENU ITEMS:</h1>

         <ul>
            {varities.map((item) => (
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Menu;