import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import EmptyOrderDetails from "@/components/EmptyOrderDetails/EmptyOrderDetails";
import OrderDetails from "@/components/OrderDetails/OrderDetails";
import { OrderSummerySvg } from "@/components/SvgContainer/SvgConainer";
import { useState } from "react";

const OrderHistory = () => {
  const [checkedData, setCheckedData] = useState(null);

  return (
    <section className="px-8">
      {checkedData ? (
        <OrderDetails checkedData={checkedData} />
      ) : (
        <EmptyOrderDetails />
      )}
      {/*  */}
      <div className="pb-10 px-8 rounded-[10px] shadow-dashboardShadow bg-[#FFF] border border-[#F8F9FA] mt-8 mb-24">
        <div className="flex gap-[22px] items-center mt-[28px] mb-[39px]">
          <p className="text-headingColor text-xl font-semibold">
            Product (02)
          </p>
          <OrderSummerySvg />
        </div>
        <DataTableDemo setCheckedData={setCheckedData} />
      </div>
    </section>
  );
};

export default OrderHistory;
