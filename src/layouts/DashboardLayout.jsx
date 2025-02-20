import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../pages/Dashboard/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div
    //  className="flex max-h-screen overflow-hidden"
    >
      <div
      //  className="w-[345px]"
      >
        {/* <Sidebar /> */}
      </div>
      <div
      //  className="w-[calc(100%-345px)] min-h-screen flex flex-col"
      >
        <div
        //  className="bg-[#FFF] h-[120px]"
        >
          {/* <Navbar /> */}
        </div>
        <div
        //  className="flex-1 overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
