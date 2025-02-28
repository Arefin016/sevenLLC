/* eslint-disable react/prop-types */
import { MdCheck } from 'react-icons/md';
import {
  DeliveredSvg,
  OnTheRoadSvg,
  OrderPlacedSvg,
  OrderSummerySvg,
  PackagingSvg,
} from '../SvgContainer/SvgConainer';
import { useGetOrderDetails } from '@/hooks/cms.queries';

const OrderDetails = ({ checkedData }) => {
  const { data: orderDetails } = useGetOrderDetails(checkedData?.id);

  return (
    <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-10 xmd:mt-5">
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
          {/* This is the first div */}
          <div className="flex flex-col md:flex-row gap-5 xmd:gap-0 text-center md:text-left justify-between items-center">
            <div>
              <h1 className="text-base md:text-xl text-headingColor">
                #{orderDetails?.order_number}
              </h1>
              <div className="flex flex-col justify-center md:flex-row items-center gap-1 md:gap-6 mt-2">
                <p className="text-navbarColor">
                  {orderDetails?.quantity} Products
                </p>
                <li className="text-navbarColor text-sm md:text-base">
                  {orderDetails?.created_at}
                </li>
              </div>
            </div>
            {/*  */}
            <div>
              <h1 className="text-buttonColor text-base md:text-[28px]">${}</h1>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-7">
          <h1 className="font-medium text-navbarColor">
            Order expected arrival{' '}
            <span className="text-headingColor font-medium">12 Jan, 2025</span>
          </h1>
        </div>
        {/* This is the progress style */}
        <div className="grid grid-cols-4 max-w-[893px] mt-10 ml-8 md:ml-[107px]">
          {['confirmed', 'processing', 'shipped', 'delivered'].map(
            (status, index, arr) => {
              const isActive = orderDetails?.status === status;
              const isCompleted =
                ['processing', 'shipped', 'delivered'].includes(
                  orderDetails?.status
                ) &&
                index <
                  ['confirmed', 'processing', 'shipped', 'delivered'].indexOf(
                    orderDetails?.status
                  );

              return (
                <div
                  key={status}
                  className={`relative h-2 ${
                    isActive || isCompleted
                      ? 'bg-buttonColor'
                      : 'bg-[rgba(0,_15,_45,_0.20)]'
                  } ${index === arr.length - 1 ? 'w-0' : 'w-full'}`} // Removes extra width from the last step
                >
                  {/* Step Circle */}
                  <span
                    className={`w-6 h-6 rounded-full absolute -left-3 -top-2 grid place-items-center
            ${
              isActive || isCompleted
                ? 'bg-buttonColor text-white'
                : 'bg-gray-300 border border-buttonColor'
            }`}
                  >
                    {(isActive || isCompleted) && (
                      <MdCheck className="text-xl" />
                    )}
                  </span>
                </div>
              );
            }
          )}
        </div>

        {/* Progress text */}
        <div className="mt-7 flex gap-2 sm:gap-9 md:gap-[50px] xmd:gap-[100px] lg:gap-[150px]  md:ml-[60px]">
          {/* This is the Order Placed */}
          <div className="flex flex-col items-center gap-y-3">
            <OrderPlacedSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              Order Placed
            </h1>
          </div>
          {/* This is the packaging */}
          <div className="flex flex-col items-center gap-y-3">
            <PackagingSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              Packaging
            </h1>
          </div>
          {/* This is the on the road */}
          <div className="flex flex-col items-center gap-y-3">
            <OnTheRoadSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              On The Road
            </h1>
          </div>
          {/* This is the Delivered */}
          <div className="flex flex-col items-center gap-y-3">
            <DeliveredSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              Delivered
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
