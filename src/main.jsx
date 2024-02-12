import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayuts from "./layouts/MainLayuts";

// lesson
import Home from "./pages/Home/Home";
import GoodItem from "./pages/GoodItem/GoodItem";
import Category from "./pages/Category/Category";
import Recipe from "./pages/Recipe/Recipe";
import Random from "./pages/Random/Random";

// import App from "./App.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayuts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/goodItem",
          element: <GoodItem />,
        },
        {
          path: "/categories/:name",
          element: <Category />,
        },
        {
          path: "/meal/:id",
          element: <Recipe />,
        },
        {
          path: "/random",
          element: <Random />,
        },
      ],
    },
  ]
  // {
  //   basename: "/foot",
  // }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
