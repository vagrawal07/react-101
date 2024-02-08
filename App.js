import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/jpeg;base64,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"/>
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

const RestaurantCard = ({resName,cuisine})=>{
    return (
        <div className="res-card">
            <img alt='food' className="res-logo" src=''/>
             <h3>{resName}</h3>
             <h4>{cuisine}</h4>
             <h4>4.4 Stars</h4>
             <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
            <RestaurantCard resName='Agrawal Sweets' cuisine='Sweets, Bakery'/> 
            <RestaurantCard resName='Sagar Foods' cuisine='North Indian'/> 
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
