import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import EducationDetail from "./components/EducationDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
        index: true,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/education/:id",
        element: <EducationDetail />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
