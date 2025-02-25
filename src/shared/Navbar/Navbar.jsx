import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Space } from "antd";
import profileImage from "../../assets/images/profile-image.png";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  AllCategoriesSvg,
  MenuDropdownSvg,
  SearchBarSvg,
  SearchBarSvgTwo,
  Line,
  LoginUserSvg,
} from "../../components/SvgContainer/SvgConainer";
import useAuth from "@/hooks/useAuth";
import { useLogout } from "@/hooks/auth.mutations";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Industry
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Material
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Function
      </a>
    ),
  },
];

const menuItems = [
  { name: "About Us", link: "/aboutUs" },
  { name: "Products & Services", link: "/productServices" },
  { name: "Dashboard", link: "/dashboardLayout/mainDashboard" },
  { name: "Order Requests", link: "/orderForms" },
  { name: "Blog", link: "/blogArticles" },
  { name: "Contact Us", link: "/contactUs" },
  { name: "Log out", link: "/" },
];

const Navbar = () => {
  const { token, user } = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  const { mutate: logOutMutation } = useLogout();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //handlers:
  const handleLogout = () => {
    setShowMenu(false);
    logOutMutation();
  };

  const sideBarRef = useRef(null);
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

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

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isSideBarOpen]);

  return (
    <nav className=" border-b border-gray-300 xlg:h-[164px] fixed w-full left-0 top-0 bg-white z-50 topbar">
      <div className="container mx-auto">
        {/* desktop navbar */}
        <div className="xlg:flex hidden justify-between px-10 xxl:bg-px-0 items-center pt-4">
          {/* logo */}
          <div className="max-w-[113px] h-[86px]">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* Search */}
          <div className="border border-navbarColor rounded-3xl max-w-[593px] py-1 px-1">
            <div className="flex justify-between gap-32 items-center">
              <div>
                <input
                  className="focus:outline-none border-none text-sm py-[10px] ml-4"
                  type="text"
                  placeholder="Search for products..."
                />
              </div>

              <div className="flex items-center justify-center pr-[3px]">
                {/* This is line section */}
                <Line />
                {/* This is the all categories */}
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="text-sm text-navbarColor">
                      All Categories
                      <AllCategoriesSvg />
                    </Space>
                  </a>
                </Dropdown>
                {/* This is the searchbar categories */}
                <button className="w-[77px] rounded-[20px] bg-buttonColor h-[35px] ml-4">
                  <SearchBarSvg />
                </button>
              </div>
            </div>
          </div>
          {/* This is the third row */}

          {token ? (
            // user info
            <div ref={menuRef} className="relative font-poppins">
              <div
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="size-12 ">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    // src={`${import.meta.env.VITE_SITE_URL}/${user?.image}`}
                    src={profileImage}
                    alt=""
                  />
                </div>
                {/* name */}
                <p className="font-poppins font-semibold text-navbarColor">
                  {user?.first_name + " " + user?.last_name}
                </p>

                <MenuDropdownSvg />
              </div>

              {/* submenu*/}
              <div
                className={`absolute shadow-lg mt-2 transition-all duration-300 top-full left-0 w-full bg-buttonColor px-6 py-6 rounded-lg ${
                  showMenu
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <ul className="space-y-2 font-bold">
                  <li
                    onClick={() => setShowMenu(false)}
                    className=" border-b border-white pb-2 text-white cursor-pointer hover:text-[#173F93] transition-all duration-300"
                  >
                    <Link to="/dashboardLayout/settings">My Account</Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="text-white hover:text-[#173F93] transition-all duration-300 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              {/* login */}
              <Link
                to="/login"
                className="flex gap-1 items-center mr-5 text-navbarColor font-semibold"
              >
                <LoginUserSvg />
                Log in
              </Link>
              <Link to={"/signUp"}>
                <button className="text-sm font-semibold border-[2px] border-solid border-buttonColor text-buttonColor px-6 py-2 rounded-[26px]  hover:border-buttonColor hover:text-[#FFF] hover:bg-buttonColor ease-in-out duration-150">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* mobile navbar  */}
        <div className="flex xlg:hidden justify-between items-center px-2 lg:px-5 my-4">
          {/* logo */}
          <Link to={"/"}>
            <img
              src={logo}
              alt="not found"
              className="h-[50px] w-[60px] object-cover "
            />
          </Link>
          {/* Hamburger Menu */}
          {!isSideBarOpen && (
            <div
              onClick={() => setisSideBarOpen(true)}
              className="flex relative flex-col ease-linear duration-300 items-center cursor-pointer gap-y-2 justify-center px-1 h-[40px] w-[40px] border-[2px] border-solid rounded-[10px] hover:bg-gray-100 transition-all"
            >
              <span className="w-full h-[1px] bg-headingColor transition-transform duration-300"></span>
              <span className="w-full h-[1px] bg-headingColor transition-transform duration-300"></span>
              <span className="w-full h-[1px] bg-headingColor transition-transform duration-300"></span>
            </div>
          )}
          <AnimatePresence>
            {isSideBarOpen && (
              <motion.div
                ref={sideBarRef}
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                className="absolute w-[280px] bg-white z-[999] border-r-[1px] border-solid top-0 left-0 flex flex-col gap-y-5 h-[100vh]"
              >
                <div className="flex w-full items-center pt-5 justify-between px-5 xlg:px-10">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-[50px] w-[60px] object-cover"
                  />
                  {/* Close Button */}
                  <div
                    onClick={() => setisSideBarOpen(false)}
                    className="relative cursor-pointer transition-all ease-linear duration-300 w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 rounded-full"
                  >
                    <div className="absolute w-[30px] h-[2px] bg-headingColor rotate-45 transition-transform duration-300"></div>
                    <div className="absolute w-[30px] h-[2px] bg-headingColor -rotate-45 transition-transform duration-300"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 px-5">
                  <div className="border border-navbarColor rounded-2xl mt-4 py-1 px-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <input
                          className="focus:outline-none border-none text-xs pl-[15px] py-[10px]"
                          type="text"
                          placeholder="Search for products..."
                        />
                      </div>
                      <div className="flex items-center justify-center pr-[3px]">
                        <Line />
                        <button className="w-[35px] flex items-center justify-center rounded-[12px] bg-buttonColor h-[35px] hover:bg-buttonColorDark transition-colors duration-300">
                          <SearchBarSvgTwo />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Dropdown
                    className=""
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className="text-sm text-navbarColor font-semibold">
                        All Categories
                        <AllCategoriesSvg />
                      </Space>
                    </a>
                  </Dropdown>
                  <div className="flex flex-col gap-y-5 justify-center">
                    {/*  */}
                    <ul className="flex flex-col gap-y-5 flex-wrap">
                      {menuItems.map((item) => (
                        <li key={item.name} className="text-[14px] text-start">
                          {item.name === "Log out" ? (
                            <button
                              onClick={handleLogout}
                              className="text-navbarColor font-medium hover:text-buttonColor"
                            >
                              {item.name}
                            </button>
                          ) : (
                            <NavLink
                              to={item.link}
                              className={({ isActive }) =>
                                isActive
                                  ? "text-buttonColor font-medium hover:text-buttonColor"
                                  : "text-navbarColor font-medium hover:text-buttonColor"
                              }
                            >
                              {item.name}
                            </NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Link to={"/signUp"}>
                        <button className="text-sm font-semibold border-[2px] border-solid border-buttonColor text-buttonColor px-6 py-2 rounded-[15px] hover:border-buttonColor hover:text-[#FFF] hover:bg-buttonColor ease-in-out duration-150">
                          Sign up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* This is the navigation section */}
        <div>
          <div className="bg-white hidden xlg:block py-4">
            <ul className="flex  gap-y-2 lg:gap-y-0 lg:gap-2  flex-wrap items-center md:justify-center">
              {menuItems.map((item, index) => {
                if (item.name === "Log out") return;
                return (
                  <React.Fragment key={index}>
                    <li className=" text-[14px] xlg:text-lg  px-2 lg:px-3">
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          isActive
                            ? "text-buttonColor font-medium hover:text-buttonColor"
                            : "text-navbarColor font-medium hover:text-buttonColor"
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                    {index < menuItems.length - 2 && (
                      <span className=" h-[15px] xlg:h-[29px] w-[1px] bg-[#616161] "></span>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
