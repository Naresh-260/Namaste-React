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
        <div className= "flex  justify-between bg-sky-100">
            <div className="w-32">
            <img src = {header_logo} alt="logo"/>
            </div>
            <ul className="flex my-8">
                <li className="mx-4 px-4">{display}</li>
                <li className="mx-4 px-4">
                    <Link to = "/">Home</Link>
                </li>

                <li className="mx-4 px-4">
                    <Link to = "/about">About Us</Link>
                </li>

                <li className="mx-4 px-4">
                    <Link to = "/contact">Contact Us</Link>
                </li>

                <li className="mx-4 px-4">
                    <Link to = "/grocery">Grocery</Link>
                </li>

                <li className="mx-4 px-4">
                    <Link to = "/cart">Cart</Link>
                </li>
                <li className="mx-4 px-4">
                    <div className="loginorLogoutButton">
                        <button onClick={()=>{
                            setLoginOrLogout(LoginOrLogout === "Login" ? "Logout" : "Login");
                            }}>{LoginOrLogout}</button>
                    </div>
                </li>
            </ul>  
            </div>
    )
}

export default Header;