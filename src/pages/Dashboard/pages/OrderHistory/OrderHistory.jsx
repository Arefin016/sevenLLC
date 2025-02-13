import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import { OrderSummerySvg } from "@/components/SvgContainer/SvgConainer";
import progressPic from "../../../../assets/images/DashboardLogo/Progress.png";

const OrderHistory = () => {
  return (
    <section className="px-8">
      {/* This is then first div */}
      <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5">
        <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
          <h1 className="text-headingColor text-xl font-semibold ">
            Order Details
          </h1>
          <OrderSummerySvg />
        </div>
        {/*  */}
        <div className="mx-6 rounded-xl mb-[57px]">
          {/* This is the Product Summary */}
          <div className="rounded-lg border p-6 border-[rgba(0,15,45,0.20)] bg-[#FAFBFC] mx-4">
            {/* This is the first div */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl text-headingColor">#96459761</h1>
                <div className="flex items-center gap-6 mt-2">
                  <p className="text-navbarColor">4 Products</p>
                  <li className="text-navbarColor">
                    Order Placed in 05 Jan, 2025 at 9:48 AM
                  </li>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div>
                <h1 className="text-buttonColor text-[28px]">$1450.00</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-7">
            <h1 className="font-medium text-navbarColor">
              Order expected arrival{" "}
              <span className="text-headingColor font-medium">
                12 Jan, 2025
              </span>
            </h1>
          </div>
          {/* Progress Pic */}
          <div className="mt-7">
            <img src={progressPic} alt="" />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="pb-10 px-8 rounded-[10px] shadow-dashboardShadow bg-[#FFF] border border-[#F8F9FA] mt-8">
        <div className="flex gap-[22px] items-center mt-[28px] mb-[39px]">
          <p className="text-headingColor text-xl font-semibold">
            Product (02)
          </p>
          <OrderSummerySvg />
        </div>
        <DataTableDemo />
      </div>
    </section>
  );
};

export default OrderHistory;
