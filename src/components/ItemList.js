import { useDispatch } from "react-redux";
import { CND_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice"


const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    
    }
  return (
    <div>
        {items.map((item)=>{
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
                <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-950 text-white"
                onClick={()=>handleAddItem(item)}>
                - ADD +</button>
            </div>
        </div>
                );
                    })
        }
    </div>
  )
}

export default ItemList;
