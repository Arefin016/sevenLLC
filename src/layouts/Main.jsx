import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Loader/Loader";

const Main = () => {
  const location = useLocation();
  const { customLoading, isLoadingUserData, isFetchingUserData } = useAuth();

  const isSignUpPage =
    location.pathname === "/signUp" ||
    location.pathname === "/login" ||
    location.pathname === "/forgetPassword" ||
    location.pathname === "/enterCodePage" ||
    location.pathname === "/resetPassword";

  if (isLoadingUserData || isFetchingUserData) return <Loader />;

  return (
    <div>
      <ScrollRestoration />
      {!isSignUpPage && <Navbar />}
      {customLoading ? (
        <Loader />
      ) : (
        <div
          className={`${
            !isSignUpPage ? "lg:mt-[145px] mt-32 xl:mt-[164px]" : ""
          } `}
        >
          <Outlet />
        </div>
      )}
      {!isSignUpPage && <Footer />}
    </div>
  );
};

export default Main;
