import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlinestatus = useOnlineStatus();

  const data = useContext(UserContext);

  const [loginUser, setLoginUser] = useState("");

  const dispatch = useDispatch();

  const handleDispatch = (val) => {
    if (val === "a") {
      dispatch(addItem(1));
    } else if (val === "r") {
      dispatch(removeItem(-1));
    } else {
      dispatch(clearCart());
    }
  };

  //console.log(data);

  const cart = useSelector((store) => store.cart.items);
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
            <button className="btn" onClick={() => handleDispatch("a")}>
              Add tocart
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => handleDispatch("r")}>
              remove from cart
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => handleDispatch("c")}>
              clear cart
            </button>
          </li>
          <li>
            <Link to="/cart">Cart {cart}</Link>
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
