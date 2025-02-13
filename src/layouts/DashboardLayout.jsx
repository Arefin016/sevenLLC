import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../pages/Dashboard/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen max-h-screen flex overflow-hidden">
      <div className="min-h-screen max-h-screen w-[345px] border border-red-50">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-345px)] min-h-screen max-h-screen">
        <div className="bg-[#FFF] h-[120px]">
          <Navbar />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-110px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
