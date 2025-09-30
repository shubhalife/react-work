import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import RestContainer from "./components/RestContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import Shimmer from "./components/Shimmer";
import ErrorPage from "./components/ErrorPage";
import Restaurant from "./components/Restuarant";

const GroceryStore = lazy(() => import("./components/GroceryStore"));

const AppLayout = () => (
  <div id="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <RestContainer /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <Restaurant /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <GroceryStore />
          </Suspense>
        ),
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
