import { BURGER_IMAGE, MENU_API, MENU_IMAGE } from "../utils/constants";
import { useParams } from "react-router";
import { useState } from "react";
import "./Restaurant.css";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import ResCategory from "./ResCategory";

const Restaurant = () => {
  const { resId } = useParams();

  const [showindex, setShowindex] = useState(null);

  const menusCategory = useRestuarantMenu(resId);

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
      <div>
        {menusCategory.map((c, index) => (
          <ResCategory
            key={c.card.card.title}
            rescard={c}
            showItems={index === showindex ? true : false}
            setIndex={() => setShowindex(index === showindex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
