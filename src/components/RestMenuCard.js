import { MENU_IMAGE } from "../utils/constants";
const RestMenuCard = ({ item }) => {
  //console.log("RestmenuCArd", item);
  return (
    <div className="menu-items">
      <div className="menu-card">
        <img
          src={MENU_IMAGE + item.card.info.imageId}
          alt={item.card.info.name}
        />
        <div className="menu-info">
          <h3>{item.card.info.name}</h3>
          <p>{item.card.info.description}</p>
          <div className="menu-footer">
            <span className="price">₹{item.card.info.defaultPrice / 100}</span>
            <button className="add-btn">Add +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestMenuCard;
