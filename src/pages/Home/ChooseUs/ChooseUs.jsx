/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Button from "../../../components/Button/Button";
import parse from "html-react-parser";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const ChooseUs = ({ data, showBreadcrumb }) => {
  const location = useLocation();
  const parsedData =
    typeof description === "string"
      ? data?.description
      : String(data?.description);

  return (
    <section className="xl:ml-[210px] ml-0 lg:ml-5 xl:pt-[150px] mt-12 xl:mt-0">
      <div className="flex flex-col-reverse sm:flex-row lg:gap-[150px] gap-10 items-center">
        {/* First div: Title, Bullet Points, Description, and Button */}
        <div className="lg:w-1/2 w-full xmd:w-[60%] px-5 lg:px-0">
          {/* Conditionally render Breadcrumb */}
          {showBreadcrumb && <Breadcrumb location={location} />}

          <h1 className="text-headingColor lg:text-5xl text-2xl font-bold max-w-[721px] lg:leading-[67.2px]">
            {data?.title}
          </h1>

          <div className="user-descreption-wrapper mt-4 lg:leading-7">
            {parse(data?.description)}
          </div>
          {/* Button Section */}
          <Link to="/aboutUs" className="lg:mt-12 mt-7 inline-block">
            <Button text="Learn More About 777Bags" color={"bg-buttonColor"} />
          </Link>
        </div>
        {/* Second div: Image */}
        <div className="">
          <img
            className="rounded-tl-[80px] rounded-tr-none rounded-br-none rounded-bl-none xlg:max-w-[829px] xlg:h-[710px] h-auto object-cover pl-3 lg:px-0"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
            alt={data?.title}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
