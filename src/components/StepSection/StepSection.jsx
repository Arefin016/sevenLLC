import steponePic1 from "../../assets/images/step1.png";
import steponePic2 from "../../assets/images/step2.png";
import steponePic3 from "../../assets/images/step3.png";
import steponePic4 from "../../assets/images/step4.png";
import Button from "../Button/Button";
import {
  StepFormLogoOne,
  StepFormLogoThree,
  StepFormLogoTwo,
} from "../SvgContainer/SvgConainer";

const StepSection = ({ title, subtitle, btnText, isAbout }) => {
  return (
    <section className="">
      <div className="container mx-auto">
        {/* This is title section */}
        <div className="text-center ">
          <h2 className="text-headingColor text-5xl font-bold">{title}</h2>
          <p className="mt-6 text-navbarColor text-[22px]">{subtitle}</p>
        </div>
        {/* This is the step section */}
        <div className="flex flex-row gap-6 mt-16 mb-12 ">
          {/* Step 1  */}
          <div
            className={`max-w-[348px]  h-auto py-[50px] px-[37px] rounded-[20px] o ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic1} alt="" />
              <StepFormLogoOne />
            </div>
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                Submit Your Design or Idea
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                Upload your design or work with our team to bring your vision to
                life.
              </p>
            </div>
          </div>
          {/* Step 1  */}
          {/* Step 2 */}
          <div
            className={`max-w-[348px] h-auto py-[50px] px-[37px] rounded-[20px] ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic2} alt="" />
              <StepFormLogoTwo />
            </div>
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                Receive a Quote
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                Get competitive pricing within 2-3 business <br /> days.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          {/* Step 3 */}
          <div
            className={`max-w-[348px]  h-auto py-[50px] px-[37px] rounded-[20px] ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic3} alt="" />
              <StepFormLogoThree />
            </div>
            {/*  */}
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                Production Begins
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                We handle everything from manufacturing to quality checks.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          {/* Step 4 */}
          <div
            className={`max-w-[348px] h-auto py-[50px] px-[37px] rounded-[20px] ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic4} alt="" />
            </div>
            {/*  */}
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                Delivered to You
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                Your high-quality packaging arrives on time, every <br /> time.
              </p>
            </div>
          </div>
          {/* Step 4 */}
        </div>
        {/* */}
        <div className="flex justify-center">
          {/* This is button section */}
          <Button text={btnText} color={"bg-buttonColor"} />
        </div>
      </div>
    </section>
  );
};

export default StepSection;
