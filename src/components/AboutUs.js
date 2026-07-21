import User from "./User"
import UserClass from "./UserClass"
import React from "react";


class AboutUs extends React.Component{

  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
      <h1 className="font-bold text-lg  text-center">Look at MyDeatails</h1>
      <User name = {"Naresh Lingammagari"}/> 
    </div>

    )
  }
}

export default AboutUs;
