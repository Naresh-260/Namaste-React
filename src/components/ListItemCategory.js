import { useState,useEffect } from "react";
import { CND_URL } from "../utils/constants";

const ListItemCategory = (props) => {
    const {data} = props;
    console.log(data);

    const[showItems,setShowItems] = useState(false);

        const onClickHandler = ()=>{
        setShowItems(!showItems);
    }
    

    return (
        <div className="w-6/12 mx-auto my-2 bg-gray-100">
            <div className=" flex justify-between" onClick={onClickHandler} >
                <span className="font-bold text-lg m-2 p-2">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
             </div>
            <div>

            {showItems &&
                    data.itemCards.map((item)=>{
                        return(
                        <div key = {item.card.info.id} className="flex border-b border-gray-300 py-4 cursor-pointer">
                        <div className="m-2 p-2 w-9/12">
                            <span className="font-bold ">{item.card.info.name} - ₹ {item.card.info.price / 100|| item.card.info.defaultPrice / 100}</span>
                            <p className="text-xs m-2">{item.card.info.description}</p>      
                        </div>
                           <div className=" relative w-40">
                                    <img
                                        className="w-full h-32 object-cover rounded-lg"
                                        src={CND_URL + item.card.info.imageId}
                                        alt="image"
                                    />
                                <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-950 text-white">- ADD +</button>
                            </div>
                        </div>
                        );
                    })
                
            }
            </div>
        </div>
    );
};

export default ListItemCategory;