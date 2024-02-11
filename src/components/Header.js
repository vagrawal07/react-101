import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
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
            </div>
        </div>
    )
}

export default Header;