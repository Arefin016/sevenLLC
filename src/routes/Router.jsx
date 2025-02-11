import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ProductServices from "../pages/ProductServices/ProductServices";
import BlogArticles from "../pages/BlogArticles/BlogArticles";
import BlogDetailsPage from "../pages/BlogArticles/BlogDetailsPage";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/LogIn/Login";
import ForgetPasswordPage from "../pages/ForgetPasswordPage/ForgetPasswordPage";
import CodePage from "../pages/CodePage/CodePage";
import ProductGuidePage from "../pages/ProductGuidePage/ProductGuidePage";
import TermsConditions from "../pages/TermsConditions/TermsConditions";

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
      {
        path: "/blogArticles/:slug",
        element: <BlogDetailsPage />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPasswordPage />,
      },
      {
        path: "/enterCodePage",
        element: <CodePage />,
      },
      {
        path: "/productGuidePage",
        element: <ProductGuidePage />,
      },
      {
        path: "/terms",
        element: <TermsConditions />,
      },
    ],
  },
]);
