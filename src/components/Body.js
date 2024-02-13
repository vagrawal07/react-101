import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [resList, setResList] = useState([]);

  // let resList = restaurantList;

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=> {
    const data = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
// initialize checkJsonData() function to check Swiggy Restaurant data
async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

      // initialize checkData for Swiggy Restaurant data
      let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        console.log(i);
        return checkData;
      }
    }
  }

  // call the checkJsonData() function which return Swiggy Restaurant data
  const resData = await checkJsonData(json);

  setResList(resData)
  } 

//Conditional Rendering

  return resList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter the restaurantList data

            const filteredResList = resList.filter(
              (res) => res?.info?.avgRating > 4
            );

            setResList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
