import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [resList, setResList] = useState([]);
  const [resFilterList, setFilterResList] = useState([]);
  const [searchText, updateSearchText] = useState("");

  // let resList = restaurantList;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RES_API
    );

    const json = await data.json();
    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);

    setResList(resData);
    setFilterResList(resData);
  };

  //Conditional Rendering

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              updateSearchText(e.target.value);
            }}
          />
          <button
            className="filter-btn"
            onClick={() => {
              const filteredResList = resList.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
              );
              setFilterResList(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter the restaurantList data

            const filteredResList = resList.filter(
              (res) => res?.info?.avgRating > 4.3
            );

            setFilterResList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resFilterList.map((restaurant) => (   
         <Link  key={restaurant?.info?.id}  to={"/restaurant/"+restaurant?.info?.id}> <RestaurantCard resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
