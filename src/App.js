import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestContainer from "./components/RestContainer";

const AppLayout = () => (
  <div id="app">
    <Header />
    <RestContainer />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
