import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <header>
      <div className="logo">🌸 Shubh</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="btn"
              id={btn}
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
