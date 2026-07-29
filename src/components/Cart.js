import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList.js";
import { useDispatch, useSelector } from "react-redux";
const Cart = ()=>{
     const items = useSelector((store) => store.cart.items);
     const dispatch = useDispatch();
     const handleClearCart = ()=>{
        dispatch(clearCart())
     }
    return(
        <div>
            <div className="flex justify-center m-4 p-4">
            <h1 className="text-center font-bold text-lg  mx-4 p-4">Cart</h1>
            <button className="mx-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={handleClearCart}>clear cart</button>
            </div>
        
            <div className="w-6/12 m-auto bg-gray-100">
                <ItemList items = {items}/>
            </div>
        </div>
    )
}
export default Cart