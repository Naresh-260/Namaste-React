import { Link } from "react-router-dom";
import { header_logo } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [LoginOrLogout, setLoginOrLogout] = useState("Login");
    const onlineOrOfline = useOnlineStatus();
    let display = "Online";

    if(onlineOrOfline == true){
        display = "Online";

    }
    else{
        display = "Ofline";
    }
    return (
        <div className="header">
            <div className="logo">
            <img src = {header_logo} alt="logo"/>
            </div>
            <div className ="nav-items">
            <ul>
                <li>{display}</li>
                <li>
                    <Link to = "/">Home</Link>
                </li>

                <li>
                    <Link to = "/about">About Us</Link>
                </li>

                <li>
                    <Link to = "/contact">Contact Us</Link>
                </li>

                <li>
                    <Link to = "/cart">Cart</Link>
                </li>

            </ul>
            
            <div className="loginorLogoutButton">
                <button onClick={()=>{
                    setLoginOrLogout(LoginOrLogout === "Login" ? "Logout" : "Login");
                }}>{LoginOrLogout}</button>
            </div>
            </div>
        </div>
    )
}

export default Header;