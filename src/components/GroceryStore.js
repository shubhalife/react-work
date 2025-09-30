import "./GroceryStore.css";

const GroceryStore = () => {
  const groceries = [
    {
      id: 1,
      name: "Fresh Apples",
      price: "₹120/kg",
      image: "https://via.placeholder.com/120?text=Apples",
    },
    {
      id: 2,
      name: "Bananas",
      price: "₹60/dozen",
      image: "https://via.placeholder.com/120?text=Bananas",
    },
    {
      id: 3,
      name: "Milk 1L",
      price: "₹50",
      image: "https://via.placeholder.com/120?text=Milk",
    },
    {
      id: 4,
      name: "Rice 5kg",
      price: "₹550",
      image: "https://via.placeholder.com/120?text=Rice",
    },
    {
      id: 5,
      name: "Bread",
      price: "₹40",
      image: "https://via.placeholder.com/120?text=Bread",
    },
  ];

  return (
    <div className="grocery-container">
      <h1 className="grocery-title">🛒 Grocery Store</h1>
      <div className="grocery-grid">
        {groceries.map((item) => (
          <div className="grocery-card" key={item.id}>
            <img src={item.image} alt={item.name} className="grocery-img" />
            <h2 className="grocery-name">{item.name}</h2>
            <p className="grocery-price">{item.price}</p>
            <button className="grocery-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryStore;
