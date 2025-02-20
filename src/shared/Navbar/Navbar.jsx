import React from 'react';
import { Dropdown, Space } from 'antd';

import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {
  AllCategoriesSvg,
  SearchBarSvg,
} from '../../components/SvgContainer/SvgConainer';

const items = [
  {
    key: '1',
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
    key: '2',
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
    key: '3',
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
  { name: 'About Us', link: '/aboutUs' },
  { name: 'Products & Services', link: '/productServices' },
  { name: 'Dashboard', link: '/dashboardLayout/mainDashboard' },
  { name: 'Order Requests', link: '/orderForms' },
  { name: 'Blog', link: '/blogArticles' },
  { name: 'Contact Us', link: '/contactUs' },
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
            <Link to={'/'}>
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
          <div className="flex items-center justify-center">
            {/* login */}
            <Link
              to="/login"
              className="flex gap-1 items-center mr-5 text-navbarColor font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1875 9.37819C10.1875 6.44457 12.566 4.06641 15.5 4.06641C18.434 4.06641 20.8125 6.44457 20.8125 9.37819C20.8125 12.3118 18.434 14.69 15.5 14.69C12.566 14.69 10.1875 12.3118 10.1875 9.37819ZM15.5 5.94115C13.6015 5.94115 12.0625 7.47997 12.0625 9.37819C12.0625 11.2764 13.6015 12.8152 15.5 12.8152C17.3985 12.8152 18.9375 11.2764 18.9375 9.37819C18.9375 7.47997 17.3985 5.94115 15.5 5.94115Z"
                  fill="#616161"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 18.4395C8.9467 18.4395 7.6875 19.6985 7.6875 21.2516V22.7367C7.6875 22.7593 7.70389 22.7786 7.72621 22.7823C12.8747 23.6227 18.1253 23.6227 23.2738 22.7823C23.2961 22.7786 23.3125 22.7593 23.3125 22.7367V21.2516C23.3125 19.6985 22.0533 18.4395 20.5 18.4395H20.0739C20.041 18.4395 20.0082 18.4447 19.9769 18.4549L18.895 18.8081C16.689 19.5284 14.311 19.5284 12.105 18.8081L11.0231 18.4549C10.9918 18.4447 10.959 18.4395 10.9261 18.4395H10.5ZM5.8125 21.2516C5.8125 18.6631 7.91116 16.5647 10.5 16.5647H10.9261C11.1567 16.5647 11.3859 16.6012 11.6051 16.6727L12.687 17.026C14.5148 17.6227 16.4852 17.6227 18.313 17.026L19.3949 16.6727C19.6141 16.6012 19.8433 16.5647 20.0739 16.5647H20.5C23.0888 16.5647 25.1875 18.6631 25.1875 21.2516V22.7367C25.1875 23.6781 24.5051 24.4808 23.5759 24.6325C18.2274 25.5056 12.7726 25.5056 7.42409 24.6325C6.49485 24.4808 5.8125 23.6781 5.8125 22.7367V21.2516Z"
                  fill="#616161"
                />
              </svg>
              Log in
            </Link>
            <div>
              <Link to={'/signUp'}>
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
                  <li className="text-lg py-2 px-3">
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-buttonColor font-medium hover:text-buttonColor'
                          : 'text-navbarColor font-medium hover:text-buttonColor'
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
