import { CND_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,areaName, avgRating, cuisines, costForTwo,cloudinaryImageId} = resData.info;
    return (
  <div className="m-4 p-4 w-56 rounded-lg bg-gray-100 shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
    <img
      className="rounded-lg h-40 w-full object-cover"
      src={CND_URL + cloudinaryImageId}
      alt="Restaurant"
    />

    <h3 className="mt-2 text-lg font-bold">{name}</h3>

    <h4 className="text-gray-700">Area: {areaName}</h4>

    <h4 className="text-gray-700">{cuisines.join(", ")}</h4>

    <h4 className="font-semibold text-green-600">
      ⭐ {avgRating}
    </h4>

    <p className="font-bold text-red-600">
      {costForTwo}
    </p>
  </div>
);
}

export const isVeg = (RestaurentCard)=>{
    return (props) =>{

        return(
            <div>
                <p className="absolute z-auto bg-slate-950 text-white  rounded">
                Veg
                </p>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}


export default RestaurantCard;