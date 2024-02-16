import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      (MENU_API + resId)
    );

    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const index = resInfo?.cards.findIndex(card => card?.card?.card?.info !== undefined);
const { name, cuisines, costForTwoMessage } = index !== -1 ? resInfo?.cards[index]?.card?.card?.info : {};


    const menuIndex = resInfo?.cards.findIndex(card => card?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card !== undefined);
    const { itemCards } = menuIndex !== -1 ? resInfo?.cards[menuIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : {};
    

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} | {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li  key={item.card.info.id}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.price)/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
