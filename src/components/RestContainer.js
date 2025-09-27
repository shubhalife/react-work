import RestCard from "./RestCard";
import restData from "../utils/mockData";
import Search from "./Search";
import { useState } from "react";

const RestContainer = () => {
  // let restaurantList = restData;

  const [restaurantList, setRestaurantList] = useState(restData);

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
