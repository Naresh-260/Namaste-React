import { useState} from "react";
import ItemList from "./ItemList";

const RestaurentCategory = (props) => {
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
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurentCategory;