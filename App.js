import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  - Nav links
 * Body
 *  - Search
 *  - RestuarantComponent
 *      - Restuarant Cards
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

const AppLayout = () => <div id="app">{Header()}</div>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
