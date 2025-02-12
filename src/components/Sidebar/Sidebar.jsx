import { NavLink } from "react-router-dom";
import dashboardLogo from "../../assets/images/DashboardLogo/dashboardLogo.png";
import {
  DashboardSvg,
  OrderHistorySvg,
  PaymentHistorySvg,
  SettingsSvg,
  SignOutSvg,
} from "../SvgContainer/SvgConainer";
const Sidebar = () => {
  return (
    <section>
      <div className=" bg-[#FFF] shadow-sm h-[100vh]">
        {/* This is the dashboard logo */}
        <div className="flex justify-center mt-[47.8px] mb-[37.36px]">
          <img
            className="w-[118px] h-[89px] object-cover "
            src={dashboardLogo}
            alt=""
          />
        </div>
        <div className="px-12">
          {/* This is the dashboard */}
          <NavLink
            to="/dashboardLayout/mainDashboard"
            className={({ isActive }) =>
              `flex gap-4 items-center py-4 px-6 rounded-2xl text-[#FFF] ${
                isActive
                  ? "bg-buttonColor text-white text-lg"
                  : "bg-white text-navbarColor text-lg"
              }`
            }
          >
            <DashboardSvg />
            <span>Dashboard</span>
          </NavLink>
          {/* This is the order history */}
          <NavLink
            to="/dashboardLayout/orderHistory"
            className={({ isActive }) =>
              `flex gap-4 items-center py-4 px-6 rounded-2xl text-[#FFF] ${
                isActive
                  ? "bg-buttonColor text-white text-lg"
                  : "bg-white text-navbarColor text-lg"
              }`
            }
          >
            <OrderHistorySvg />
            <span>Order History</span>
          </NavLink>
          {/* This is the Payment History */}
          <NavLink
            to="/dashboardLayout/paymentHistory"
            className={({ isActive }) =>
              `flex gap-4 items-center py-4 px-6 rounded-2xl text-[#FFF] ${
                isActive
                  ? "bg-buttonColor text-white text-lg"
                  : "bg-white text-navbarColor text-lg"
              }`
            }
          >
            <PaymentHistorySvg />
            <span>Payment History</span>
          </NavLink>
          {/* This is the setting */}
          <NavLink
            to="/dashboardLayout/settings"
            className={({ isActive }) =>
              `flex gap-4 items-center py-4 px-6 rounded-2xl text-[#FFF] ${
                isActive
                  ? "bg-buttonColor text-white text-lg"
                  : "bg-white text-navbarColor text-lg"
              }`
            }
          >
            <SettingsSvg />
            <span>Settings</span>
          </NavLink>
          {/* This is the Sign Out */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex gap-4 items-center py-4 px-6 rounded-2xl text-[#FFF] ${
                isActive
                  ? "bg-buttonColor text-white text-lg"
                  : "bg-white text-navbarColor text-lg"
              }`
            }
          >
            <SignOutSvg />
            <span>Sign Out</span>
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Sidebar;
