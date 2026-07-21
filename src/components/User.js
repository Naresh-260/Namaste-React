import { useEffect, useState } from "react";

const User = (props) => {
    const {name} = props;

  return (
    <div className=" m-4 p-4 w-full bg-gray-100">
        <h2 className="font-bold">Name : {name}</h2>
        <h3>location: Jogulamba Gadwal</h3>
        <h4>email:lnareshnaru@gmail.com</h4>
    </div>
  )
}

export default User;
