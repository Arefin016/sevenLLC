import { DataTableDemo } from '@/components/DataTableDemo/DataTableDemo';
import EmptyOrderDetails from '@/components/EmptyOrderDetails/EmptyOrderDetails';
import Lottie from 'lottie-react';
import OrderDetails from '@/components/OrderDetails/OrderDetails';
import { OrderSummerySvg } from '@/components/SvgContainer/SvgConainer';
import { useGetOrderDetails } from '@/hooks/cms.queries';
import { useState } from 'react';
import loader from '@/components/Loader/loading-lottie.json';

const OrderHistory = () => {
  const [checkedData, setCheckedData] = useState(null);

  const { data: orderDetails, isLoading } = useGetOrderDetails(checkedData?.id);

  return (
    <section className="px-4 md:px-8">
      {checkedData ? (
        isLoading ? (
          <div className="min-h-[40vh] w-full flex items-center justify-center">
            <Lottie className="size-72" animationData={loader}></Lottie>
          </div>
        ) : (
          <OrderDetails orderDetails={orderDetails} />
        )
      ) : (
        <EmptyOrderDetails />
      )}
      {/*  */}
      <div className="pb-10 px-8 rounded-[10px] shadow-dashboardShadow bg-[#FFF] border border-[#F8F9FA] mt-8 mb-5 xmd:mb-24">
        <div className="flex gap-2 md:gap-[22px] items-center mt-[28px] mb-2 md:mb-[39px]">
          <p className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold">
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
