import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ProductServices from "../pages/ProductServices/ProductServices";
import BlogArticles from "../pages/BlogArticles/BlogArticles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/productServices",
        element: <ProductServices />,
      },
      {
        path: "/blogArticles",
        element: <BlogArticles />,
      },
    ],
  },
]);
