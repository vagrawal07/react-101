import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>{

    const [btnName,setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
               <button className="login-btn" onClick={()=>{
                setBtnName(btnName==="Login"?"Logout":"Login");
               }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;