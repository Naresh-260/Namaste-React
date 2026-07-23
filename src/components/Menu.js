import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useMenuItems from "../utils/useMenuItems";
import ListItemCategory from "./ListItemCategory";

const Menu = () => {
   
    const {resId} = useParams();

    const varities = useMenuItems(resId)
    if(varities.length === 0){
        return <Shimmer/>
    }   
    return (
        <div>
            <h1>MENU ITEMS:</h1>
                {varities.map((varity)=> {
                     return ( <div key = {varity.card?.card?.categoryId}>
                                <ListItemCategory data = {varity.card?.card}/>
                                </div>
                            )
                })}

        </div>
    );
};

export default Menu;