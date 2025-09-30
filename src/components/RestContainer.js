import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Search from "./Search";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const RestContainer = () => {
  // let restaurantList = restData;

  console.log("render");

  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();
    setRestaurantList(json?.data?.cards?.slice(3));
    setFilterList(json?.data?.cards?.slice(3));
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <Offline />;
  }

  return restaurantList.length === 0 ? (
    <>
      <Search />
      <button className="btn">filter</button>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            console.log(searchText);

            const filerrest = restaurantList.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterList(filerrest);
          }}
        >
          🔍
        </button>
      </div>
      <div className="filterOption">
        <button
          className="btn"
          onClick={() => {
            let filterRatedList = restaurantList.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setFilterList(filterRatedList);
          }}
        >
          4 Rating
        </button>
        <button className="btn" onClick={() => setFilterList(restaurantList)}>
          Clear
        </button>
      </div>
      <div id="restaurant-content">
        {filterList.map((resturant) => (
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
