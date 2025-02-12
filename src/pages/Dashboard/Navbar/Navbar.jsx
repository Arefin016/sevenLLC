import { Dropdown, Space } from "antd";
import {
  WorldIconSvg,
  WorldSvg,
} from "../../../components/SvgContainer/SvgConainer";
import dashboardHumanPic from "../../../assets/images/DashboardLogo/dashboardHumanPic.png";

const Navbar = () => {
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
  return (
    <section>
      <div className="">
        <div className="flex justify-between px-11 bg-[#FFF]">
          <h1 className="text-headingColor text-4xl font-semibold py-[35px]">
            Dashboard
          </h1>
          {/* This is the right side */}
          <div className="flex">
            <div className="flex justify-center gap-2 items-center mr-10">
              <WorldSvg />
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="font-raleway text-navbarColor text-base font-bold mt-1">
                    EN
                    <WorldIconSvg />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="flex gap-3 items-center">
              <img
                className="h-[60px] w-[60px] object-cover"
                src={dashboardHumanPic}
                alt=""
              />
              <div>
                <p className="text-base text-headingColor font-semibold">
                  Michael
                </p>
                <p className="text-navbarColor">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
