/* eslint-disable react/prop-types */
import { StepFormLogoOne } from "../SvgContainer/SvgConainer";

const StepCard = ({ isAbout, data }) => {
  return (
    <div
      className={`max-w-[348px]  h-auto py-[50px] px-[37px] rounded-[20px] o ${
        isAbout ? "bg-white" : "bg-[#FAFBFC]"
      }`}
    >
      <div className="flex relative">
        <img src={data?.image} alt="" />
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
