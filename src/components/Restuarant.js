import { useEffect, useState } from "react";
import { BURGER_IMAGE, MENU_API, MENU_IMAGE } from "../utils/constants";
import { useParams } from "react-router";
import "./Restaurant.css";

const Restaurant = () => {
  const { resId } = useParams();
  const [menus, setMenus] = useState([]);

  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0726295&lng=72.8844721&restaurantId=" +
        resId +
        "&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
    );

    const json = await menu.json();

    const menusjson =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards;
    console.log(menusjson);

    setMenus(menusjson);
  };

  return (
    <div className="menu-container">
      {/* Restaurant Header */}
      <div className="restaurant-header">
        <img src={BURGER_IMAGE} alt="Restaurant" className="restaurant-img" />
        <div className="restaurant-details">
          <h1>Foodie's Hub</h1>
          <p>🍔 Burgers • 🍕 Pizza • 🍝 Pasta</p>
          <span className="rating">⭐ 4.5 (2k+ reviews)</span>
        </div>
      </div>

      {/* Menu Items */}
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-items">
        {menus.map((item) => (
          <div className="menu-card" key={item.card.info.id}>
            <img
              src={MENU_IMAGE + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <div className="menu-info">
              <h3>{item.card.info.name}</h3>
              <p>{item.card.info.description}</p>
              <div className="menu-footer">
                <span className="price">{item.card.info.defaultPrice}</span>
                <button className="add-btn">Add +</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
