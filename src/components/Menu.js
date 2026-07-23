import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useMenuItems from "../utils/useMenuItems";
import RestaurentCategory from "./RestuarentCategory";

const Menu = () => {
   
    const {resId} = useParams();

    const varities = useMenuItems(resId)
    if(varities.length === 0){
        return <Shimmer/>
    }   
    return (
        <div>
            <h1>MENU ITEMS:</h1>
                {varities.map((varity,index)=> {
                     return ( <div key = {varity.card?.card?.categoryId}>
                                <RestaurentCategory data = {varity.card?.card}/>
                                </div>
                            )
                })}

        </div>
    );
};

export default Menu;