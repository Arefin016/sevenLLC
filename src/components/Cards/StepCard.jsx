/* eslint-disable react/prop-types */
import { StepFormLogoOne } from "../SvgContainer/SvgConainer";

const StepCard = ({ isAbout, data }) => {
  return (
    <div
      className={`xl:max-w-[348px] w-full h-auto xl:py-[50px] py-5 md:py-7 px-7 rounded-[20px]  ${
        isAbout ? "bg-white" : "bg-[#FAFBFC]"
      }`}
    >
      <div className="flex relative">
        <img
          className="xl:w-[58px] w-7 xl:h-[94px] h-10"
          src={data?.image}
          alt=""
        />
        {!data?.lastItem && <StepFormLogoOne />}
      </div>

      <div className="mt-7">
        <h1 className="text-headingColor lg:text-lg text-base font-semibold">
          {data?.title}
        </h1>
        <p className="lg:text-lg text-sm text-navbarColor mt-[9px]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
