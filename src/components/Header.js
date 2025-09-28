import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <header>
      <div className="logo">🌸 Shubh</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Cart</a>
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
