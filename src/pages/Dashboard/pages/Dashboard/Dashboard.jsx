import React from "react";
import {
  OrderSummerySvg,
  ProductLineBorder,
} from "../../../../components/SvgContainer/SvgConainer";

import productSummeryPic1 from "../../../../assets/images/productSummery/productSummeryPic.png";
import productSummeryPic2 from "../../../../assets/images/productSummery/productSummeryPic2.png";
import productSummeryPic3 from "../../../../assets/images/productSummery/productSummeryPic3.png";
import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
import SecondTable from "./SecondTable";

const Dashboard = () => {
  const productSummaries = [
    {
      img: productSummeryPic1,
      category: "Paper Packaging",
      name: "Bakery Boxes",
    },
    {
      img: productSummeryPic2,
      category: "Glass Packaging",
      name: "Flower Jars",
    },
    {
      img: productSummeryPic3,
      category: "Eco-Friendly Packaging",
      name: "Bamboo-Topped Jars",
    },
    {
      img: productSummeryPic1,
      category: "Eco-Friendly Packaging",
      name: "Bamboo-Topped Jars",
    },
    {
      img: productSummeryPic1,
      category: "Eco-Friendly Packaging",
      name: "Bamboo-Topped Jars",
    },
  ];

  return (
    <section className="">
      <div className="px-10 pt-[55px] pb-[21px] ">
        <h1 className="text-4xl">
          Welcome{" "}
          <span className="text-headingColor font-semibold text-4xl">
            Michael!
          </span>
        </h1>
        {/*  */}
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-xl font-semibold ">
              Order Summery
            </h1>
            <OrderSummerySvg />
          </div>
          {/*  */}
          <div
            style={{
              background: "linear-gradient(107deg, #F8FEFF 0%, #FFF9F8 100%)",
            }}
            className="mx-6 rounded-xl mb-[57px]"
          >
            <h1 className="text-2xl text-headingColor font-semibold ml-[38px] pt-[26px]">
              Product Summary
            </h1>
            {/* This is the Product Summary */}
            <div className="flex gap-6 items-center mt-5 pb-12 ml-[38px]">
              {productSummaries?.map((product, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={product.img} alt={product.category} />
                  <div className="pr-3">
                    <p className="text-headingColor font-bold">
                      {product.category}
                    </p>
                    <p className="text-headingColor">{product.name}</p>
                  </div>
                  {index < productSummaries.length - 1 && <ProductLineBorder />}
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
        <div className="my-8">
          <SecondTable />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
