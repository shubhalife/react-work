import { useState } from "react";
import RestMenuCard from "./RestMenuCard";

const ResCategory = ({ rescard }) => {
  const [showItems, setShowItems] = useState(false);

  const clickHandle = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div className="accordion-tile" onClick={clickHandle}>
        <div className="accordion-header">
          <h3>
            {rescard.card.card.title}({rescard.card.card.itemCards.length})
          </h3>
          <span className="arrow">&#9662;</span>
        </div>
      </div>
      {showItems && (
        <div className="accordion-content">
          {rescard?.card?.card?.itemCards.map((c) => (
            <RestMenuCard key={c.card.info.id} item={c} />
          ))}
        </div>
      )}
    </>
  );
};

export default ResCategory;
