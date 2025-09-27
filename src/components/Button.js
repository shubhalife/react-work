const Button = (props) => {
  return (
    <div className="filterOption">
      <button className="btn" onClick={() => console.log("clicked")}>
        By Rating
      </button>
      <button className="btn">Clear</button>
    </div>
  );
};

export default Button;
