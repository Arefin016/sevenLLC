/* eslint-disable react/prop-types */
import {
  BorderSvg,
  DateSvg,
  HumanSvg,
  LineSvg,
  SubjectSvg,
} from "../SvgContainer/SvgConainer";
import reviewTag from "@/assets/images/reviewSection.png";
import parse from "html-react-parser";

const BlogDetailsSection = ({ data }) => {
  return (
    <div className="xl:w-[70%] lg:w-full">
      <div className="overflow-hidden rounded-2xl xl:w-[972px] w-full px-6 lg:px-[38px] xl:px-0">
        <img
          className="xl:w-[972px] w-full xl:h-[596px] md:h-[300px] rounded-2xl object-cover block lg:transition-all lg:duration-300 lg:hover:scale-105"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt=""
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full xl:max-w-[953px] lg:max-w-[900px] xl:w-full lg:gap-4 xl:gap-16 gap-5 md:gap-14 mt-7 px-6 lg:px-0 xl:px-0 ml-0 lg:ml-8 xl:ml-0">
        {/* This is the date div */}
        <div className="flex gap-3 items-center">
          <DateSvg />
          <div>
            <h1 className="text-buttonColor font-semibold text-sm">DATE:</h1>
            <p className="text-navbarColor text-base">{data?.created_date}</p>
          </div>
          <div className="hidden xl:block ml-16">
            <LineSvg />
          </div>
        </div>
        {/* This is the human div */}
        <div className="flex gap-3 items-center">
          <HumanSvg />
          <div>
            <h1 className="text-buttonColor font-semibold text-sm">
              AUTHOR NAME
            </h1>
            <p className="text-navbarColor text-base">{data?.author_name}</p>
          </div>
          <div className="hidden xl:block ml-16">
            <LineSvg />
          </div>
        </div>
        {/* This is the subject div */}
        <div className="flex gap-3 items-center">
          <SubjectSvg />
          <div>
            <h1 className="text-buttonColor font-semibold text-sm">SUBJECT</h1>
            <p className="text-navbarColor text-base">{data?.subject}</p>
          </div>
        </div>
      </div>
      {/* This is the border line */}
      <div className="mt-7 px-6 lg:px-6 xl:px-0">
        <BorderSvg />
      </div>
      {/* This is the title section */}
      <div className="px-6 xl:px-0">
        <h1 className="mt-9 text-headingColor xl:text-[32px] text-2xl lg:text-[28px] font-bold">
          {data?.title}
        </h1>
        <div className="lg:mt-[23px] mt-4 text-navbarColor lg:leading-[30.6px] leading-7 xl:text-lg text-sm md:text-base">
          {parse(data?.description)}
        </div>
      </div>
      {/* This is the review section */}
      <div className="bg-[#FAFBFC] max-w-[973px] shadow-customCard flex flex-col justify-center items-center text-center mt-12 border-l-[6px] border-buttonColor">
        <img
          className="mt-[45px] lg:w-[82px] w-12 md:w-16 lg:h-[82px] h-12 md:h-16"
          src={reviewTag}
          alt=""
        />
        <h1 className="max-w-[668px] lg:mt-6 mt-3 xl:text-[28px] lg:text-2xl text-xl font-medium px-4 lg:px-0 lg:leading-[50.4px] leading-[34px]">
          Packaging is the first impression of your <br /> product— make it
          count. Together, let’s shape <br /> the future of packaging!
        </h1>
        <h1 className="text-buttonColor text-lg font-bold mt-6 mb-[45px]">
          Albeniz Kerry
        </h1>
      </div>
      <div className="mt-12">
        <h1 className="text-navbarColor text-lg">{data?.descPrimary}</h1>
      </div>
    </div>
  );
};

export default BlogDetailsSection;
