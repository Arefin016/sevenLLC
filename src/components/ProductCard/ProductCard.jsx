/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const ProductCard = ({ data }) => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          className={`flex flex-col-reverse md:flex-row items-center xl:gap-[177px] gap-0 md:gap-6 lg:gap-[70px] ${
            data?.reverse === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Content Section */}
          <div className="xl:w-1/2 md:w-1/2 lg:w-full flex flex-col text-left mt-10 xl:mt-0">
            <h2 className="text-headingColor xl:text-[32px] text-xl font-bold">
              {data?.title}
            </h2>
            <span className="text-buttonColor text-lg mt-7">Products:</span>
            <p className="user-descreption-wrapper mt-5">
              {parse(data?.description)}
            </p>
            <div className="mt-12">
              <Link to={"/productGuidePage"}>
                <Button
                  text={"Explore Cannabis Packaging"}
                  color={"bg-buttonColor"}
                />
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="bg-buttonColor xl:rounded-[70px] rounded-[30px] xl:w-[694px] w-[300px] xxs:w-[400px] xl:h-[580px] h-[300px] xxs:h-[400px] relative md:w-[380px] md:h-[380px]">
              <img
                className={`absolute xl:w-[694px] w-[350px] md:w-[380px] xxs:w-[400px] xl:h-[580px] md:h-[380px] xl:top-[-25px] top-[-15px] object-cover xl:rounded-[70px] rounded-[30px] overflow-hidden transition-all duration-300 hover:scale-105  ${
                  data?.reverse == "left" ? "xl:right-[25px]" : "xl:left-[25px]"
                } `}
                src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
                alt="Product"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
