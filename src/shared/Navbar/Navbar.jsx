import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const menuItems = [
  { name: "About Us", link: "/aboutUs" },
  { name: "Products & Services", link: "/products" },
  { name: "Quote Request", link: "/quote" },
  { name: "Order Requests", link: "/orders" },
  { name: "Blog", link: "/blog" },
  { name: "Contact Us", link: "/contact" },
];

const Divider = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2"
    height="30"
    viewBox="0 0 2 30"
    fill="none"
  >
    <path d="M1 0.5V29.5" stroke="#616161" />
  </svg>
);

const Navbar = () => {
  return (
    <nav className=" border-b border-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="24"
                  viewBox="0 0 1 24"
                  fill="none"
                  className="mr-3"
                >
                  <path
                    d="M0.5 0.3125V23.8093"
                    stroke="#616161"
                    strokeWidth="0.6"
                  />
                </svg>
                {/* This is the all categories */}
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="text-sm text-navbarColor">
                      All Categories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M17.4958 9.47829C17.3084 9.29204 17.055 9.1875 16.7908 9.1875C16.5266 9.1875 16.2732 9.29204 16.0858 9.47829L12.4958 13.0183L8.9558 9.47829C8.76844 9.29204 8.51498 9.1875 8.2508 9.1875C7.98661 9.1875 7.73316 9.29204 7.5458 9.47829C7.45207 9.57126 7.37768 9.68186 7.32691 9.80372C7.27614 9.92557 7.25 10.0563 7.25 10.1883C7.25 10.3203 7.27614 10.451 7.32691 10.5729C7.37768 10.6947 7.45207 10.8053 7.5458 10.8983L11.7858 15.1383C11.8788 15.232 11.9894 15.3064 12.1112 15.3572C12.2331 15.408 12.3638 15.4341 12.4958 15.4341C12.6278 15.4341 12.7585 15.408 12.8804 15.3572C13.0022 15.3064 13.1128 15.232 13.2058 15.1383L17.4958 10.8983C17.5895 10.8053 17.6639 10.6947 17.7147 10.5729C17.7655 10.451 17.7916 10.3203 17.7916 10.1883C17.7916 10.0563 17.7655 9.92557 17.7147 9.80372C17.6639 9.68186 17.5895 9.57126 17.4958 9.47829Z"
                          fill="#616161"
                        />
                      </svg>
                    </Space>
                  </a>
                </Dropdown>
                {/* This is the searchbar categories */}
                <button className="w-[77px] rounded-[20px] bg-buttonColor h-[35px] ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    className="flex items-center ml-6"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8854 15.4483C12.2351 17.5707 8.35569 17.4036 5.8989 14.9472C3.26287 12.3115 3.26287 8.03823 5.8989 5.40254C8.53494 2.76686 12.8088 2.76686 15.4448 5.40254C17.9016 7.85899 18.0687 11.7379 15.946 14.3878L21.1017 19.5427C21.3946 19.8356 21.3946 20.3104 21.1017 20.6033C20.8088 20.8961 20.3339 20.8961 20.041 20.6033L14.8854 15.4483ZM6.95956 13.8867C4.90931 11.8367 4.90931 8.51304 6.95956 6.46306C9.00982 4.41308 12.3339 4.41308 14.3842 6.46306C16.4329 8.51153 16.4344 11.8318 14.3887 13.8822C14.3872 13.8836 14.3857 13.8851 14.3842 13.8867C14.3827 13.8882 14.3812 13.8897 14.3797 13.8912C12.3291 15.9367 9.00831 15.9351 6.95956 13.8867Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* This is the third row */}
          <div className="flex items-center justify-center">
            <div className="flex justify-center gap-2 items-center mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clip-path="url(#clip0_16616_624)">
                  <path
                    d="M12.5 0C5.8835 0 0.5 5.3835 0.5 12C0.5 18.6165 5.8835 24 12.5 24C19.1165 24 24.5 18.6165 24.5 12C24.5 5.3835 19.1165 0 12.5 0ZM20.996 5.8545C19.703 6.3675 18.374 6.774 17.0105 7.041C16.42 5.09553 15.4846 3.27204 14.249 1.6575C17.015 2.1255 19.412 3.672 20.996 5.8545ZM15.896 15.27C13.642 14.961 11.3565 14.961 9.1025 15.27C8.64026 13.1181 8.63924 10.8928 9.0995 8.7405C10.2185 8.8935 11.3495 9 12.5 9C13.6505 9 14.78 8.8935 15.899 8.7405C16.3593 10.8928 16.3582 13.1181 15.896 15.27ZM15.5075 7.2735C13.5103 7.5315 11.4882 7.5315 9.491 7.2735C10.106 5.3445 11.111 3.516 12.5 1.896C13.889 3.516 14.8925 5.3445 15.5075 7.2735ZM10.748 1.6575C9.485 3.309 8.567 5.1345 7.988 7.041C6.626 6.774 5.297 6.3675 4.004 5.8545C5.5865 3.672 7.9835 2.1255 10.748 1.6575ZM2 12C2 10.251 2.4365 8.604 3.1955 7.152C4.6295 7.7415 6.101 8.205 7.6145 8.5095C7.13274 10.8157 7.13326 13.1965 7.616 15.5025C6.104 15.804 4.6265 16.2645 3.1955 16.8525C2.4365 15.3975 2 13.7505 2 12ZM4.004 18.1455C5.297 17.6325 6.626 17.226 7.988 16.959C8.57849 18.9045 9.51387 20.728 10.7495 22.3425C7.9835 21.8745 5.5865 20.328 4.004 18.1455ZM9.4925 16.7265C11.4892 16.4685 13.5108 16.4685 15.5075 16.7265C14.8925 18.6555 13.8875 20.484 12.5 22.104C11.111 20.484 10.1075 18.6555 9.4925 16.7265ZM14.249 22.3425C15.4846 20.728 16.42 18.9045 17.0105 16.959C18.3725 17.226 19.703 17.634 20.996 18.1455C19.412 20.328 17.015 21.8745 14.249 22.3425ZM17.3825 15.4995C17.8655 13.194 17.867 10.8135 17.384 8.508C18.8975 8.2035 20.3705 7.7415 21.8045 7.1505C22.5635 8.604 23 10.251 23 12C23 13.7505 22.5635 15.3975 21.8045 16.8495C20.3735 16.263 18.896 15.8025 17.3825 15.4995Z"
                    fill="#616161"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16616_624">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a>
                  <Space className="font-raleway text-navbarColor text-base font-bold mt-1">
                    EN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M17.4958 9.47829C17.3084 9.29204 17.055 9.1875 16.7908 9.1875C16.5266 9.1875 16.2732 9.29204 16.0858 9.47829L12.4958 13.0183L8.9558 9.47829C8.76844 9.29204 8.51498 9.1875 8.2508 9.1875C7.98661 9.1875 7.73316 9.29204 7.5458 9.47829C7.45207 9.57126 7.37768 9.68186 7.32691 9.80372C7.27614 9.92557 7.25 10.0563 7.25 10.1883C7.25 10.3203 7.27614 10.451 7.32691 10.5729C7.37768 10.6947 7.45207 10.8053 7.5458 10.8983L11.7858 15.1383C11.8788 15.232 11.9894 15.3064 12.1112 15.3572C12.2331 15.408 12.3638 15.4341 12.4958 15.4341C12.6278 15.4341 12.7585 15.408 12.8804 15.3572C13.0022 15.3064 13.1128 15.232 13.2058 15.1383L17.4958 10.8983C17.5895 10.8053 17.6639 10.6947 17.7147 10.5729C17.7655 10.451 17.7916 10.3203 17.7916 10.1883C17.7916 10.0563 17.7655 9.92557 17.7147 9.80372C17.6639 9.68186 17.5895 9.57126 17.4958 9.47829Z"
                        fill="#616161"
                      />
                    </svg>
                  </Space>
                </a>
              </Dropdown>
            </div>
            {/* login */}
            <div className="flex gap-1 items-center mr-5 text-navbarColor font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1875 9.37819C10.1875 6.44457 12.566 4.06641 15.5 4.06641C18.434 4.06641 20.8125 6.44457 20.8125 9.37819C20.8125 12.3118 18.434 14.69 15.5 14.69C12.566 14.69 10.1875 12.3118 10.1875 9.37819ZM15.5 5.94115C13.6015 5.94115 12.0625 7.47997 12.0625 9.37819C12.0625 11.2764 13.6015 12.8152 15.5 12.8152C17.3985 12.8152 18.9375 11.2764 18.9375 9.37819C18.9375 7.47997 17.3985 5.94115 15.5 5.94115Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 18.4395C8.9467 18.4395 7.6875 19.6985 7.6875 21.2516V22.7367C7.6875 22.7593 7.70389 22.7786 7.72621 22.7823C12.8747 23.6227 18.1253 23.6227 23.2738 22.7823C23.2961 22.7786 23.3125 22.7593 23.3125 22.7367V21.2516C23.3125 19.6985 22.0533 18.4395 20.5 18.4395H20.0739C20.041 18.4395 20.0082 18.4447 19.9769 18.4549L18.895 18.8081C16.689 19.5284 14.311 19.5284 12.105 18.8081L11.0231 18.4549C10.9918 18.4447 10.959 18.4395 10.9261 18.4395H10.5ZM5.8125 21.2516C5.8125 18.6631 7.91116 16.5647 10.5 16.5647H10.9261C11.1567 16.5647 11.3859 16.6012 11.6051 16.6727L12.687 17.026C14.5148 17.6227 16.4852 17.6227 18.313 17.026L19.3949 16.6727C19.6141 16.6012 19.8433 16.5647 20.0739 16.5647H20.5C23.0888 16.5647 25.1875 18.6631 25.1875 21.2516V22.7367C25.1875 23.6781 24.5051 24.4808 23.5759 24.6325C18.2274 25.5056 12.7726 25.5056 7.42409 24.6325C6.49485 24.4808 5.8125 23.6781 5.8125 22.7367V21.2516Z"
                  fill="#616161"
                />
              </svg>
              Log in
            </div>
            <div>
              <Link to={"/"}>
                <button className="text-sm font-semibold border-[2px] border-solid border-buttonColor text-buttonColor px-6 py-2 rounded-[26px]  hover:border-buttonColor hover:text-[#FFF] hover:bg-buttonColor ease-in-out duration-150">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* This is the navigation section */}
        <div>
          <div className="bg-white py-4">
            <ul className="flex gap-8 items-center justify-center">
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="text-lg  py-2 px-3">
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
                  {index < menuItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
