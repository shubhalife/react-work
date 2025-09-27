import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  // console.log(props.restCardData);
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props.restCardData?.card.card.info;

  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
        className="restaurant-img"
      />
      <div className="restaurant-body">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
        <div className="restaurant-info">
          <span className="rating">⭐ {avgRating}</span>
          <span className="delivery">{sla.slaString}</span>
          <span className="price">{costForTwo}</span>
        </div>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default RestCard;
