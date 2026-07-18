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
      <h1>Look at MyDeatails</h1>
      <User/> 
    </div>

    )
  }
}

export default AboutUs;
