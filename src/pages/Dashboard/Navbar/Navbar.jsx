import {
  DashboardSvg,
  OrderHistorySvg,
  SettingsSvg,
  SignOutSvg,
} from "../../../components/SvgContainer/SvgConainer";
import Logo from "../../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { userInfo } = useAuth();
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const currentLocation = useLocation()?.pathname;

  const sideBarRef = useRef(null);

  const dashboardSidebarNavLinks = [
    {
      path: "/dashboardLayout/mainDashboard",
      svg: DashboardSvg,
      title: "Dashboard",
    },
    {
      path: "/dashboardLayout/orderHistory",
      svg: OrderHistorySvg,
      title: "Order History",
    },
    {
      path: "/dashboardLayout/paymentHistory",
      svg: DashboardSvg,
      title: "Payment History",
    },
    {
      path: "/dashboardLayout/settings",
      svg: SettingsSvg,
      title: "Settings",
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setisSideBarOpen(false);
      }
    };

    if (isSideBarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSideBarOpen]);

  return (
    <>
      {/* Sidebar with Animation */}
      <div className="z-[500]">
        <AnimatePresence>
          {isSideBarOpen && (
            <motion.section
              className="xlg:hidden h-[100vh] w-full fixed top-0 left-0 z-[999]"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              <div
                ref={sideBarRef}
                className="fixed top-0 left-0 h-[100vh] bg-white shadow-lg px-0 w-[280px] py-8 z-[1000]"
              >
                <div className="px-5 w-full pt-20 space-y-4">
                  {/* Sidebar Links */}
                  {dashboardSidebarNavLinks.map((link) => (
                    <NavLink
                      onClick={() => setisSideBarOpen(false)}
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex gap-4 items-center max-w-[250px] py-3 px-3 rounded-2xl text-[#FFF] ${
                          isActive
                            ? "bg-buttonColor text-white text-sm"
                            : "bg-white text-navbarColor text-sm"
                        }`
                      }
                    >
                      <link.svg isActive={currentLocation === link.path} />
                      <span>{link.title}</span>
                    </NavLink>
                  ))}
                  {/* Sign Out */}
                  <NavLink
                    onClick={() => setisSideBarOpen(false)}
                    to="/"
                    className={({ isActive }) =>
                      `flex gap-4 items-center py-3 px-3 rounded-2xl text-[#FFF] ${
                        isActive
                          ? "bg-buttonColor text-white text-sm"
                          : "bg-white text-navbarColor text-sm"
                      }`
                    }
                  >
                    <SignOutSvg />
                    <span>Sign Out</span>
                  </NavLink>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navbar */}
      <section>
        <div className="w-full hidden xlg:block">
          <div className="flex w-full justify-between px-10">
            <h1 className="text-headingColor text-4xl font-semibold py-[35px]">
              Dashboard
            </h1>
            <div className="flex">
              <div className="flex gap-3 items-center">
                <img
                  className="h-[60px] w-[60px] object-cover rounded-2xl"
                  // src={dashboardHumanPic}
                  src={`${import.meta.env.VITE_SITE_URL}/${userInfo?.image}`}
                  alt=""
                />
                <div>
                  <p className="text-base text-headingColor font-semibold">
                    {userInfo?.name}
                  </p>
                  {/* <p className="text-navbarColor">Customer</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Navbar */}
      <div className="w-full xlg:hidden bg-[#fff] py-5 fixed top-0 left-0 z-[1001]">
        <div className="flex w-full items-center justify-between px-5 xlg:px-10">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="not found"
              className="h-[50px] w-[60px] object-cover"
            />
          </Link>
          {isSideBarOpen ? (
            <div
              onClick={() => setisSideBarOpen(false)}
              className="relative cursor-pointer transition-all ease-linear duration-300 w-[40px] h-[40px] flex items-center justify-center"
            >
              <div className="absolute w-[30px] h-[2px] bg-headingColor rotate-45"></div>
              <div className="absolute w-[30px] h-[2px] bg-headingColor -rotate-45"></div>
            </div>
          ) : (
            <div
              onClick={() => setisSideBarOpen(true)}
              className={` flex relative flex-col ease-linear duration-300 items-center cursor-pointer gap-y-2 justify-center px-1 h-[40px] w-[40px] border-[2px] border-solid rounded-[10px]`}
            >
              <span className="w-full h-[1px] bg-headingColor"></span>
              <span className="w-full h-[1px] bg-headingColor"></span>
              <span className="w-full h-[1px] bg-headingColor"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
