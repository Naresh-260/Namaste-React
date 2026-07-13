import { header_logo } from "../utils/constants";
import { useState } from "react";
const Header = () =>{
    const [LoginOrLogout, setLoginOrLogout] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
            <img src = {header_logo} alt="logo"/>
            </div>
            <div className ="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
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