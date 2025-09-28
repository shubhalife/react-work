import RestCard from "./RestCard";
import restData from "../utils/mockData";
import Search from "./Search";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestContainer = () => {
  // let restaurantList = restData;

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();
    setRestaurantList(json?.data?.cards?.slice(3));
  };

  if (restaurantList.length === 0) {
    return (
      <>
        <Search />
        <button className="btn">filter</button>
        <Shimmer />
      </>
    );
  }

  return (
    <>
      <Search />
      <div className="filterOption">
        <button
          className="btn"
          onClick={() => {
            let filterRatedList = restaurantList.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setRestaurantList(filterRatedList);
          }}
        >
          4 Rating
        </button>
        <button className="btn" onClick={() => setRestaurantList(restData)}>
          Clear
        </button>
      </div>
      <div id="restaurant-content">
        {restaurantList.map((resturant) => (
          <RestCard
            key={resturant.card.card.info.id}
            restCardData={resturant}
          />
        ))}
      </div>
    </>
  );
};

export default RestContainer;
