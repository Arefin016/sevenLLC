import { NoResultSvg, OrderSummerySvg } from "../SvgContainer/SvgConainer";

const EmptyOrderDetails = () => {
  return (
    <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5">
      <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
        <h1 className="text-headingColor text-xl font-semibold ">
          Order Details
        </h1>
        <OrderSummerySvg />
      </div>
      {/* This is all about progress */}
      <div className="mx-6 rounded-xl mb-[57px]">
        {/* This is the Product Summary */}
        <div className="rounded-lg border p-6 border-[rgba(0,15,45,0.20)] bg-[#FAFBFC] mx-4">
          <div className="flex flex-col items-center py-5">
            <h1 className="text-headingColor text-base font-bold opacity-40">
              Nothing to Show Now
            </h1>
            <p className="text-navbarColor opacity-40">
              Please select a order from below to see the order status.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-center mt-6">
          <NoResultSvg />
          <h1 className="text-headingColor text-base font-bold opacity-40">
            No Results
          </h1>
          <p className="text-navbarColor opacity-40">
            Sorry, there are no results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyOrderDetails;
