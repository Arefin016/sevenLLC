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
    <section className="xl:ml-[210px] ml-0 lg:ml-5 lg:pt-[120px] xl:pt-[150px] mt-12 xl:mt-0">
      <div className="flex flex-col-reverse sm:flex-row xl:gap-[150px] gap-10 items-center px-4 md:px-7 xl:px-8 xxl:px-0">
        {/* First div: Title, Bullet Points, Description, and Button */}
        <div className="xl:w-1/2 w-full lg:w-1/2 px-5 lg:px-0">
          {/* Conditionally render Breadcrumb */}
          {showBreadcrumb && <Breadcrumb location={location} />}

          <h1 className="text-headingColor lg:text-5xl text-2xl md:text-3xl lg:text-4xl font-bold max-w-[721px] lg:leading-[67.2px]">
            {data?.title}
          </h1>

          <div className="user-descreption-wrapper mt-4">
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
            className="lg:rounded-tl-[80px] rounded-tl-[40px] rounded-tr-none rounded-br-none rounded-bl-none xl:max-w-[829px] lg:h-[710px]  object-cover pl-3 px-[10px] lg:px-0"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
            alt={data?.title}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
