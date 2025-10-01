import { BURGER_IMAGE, MENU_API, MENU_IMAGE } from "../utils/constants";
import { useParams } from "react-router";
import "./Restaurant.css";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import ResCategory from "./ResCategory";

const Restaurant = () => {
  const { resId } = useParams();

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
        {menusCategory.map((c) => (
          <ResCategory key={c.card.card.title} rescard={c} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
