import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Hello welcome");
const jsxheading = (
  <h1 id="heading" className="head" tabIndex={5}>
    Welcome to js
  </h1>
);

const HeadingComponent = () => <h1>hello</h1>;

const HeadingComponent1 = () => {
  return <h1>hellooo</h1>;
};

const HeadingComponent2 = () => (
  <h1 className="h1" id="ddd">
    welcome to JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
