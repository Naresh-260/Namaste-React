import { header_logo } from "../utils/constants";
const Header = () =>{
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
            </div>
        </div>
    )
}

export default Header;