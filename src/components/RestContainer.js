import RestCard from "./RestCard";
import restData from "../utils/mockData";
const RestContainer = () => {
  return (
    <div id="restaurant-content">
      {restData.map((resturant) => (
        <RestCard key={resturant.card.card.info.id} restCardData={resturant} />
      ))}
    </div>
  );
};

export default RestContainer;
