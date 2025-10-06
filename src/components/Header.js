import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlinestatus = useOnlineStatus();

  const data = useContext(UserContext);

  const [loginUser, setLoginUser] = useState("");

  console.log(data);
  return (
    <header>
      <div className="logo">🌸 Shubh{onlinestatus ? "🟢" : "🔴"}</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery Store</Link>
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
                setLoginUser(data.loggedUser);
              }}
            >
              {btn}
            </button>
          </li>
          <li>
            <Link to="/">{loginUser}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
