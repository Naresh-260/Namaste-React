import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useMenuItems from "../utils/useMenuItems";

const Menu = () => {
   
    const {resId} = useParams();

    const varities = useMenuItems(resId)

    if(varities.length === 0){
        return <Shimmer/>
    }   
    return (
        <div>
            <h1>MENU ITEMS:</h1>
         <ul>
            {varities.map((item) => (
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - ₹{item?.card?.info?.defaultPrice / 100 || item?.
                    card?.info?.price / 100}
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Menu;