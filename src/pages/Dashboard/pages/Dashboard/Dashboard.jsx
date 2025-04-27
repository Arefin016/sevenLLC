import {
  OrderSummerySvg,
  ProductLineBorder,
} from "@/components/SvgContainer/SvgConainer";
import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import SecondTable from "./SecondTable";
import { useOrderSummery } from "@/hooks/cms.queries";

const Dashboard = () => {
  const { data: orderSummery } = useOrderSummery();
  console.log(orderSummery);

  return (
    <div className="md:px-10 px-3 mt-12 lg:mt-[55px]">
      <h1 className="text-lg sm:text-xl lg:text-4xl">
        Welcome{" "}
        <span className="text-headingColor font-semibold text-lg sm:text-xl lg:text-4xl">
          Michael!
        </span>
      </h1>
      {/*  */}
      <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-2 xxs:px-4 sm:px-4 md:px-0">
        <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
          <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
            Order Summery
          </h1>
          <OrderSummerySvg />
        </div>
        {/*  */}
        <div
          style={{
            background: "linear-gradient(107deg, #F8FEFF 0%, #FFF9F8 100%)",
          }}
          className="mx-2 md:mx-6 rounded-xl mb-[57px]"
        >
          <h1 className="text-lg lg:text-2xl text-headingColor font-semibold ml-5 md:ml-[38px] pt-[26px]">
            Product Summary
          </h1>
          {/* This is the Product Summary */}
          <div className="grid xxs:grid-cols-2 xmd:grid-cols-3 xlg:grid-cols-5 md:flex-row justify-between items-center mt-5 pb-12 xlg:ml-[38px] gap-5 px-5 xxl:px-0">
            {orderSummery?.map((product, index) => (
              <div
                key={product?.id}
                className="flex items-center justify-left gap-2 md:gap-3 w-full"
              >
                <div className="size-12">
                  {product?.images[0]?.images ? (
                    (() => {
                      const file = product.images[0].images;
                      const extension = file.split(".").pop().toLowerCase();
                      const imageExtensions = [
                        "jpg",
                        "jpeg",
                        "png",
                        "gif",
                        "webp",
                        "bmp",
                        "svg",
                      ];
                      const fileUrl = `${
                        import.meta.env.VITE_SITE_URL
                      }/${file}`;

                      if (imageExtensions.includes(extension)) {
                        return (
                          <img
                            className="h-full w-full object-cover rounded-md"
                            src={fileUrl}
                            alt="Product Image"
                          />
                        );
                      } else {
                        return (
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-full w-full bg-gray-200 text-xs text-gray-600 font-semibold rounded-md"
                          >
                            {extension.toUpperCase()}
                          </a>
                        );
                      }
                    })()
                  ) : (
                    <div className="h-full w-full bg-gray-100 flex items-center justify-center rounded-md text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="xxl:pr-[70px] space-y-3">
                  <p className="text-headingColor font-bold text-xs xxs:text-sm">
                    {product.category.name}
                  </p>
                  <p className="text-headingColor text-xs xxs:text-sm">
                    {product.item_type}
                  </p>
                </div>

                {index < orderSummery?.length - 1 && (
                  <div className="hidden xlg:block">
                    <ProductLineBorder />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* This is the product table div */}
      <div className="pb-10 px-8 rounded-[10px] shadow-dashboardShadow bg-[#FFF] border border-[#F8F9FA] mt-8">
        <div className="flex gap-[22px] items-center mt-[28px] mb-[39px]">
          <p className="text-headingColor text-xl font-semibold">
            Product (02)
          </p>
          <OrderSummerySvg />
        </div>
        <DataTableDemo />
      </div>
      {/* This is thr third div */}
      <div className="my-8 ">
        <SecondTable />
      </div>
    </div>
  );
};

export default Dashboard;
